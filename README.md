# 🛡️ PhishLens — Manipulation-Aware Threat Detector

> *"Don't just scan links. Decode manipulation."*

![Trae AI](https://img.shields.io/badge/Built%20With-Trae%20AI-9b4dff?style=flat-square&labelColor=0a0a0a)
![Theme](https://img.shields.io/badge/Theme-Cyber%20Threat%20Detection-00ffe5?style=flat-square&labelColor=0a0a0a)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-3d8fff?style=flat-square&labelColor=0a0a0a)
![FastAPI](https://img.shields.io/badge/Backend-Python%20FastAPI-00ff9d?style=flat-square&labelColor=0a0a0a)
![Challenge](https://img.shields.io/badge/Challenge%20A-Trust%20Nothing%20In%20Your%20Inbox-ff2d4e?style=flat-square&labelColor=0a0a0a)

**Team:** BWT_CommitCrew &nbsp;·&nbsp; **Challenge:** A — Trust Nothing In Your Inbox &nbsp;·&nbsp; **Theme:** 02 — Cyber Threat Detection

---

## 🚨 The Problem

Most phishing detectors ask the wrong question — *"Is this URL malicious?"*

Attackers don't just use bad links. They **weaponize human psychology** — manufacturing urgency, faking authority, and triggering panic before a user even pauses to think. Traditional tools miss this entirely because they:

- Only check URLs against blacklists that go stale within minutes
- Completely ignore the psychological manipulation inside the message
- Cover email only — leaving SMS and WhatsApp users fully exposed
- Return a binary Safe/Unsafe verdict with zero explanation, teaching users nothing

**PhishLens was built to fix all of this.**

---

## 💡 Solution Overview

PhishLens is a real-time **communication trust scorer** that analyzes incoming messages across Email, SMS, and WhatsApp. It detects **5 psychological manipulation vectors** and returns a layered threat breakdown — telling users exactly why a message is dangerous, not just that it is.

| # | Threat Vector | Detection Method |
|---|---|---|
| 🔴 | **Urgency Manipulation** | Keyword patterns — "act now", "expires", "immediate action" |
| 🟠 | **Authority Spoofing** | Sender claims bank, CEO, government with mismatched domain |
| 🟡 | **Brand Impersonation** | Known brand in body but sender domain doesn't match |
| 🔵 | **Link Mismatch** | Display text URL vs actual href URL comparison |
| 🟣 | **Sentiment Pressure** | Fear, panic, and threat language NLP scoring |

Every analysis returns an **overall risk level** (LOW / MEDIUM / HIGH / CRITICAL), individual threat scores from 0–10, and a plain-English explanation users can learn from.

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────┐
│              LAYER 01 — React Frontend               │
│          localhost:5173 · React + Tailwind CSS        │
│                                                      │
│  [ Paste Message ]  [ Email · SMS · WhatsApp ]       │
│  [ Analyze Button ]  [ Clear / Reset Button ]        │
│  [ Live Threat Score Dashboard ]                     │
│  [ Manipulation Breakdown Cards ]                    │
│  [ Session History Panel ]                           │
└─────────────────────────┬────────────────────────────┘
                          │
                 HTTP POST /analyze
               JSON { message, channel }
                          │
                          ▼
┌──────────────────────────────────────────────────────┐
│             LAYER 02 — FastAPI Backend               │
│          localhost:8000 · Python 3.11 + FastAPI       │
│                                                      │
│  ① Pre-processor   →  Extract URLs, sender, body     │
│  ② Rule Engine     →  Regex heuristics               │
│  ③ Score Builder   →  Assemble layered threat report │
│  ④ Session Logger  →  Append to session_log.csv      │
└─────────────────────────┬────────────────────────────┘
                          │
              NLP + Regex Detection Engine
                          │
                          ▼
┌──────────────────────────────────────────────────────┐
│           LAYER 03 — AI Detection Engine             │
│              Built entirely on Trae AI               │
│                                                      │
│  • Urgency score (0–10)                              │
│  • Authority spoofing detection                      │
│  • Brand impersonation analysis                      │
│  • Link mismatch check                               │
│  • Sentiment pressure scoring                        │
│  • Plain-English explanation for the user            │
└──────────────────────────────────────────────────────┘
```

---

## 🧠 How It Works

**Layer 1 — React Frontend**
User pastes a suspicious Email, SMS, or WhatsApp message, selects the channel, and clicks Analyze. Results render as color-coded threat cards. A session history panel tracks all previous analyses in the current session. A Clear/Reset button resets the dashboard without losing history.

**Layer 2 — FastAPI Backend**
Receives the message and channel via HTTP POST. Extracts URLs, sender patterns, and body text. Runs a custom regex rule engine across all 5 threat vectors to generate heuristic scores. Assembles a final JSON threat report. Logs every analysis to `session_log.csv` for persistent history.

**Layer 3 — AI Detection Engine**
Built entirely through Trae AI. Scores each of the 5 manipulation vectors independently, assigns an overall risk level, and generates a plain-English explanation of exactly what manipulation tactics were found and why the message is dangerous.

---

## ⚡ Built Entirely on Trae AI

> Every line of code in this project was written, debugged, and refined entirely inside **Trae AI**. No external IDEs. No other platforms. Trae was our complete development environment from the first file to the final commit.

We sincerely thank **Trae AI** for providing a powerful platform that made it possible to build a production-quality full-stack application completely through AI-assisted development. The Builder feature handled scaffolding, debugging, CORS configuration, component wiring, and iterative refinement — all through natural language prompts.

| What We Built | How Trae Was Used |
|---|---|
| React Frontend | All components scaffolded, styled, and debugged via Trae Builder |
| FastAPI Backend | Endpoint, CORS, heuristics engine — all generated through Trae |
| Threat Detection Engine | 5-vector NLP detection logic written entirely in Trae |
| Session Logger | CSV history logger built and integrated via Trae Builder |
| History Panel + Reset | UI features added and wired through Trae AI |

---

## 🕵️ Detection Coverage

| Threat | Risk Level | Example Pattern |
|---|---|---|
| Urgency Manipulation | CRITICAL | "Act NOW or your account expires" |
| Authority Spoofing | CRITICAL | Fake bank / government / CEO impersonation |
| Brand Impersonation | HIGH | PayPal / Google / Amazon name with fake domain |
| Link Mismatch | HIGH | "paypal.com" link pointing to malicious URL |
| Sentiment Pressure | MEDIUM | "suspended", "blocked", "unauthorized access" |
| Zero-Link Phishing | HIGH | Pure psychological manipulation with no URL |

---

## 📁 Repository Structure

```
BWT_CommitCrew/
│
├── README.md                          ← this file
├── architecture.png                   ← architecture diagram
│
├── frontend/
│   ├── src/App.jsx                    ← main app — wires all components
│   ├── src/components/
│   │   ├── InputPanel.jsx             ← message input + channel selector
│   │   ├── ThreatDashboard.jsx        ← live threat score display
│   │   ├── ManipulationBreakdown.jsx  ← per-threat breakdown cards
│   │   └── HistoryPanel.jsx           ← session history with click-to-load
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── main.py                        ← FastAPI app + /analyze endpoint
│   ├── heuristics.py                  ← 5-vector psychological detection engine
│   ├── score_builder.py               ← threat report assembler
│   ├── session_logger.py              ← CSV session history logger
│   ├── session_log.csv                ← persistent analysis history
│   └── requirements.txt
│
└── samples/
    └── test_messages.json             ← demo phishing scenarios
```

---

## 🛠️ Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| Build Platform | **Trae AI** | Complete development environment |
| Frontend | React 18 + Tailwind CSS | Live threat dashboard UI |
| Backend | Python 3.11 + FastAPI | Analysis engine + REST API |
| Detection | Regex + NLP Heuristics | 5-vector manipulation scoring |
| History | CSV Session Logger | Persistent analysis log |
| Dev Server | Vite + Uvicorn | Frontend and backend runners |

---

## ✦ Why PhishLens Stands Out

| Traditional Detectors | PhishLens |
|---|---|
| Checks URL blacklists only | Analyzes psychological manipulation patterns |
| Binary Safe / Unsafe verdict | Multi-layer threat breakdown with severity scores |
| Email only | Email + SMS + WhatsApp |
| No explanation given | Tells users exactly WHY a message is dangerous |
| Reactive after user clicks | Proactive — intercepts before user acts |
| Cannot detect zero-link phishing | Detects pure-text psychological manipulation |

---

## 🚀 How to Run

**Backend**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

*BWT_CommitCrew · PhishLens · Built 100% with Trae AI · Build With Trae Hackathon*
