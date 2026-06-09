import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import dns from 'dns';
import { generateChatReply } from './services/chatService.js';

// Fix Render IPv6 outbound timeout issue by forcing IPv4 resolution
dns.setDefaultResultOrder('ipv4first');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const normalizeOrigin = (url) => (url ? url.replace(/\/+$/, '') : '');

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:4173',
  'https://narayana-kids.vercel.app',
]
  .map(normalizeOrigin)
  .filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) return true;

  const normalized = normalizeOrigin(origin);
  if (allowedOrigins.includes(normalized)) return true;

  // Allow Vercel preview deployments (e.g. narayana-kids-xxx.vercel.app)
  if (normalized.endsWith('.vercel.app')) return true;

  return process.env.NODE_ENV !== 'production';
};

app.use(cors({
  origin: (origin, callback) => {
    if (isAllowedOrigin(origin)) {
      callback(null, origin || true);
    } else {
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors());

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));



app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Narayana Institute API — use /api/health, /api/enquiry, /api/chat',
  });
});

// Routes
app.post('/api/enquiry', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'state', 'city', 'school', 'standard'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
    if (!adminEmail) {
      return res.status(503).json({
        success: false,
        message: 'Email service is not configured. Please contact the administrator.'
      });
    }

    // Bypass Render's SMTP blocks by using the FormSubmit.co HTTP API
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "Student Name": `${formData.firstName} ${formData.lastName}`,
        "Email": formData.email,
        "Mobile": formData.mobile,
        "Class Standard": formData.standard,
        "School": formData.school,
        "City": formData.city,
        "State": formData.state,
        "_subject": `New Enquiry from ${formData.firstName} ${formData.lastName}`,
        "_replyto": formData.email,
        "_autoresponse": `Dear ${formData.firstName},\n\nThank you for your interest in Narayana Institute! We have received your enquiry for Class ${formData.standard} at our ${formData.school}.\n\nOur admissions team will review your details and contact you shortly.\n\nBest regards,\nNarayana Institute`
      })
    });

    const result = await formSubmitResponse.json();

    if (!formSubmitResponse.ok || !result.success) {
      throw new Error(result.message || 'FormSubmit API failed');
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Enquiry submission error:', error.message);
    console.error('Full error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try again later.'
    });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history, image } = req.body;

    if (!message?.trim() && !image?.data) {
      return res.status(400).json({
        success: false,
        message: 'Message or image is required',
      });
    }

    const { reply, provider } = await generateChatReply({ message, history, image });

    res.status(200).json({
      success: true,
      reply,
      provider,
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to process your message. Please try again.',
    });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Narayana Institute Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  const emailReady = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email: ${emailReady ? 'configured' : 'MISSING — set EMAIL_USER and EMAIL_PASS on Render'}`);
  console.log(`🌐 CORS allowed: ${allowedOrigins.join(', ') || 'none'} + *.vercel.app`);
  console.log(`🤖 AI chatbot ready (Gemini → Groq fallback)`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
}); 