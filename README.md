# PhishLens — Manipulation-Aware Threat Detector

Real-time phishing detector that decodes psychological manipulation in Email, SMS and WhatsApp — built 100% on Trae AI

## Solution Overview
- Detects psychological manipulation techniques in text messages
- Five threat vectors:
  - Urgency Manipulation
  - Authority Spoofing
  - Brand Impersonation
  - Link Mismatch
  - Sentiment Pressure
- Returns overall score, risk level (LOW/MEDIUM/HIGH/CRITICAL), detected threats, and a plain-English explanation

## Architecture
- React Frontend (Vite + Tailwind) — UI for input and interactive threat dashboard
- FastAPI Backend — endpoint `/analyze` performing message analysis
- AI Detection Engine — heuristics for manipulation detection and scoring

## How We Built It
- Built 100% on Trae AI in under 24 hours
- End-to-end development: backend endpoints, frontend UI, configuration, and logging

## Tech Stack

| Layer | Technology |
|-------|------------|
| IDE | Trae AI |
| Frontend | React, Vite, Tailwind CSS |
| Backend | Python, FastAPI |

## How to Run
- Backend:

```bash
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --port 8000
```

- Frontend:

```bash
cd frontend
npm install
npm run dev
```

Open the frontend dev server (default http://localhost:5173). The backend allows CORS from localhost:3000 and localhost:5173.
