# Deployment Guide — Render (Backend) + Vercel (Frontend)

Deploy the Narayana's Kids school website with the Express API on **Render** and the React app on **Vercel**.

---

## Prerequisites

- GitHub repo pushed: [Om7972/School-Website](https://github.com/Om7972/School-Website)
- Gmail App Password for enquiry emails
- Gemini API key + Groq API key (chatbot)
- PostHog project key (analytics)
- Vercel account — [vercel.com](https://vercel.com)
- Render account — [render.com](https://render.com)

---

## Part 1 — Deploy Backend on Render

### Step 1: Create a Web Service

1. Go to [dashboard.render.com](https://dashboard.render.com) → **New +** → **Web Service**
2. Connect your GitHub repo `School-Website`
3. Configure:

| Setting | Value |
|---------|-------|
| **Name** | `narayana-school-api` (or any name) |
| **Region** | Singapore (closest to India) or your preference |
| **Branch** | `main` |
| **Root Directory** | `School-Management-System/Backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

### Step 2: Add Environment Variables

In Render → your service → **Environment**, add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_PASS` | Gmail App Password |
| `ADMIN_EMAIL` | Email that receives enquiries |
| `GEMINI_API_KEY` | Your Gemini API key |
| `GROQ_API_KEY` | Your Groq API key |
| `FRONTEND_URL` | Leave blank for now — add after Vercel deploy |

> Render sets `PORT` automatically — do not hardcode it.

### Step 3: Deploy

1. Click **Create Web Service**
2. Wait for the build to finish (2–5 minutes)
3. Copy your Render URL, e.g. `https://narayana-school-api.onrender.com`
4. Test: open `https://YOUR-RENDER-URL.onrender.com/api/health` — you should see `{"status":"OK",...}`

---

## Part 2 — Deploy Frontend on Vercel

### Step 1: Import Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `School-Website` GitHub repo
3. Configure:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `School-Management-System/my-react-app` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### Step 2: Add Environment Variables

In Vercel → Project → **Settings** → **Environment Variables**:

| Key | Value | Environments |
|-----|-------|--------------|
| `VITE_API_URL` | `https://YOUR-RENDER-URL.onrender.com` (no trailing slash) | Production, Preview, Development |
| `VITE_POSTHOG_KEY` | Your PostHog project API key | Production, Preview |
| `VITE_POSTHOG_HOST` | `/api/ingest` | Production, Preview |
| `VITE_POSTHOG_UI_HOST` | `https://us.posthog.com` | Production, Preview |

> `VITE_*` variables are baked in at build time. Redeploy after changing them.

### Step 3: Deploy

1. Click **Deploy**
2. Wait for the build (~1–2 minutes)
3. Copy your Vercel URL, e.g. `https://school-website-xyz.vercel.app`

### Step 4: SPA + PostHog routing

`vercel.json` + `api/ingest/` serverless functions handle:
- React Router — all routes serve `index.html`
- PostHog proxy — `/api/ingest` forwards to PostHog (avoids ad-blockers)

No extra configuration needed.

---

## Part 3 — Connect Frontend & Backend

### Update Render CORS

1. Go to Render → your backend service → **Environment**
2. Set `FRONTEND_URL` to your Vercel URL:
   ```
   https://your-app.vercel.app
   ```
3. Render will auto-redeploy

### Verify end-to-end

| Test | How |
|------|-----|
| Site loads | Open your Vercel URL |
| All pages work | Navigate to `/contact`, `/fee-structure`, `/alumni` |
| Enquiry form | Submit on home page — check admin email |
| Chatbot | Click blue chat button — send a message |
| PostHog | Check Live Events in PostHog dashboard |
| Google Maps | Open `/contact` — map loads and directions work |

---

## Part 4 — Custom Domain (Optional)

### Vercel (Frontend)

1. Vercel → Project → **Settings** → **Domains**
2. Add your domain (e.g. `narayanakids.edu.in`)
3. Update DNS records as Vercel instructs
4. Update `FRONTEND_URL` on Render to your custom domain

### Render (Backend)

1. Render → Service → **Settings** → **Custom Domains**
2. Add e.g. `api.narayanakids.edu.in`
3. Update `VITE_API_URL` on Vercel to the new API domain
4. Redeploy Vercel

---

## Environment Variables Cheat Sheet

### Render (Backend)

```
EMAIL_USER=
EMAIL_PASS=
ADMIN_EMAIL=
FRONTEND_URL=https://your-app.vercel.app
GEMINI_API_KEY=
GROQ_API_KEY=
```

### Vercel (Frontend)

```
VITE_API_URL=https://your-api.onrender.com
VITE_POSTHOG_KEY=phc_...
VITE_POSTHOG_HOST=/ingest
VITE_POSTHOG_UI_HOST=https://us.posthog.com
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| CORS error on enquiry/chat | Set `FRONTEND_URL` on Render to `https://narayana-kids.vercel.app` (no trailing slash). Redeploy Render. |
| Double slash in API URL (`//api/enquiry`) | Set `VITE_API_URL` without trailing slash, redeploy Vercel |
| PostHog 404/405 on `/ingest` | Set `VITE_POSTHOG_HOST=/api/ingest` and redeploy Vercel (uses serverless proxy) |
| Chatbot not responding | Check Render logs; verify `GEMINI_API_KEY` and `GROQ_API_KEY` |
| PostHog blocked | Ensure `VITE_POSTHOG_HOST=/ingest` and `vercel.json` is deployed |
| 404 on page refresh | `vercel.json` SPA rewrite must be present |
| Render cold start slow | Free tier sleeps after 15 min — first request may take ~30s |
| Emails not sending | Use Gmail App Password, not regular password |

---

## Local Development

```bash
# Terminal 1 — Backend
cd School-Management-System/Backend
npm run dev

# Terminal 2 — Frontend
cd School-Management-System/my-react-app
npm run dev
```

Local URLs: Frontend `http://localhost:5173` | Backend `http://localhost:5000`
