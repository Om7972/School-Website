import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from 'groq-sdk';

const SYSTEM_PROMPT = `You are a helpful, friendly assistant for Narayana's Kids school in Washim, Maharashtra, India.
You help parents, students, and visitors with questions about:
- Admissions and enrollment (including AY 2026)
- Fee structure and payment
- Academic programs, labs, and infrastructure
- School timings, contact information, and campus visits
- Extracurricular activities, wellness, and student experience

Be concise, warm, and professional. If you don't know a specific detail, suggest visiting the Contact page or submitting an enquiry form on the website.
Never make up phone numbers, emails, or fees — direct users to the official website pages instead.`;

const MAX_HISTORY = 10;

function trimHistory(history = []) {
  return history
    .filter((msg) => msg?.role && msg?.content)
    .slice(-MAX_HISTORY)
    .map((msg) => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: String(msg.content).trim(),
    }))
    .filter((msg) => msg.content.length > 0);
}

function buildGeminiHistory(history) {
  return history.map((msg) => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));
}

async function chatWithGemini(message, history, image) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('Gemini API key not configured');

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: SYSTEM_PROMPT,
  });

  const parts = [{ text: message }];
  if (image?.data && image?.mimeType) {
    parts.push({
      inlineData: {
        data: image.data,
        mimeType: image.mimeType,
      },
    });
  }

  const chat = model.startChat({
    history: buildGeminiHistory(history),
  });

  const result = await chat.sendMessage(parts);
  const reply = result.response.text();

  if (!reply?.trim()) throw new Error('Empty response from Gemini');
  return { reply: reply.trim(), provider: 'gemini' };
}

async function chatWithGroq(message, history, image) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('Groq API key not configured');

  const groq = new Groq({ apiKey });
  const model = image ? 'llama-3.2-11b-vision-preview' : 'llama-3.3-70b-versatile';

  const messages = [{ role: 'system', content: SYSTEM_PROMPT }];

  for (const msg of history) {
    messages.push({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content,
    });
  }

  if (image?.data && image?.mimeType) {
    messages.push({
      role: 'user',
      content: [
        { type: 'text', text: message },
        {
          type: 'image_url',
          image_url: {
            url: `data:${image.mimeType};base64,${image.data}`,
          },
        },
      ],
    });
  } else {
    messages.push({ role: 'user', content: message });
  }

  const completion = await groq.chat.completions.create({
    model,
    messages,
    max_tokens: 1024,
    temperature: 0.7,
  });

  const reply = completion.choices[0]?.message?.content;
  if (!reply?.trim()) throw new Error('Empty response from Groq');
  return { reply: reply.trim(), provider: 'groq' };
}

export async function generateChatReply({ message, history = [], image = null }) {
  const trimmedMessage = String(message || '').trim();
  if (!trimmedMessage && !image) {
    throw new Error('Message is required');
  }

  const safeHistory = trimHistory(history);
  const prompt = trimmedMessage || 'Please describe what you see in this image.';

  const providers = [
    { name: 'gemini', fn: () => chatWithGemini(prompt, safeHistory, image) },
    { name: 'groq', fn: () => chatWithGroq(prompt, safeHistory, image) },
  ];

  const errors = [];

  for (const provider of providers) {
    try {
      return await provider.fn();
    } catch (error) {
      console.error(`Chat provider ${provider.name} failed:`, error.message);
      errors.push(`${provider.name}: ${error.message}`);
    }
  }

  throw new Error(`All AI providers failed. ${errors.join(' | ')}`);
}
