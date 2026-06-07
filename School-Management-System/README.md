# Narayana's Kids — School Website

Official web platform for **Narayana's Kids, Washim** — a modern school website with admissions information, academic programs, campus highlights, and interactive tools for parents, students, and visitors.

Built as a full-stack application with a React frontend and an Express backend for enquiries, AI chatbot, and email notifications.

---

## Features

### Public Website
- **31-page responsive site** covering admissions, academics, campus life, and school information
- **Modern UI** with Tailwind CSS v4, gradient hero sections, image galleries, and animated components
- **Mega-menu navigation** with search and mobile-friendly layout
- **Home page sections**: hero, stats, featured content, achievements gallery, info cards, and enquiry form
- **Online forms**: enquiry, brochure request, job application, and alumni network registration

### AI School Assistant (Chatbot)
- **Site-wide floating chat button** available on every page
- **Multimodal support** — send text messages or upload images
- **Dual AI provider fallback**:
  - Primary: Google Gemini (`gemini-1.5-flash`)
  - Fallback: Groq (`llama-3.3-70b-versatile` / `llama-3.2-11b-vision-preview`)
- School-focused system prompt for admissions, fees, programs, and campus questions
- API keys kept server-side — never exposed to visitors

### Enquiry & Email System
- **Enquiry form** on the home page sends submissions to the admin inbox
- **Automatic confirmation email** sent to the user after submission
- Powered by Nodemailer (Gmail SMTP)

### Web Analytics (PostHog)
- **Page view tracking** across all SPA routes
- **Autocapture** for clicks and interactions
- **Custom events**: `chat_opened`, `chat_closed`, `chat_message_sent`, `chat_error`
- **Ad-blocker bypass** via `/ingest` proxy in Vite dev server

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, Vite 7, React Router 7, Tailwind CSS 4 |
| **Analytics** | PostHog (`posthog-js`) |
| **Backend** | Node.js, Express 4, Nodemailer |
| **AI** | Google Generative AI SDK, Groq SDK |
| **Tooling** | ESLint, Nodemon |

---

## Project Structure

```
School-Management-System/
├── my-react-app/                 # Frontend (Vite + React)
│   ├── src/
│   │   ├── App.jsx               # Router, PostHog tracker, global layout
│   │   ├── main.jsx              # App entry + PostHog init
│   │   ├── components/           # Reusable UI (Navbar, ChatWidget, Footer, etc.)
│   │   ├── pages/                # 32 route pages
│   │   ├── lib/
│   │   │   ├── api.js            # API base URL helper
│   │   │   └── posthog.js        # PostHog init & event helpers
│   │   └── assets/               # Images and media
│   ├── .env.example
│   └── vite.config.js            # Vite + PostHog proxy config
│
└── Backend/                      # Express API server
    ├── server.js                 # Routes: enquiry, chat, health
    ├── services/
    │   └── chatService.js        # Gemini → Groq AI fallback logic
    ├── .env.example
    └── .gitignore
```

---

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/contact` | Contact |
| `/about-narayan` | About Narayan |
| `/about-us` | About Us |
| `/chairman-message` | Chairman's Message |
| `/initiatives` | Narayana Initiatives |
| `/news` | News |
| `/awards` | Awards |
| `/school-song` | School Song |
| `/social-outreach` | Social Outreach |
| `/brochure` | School Brochure |
| `/brochure-form` | Brochure Request Form |
| `/careers` | Careers |
| `/job-application` | Job Application Form |
| `/blogs` | Blogs |
| `/alumni` | Alumni |
| `/alumni-network-form` | Alumni Network Form |
| `/why-narayana` | Why Narayana |
| `/admissions` | Admissions |
| `/admissions-ay-2026` | Admissions AY 2026 |
| `/fee-structure` | Fee Structure |
| `/digital-learning` | Digital Learning |
| `/innovation-lab` | Innovation Lab |
| `/innovative-academic-programs` | Innovative Academic Programs |
| `/thematic-learning-program` | Thematic Learning Program |
| `/school-infrastructure` | School Infrastructure |
| `/our-labs` | Our Labs |
| `/personalized-learning` | Personalized Learning |
| `/service-learning` | Social Impact & Service Learning |
| `/wellness-mindfulness` | Wellness & Mindfulness |
| `/academic-challenges` | Academic Challenges |
| `/student-experience` | Student Experience |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Gmail account** with an App Password (for enquiry emails)
- **Gemini API key** — [Google AI Studio](https://aistudio.google.com/)
- **Groq API key** — [Groq Console](https://console.groq.com/)
- **PostHog project** — [PostHog](https://posthog.com/) (optional, for analytics)

### 1. Clone the repository

```bash
git clone https://github.com/Om7972/School-Website.git
cd School-Website/School-Management-System
```

### 2. Backend setup

```bash
cd Backend
npm install
cp .env.example .env
```

Edit `Backend/.env`:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=admin@example.com
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key
```

Start the backend:

```bash
npm run dev
```

Server runs at **http://localhost:5000**

### 3. Frontend setup

```bash
cd ../my-react-app
npm install
cp .env.example .env
```

Edit `my-react-app/.env`:

```env
VITE_API_URL=http://localhost:5000
VITE_POSTHOG_KEY=your_posthog_project_api_key
VITE_POSTHOG_HOST=/ingest
VITE_POSTHOG_UI_HOST=https://us.posthog.com
```

Start the frontend:

```bash
npm run dev
```

App runs at **http://localhost:5173**

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/enquiry` | Submit student enquiry (sends admin + user emails) |
| `POST` | `/api/chat` | AI chatbot — text and optional image |

### `POST /api/enquiry`

**Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "mobile": "string",
  "state": "string",
  "city": "string",
  "school": "string",
  "standard": "string"
}
```

### `POST /api/chat`

**Body:**
```json
{
  "message": "What are the admission requirements?",
  "history": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi! How can I help?" }
  ],
  "image": {
    "data": "base64_string",
    "mimeType": "image/jpeg"
  }
}
```

**Response:**
```json
{
  "success": true,
  "reply": "Assistant response here...",
  "provider": "gemini"
}
```

---

## Environment Variables

### Backend (`Backend/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `EMAIL_USER` | Yes | Gmail address for sending emails |
| `EMAIL_PASS` | Yes | Gmail App Password |
| `ADMIN_EMAIL` | Yes | Recipient for enquiry notifications |
| `PORT` | No | Server port (default: `5000`) |
| `GEMINI_API_KEY` | Yes | Google Gemini API key |
| `GROQ_API_KEY` | Yes | Groq API key (chatbot fallback) |

### Frontend (`my-react-app/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | Yes | Backend URL (e.g. `http://localhost:5000`) |
| `VITE_POSTHOG_KEY` | No | PostHog project API key |
| `VITE_POSTHOG_HOST` | No | PostHog ingest path (use `/ingest` for dev proxy) |
| `VITE_POSTHOG_UI_HOST` | No | PostHog dashboard URL |

> **Never commit `.env` files.** They are listed in `.gitignore`.

---

## Scripts

### Frontend (`my-react-app`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend (`Backend`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with Nodemon (auto-reload) |
| `npm start` | Start production server |

---

## PostHog Analytics

PostHog is initialized in `main.jsx` and tracks SPA page views via `App.jsx`.

In development, events are proxied through `/ingest` (configured in `vite.config.js`) to avoid ad-blocker interference.

**For production**, set up the same `/ingest` reverse proxy on your hosting (Nginx, Cloudflare, Vercel rewrites, etc.) so analytics are not blocked for real visitors.

Tracked custom events:
- `chat_opened` / `chat_closed`
- `chat_message_sent` (includes `has_image`, `provider`)
- `chat_error`

---

## Deployment Notes

1. **Frontend**: Build with `npm run build` and serve the `dist/` folder (Vercel, Netlify, Nginx, etc.)
2. **Backend**: Deploy `Backend/` to a Node.js host (Railway, Render, VPS, etc.)
3. Set `VITE_API_URL` to your production backend URL before building the frontend
4. Configure a production `/ingest` proxy for PostHog
5. Use environment variables on your host — do not ship `.env` files

---

## Security

- API keys (`GEMINI_API_KEY`, `GROQ_API_KEY`, email credentials) live only in `Backend/.env`
- Frontend env vars are limited to `VITE_*` prefixed values (safe for browser exposure)
- `.env` files are gitignored at both the repo root and per-package level

---

## License

ISC
