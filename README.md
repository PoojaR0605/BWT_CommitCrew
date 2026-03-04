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
- Completely ignore the psychological manipulation inside the message itself
- Cannot detect phishing messages that contain **no links at all**
- Cover email only — leaving SMS and WhatsApp users fully exposed
- Return a binary Safe/Unsafe verdict with zero explanation, teaching users nothing

**PhishLens was built to fix all of this.**

---

## 💡 Solution Overview

PhishLens is a real-time **communication trust scorer** that analyzes incoming messages across Email, SMS, and WhatsApp. It works on **both URL-based phishing and pure text messages with zero links** — detecting the psychological manipulation itself, not just malicious URLs.

It identifies **6 threat vectors** and returns a layered breakdown — telling users exactly why a message is dangerous, with severity scores, confidence percentages, and plain-English explanations they can learn from. Each threat is scored with an individual **confidence percentage** — 60% for single indicator matches, 75% for two indicators, and 95% for three or more — giving users a clear picture of detection certainty.

> Each threat card includes a **?** help button that explains the threat in plain English, how attackers use it, and how to stay safe.

| # | Threat Vector | Detection Method |
|---|---|---|
| 🔴 | **Urgency Manipulation** | Keyword patterns — "act now", "expires", "immediate action" |
| 🟠 | **Authority Spoofing** | Sender claims bank, CEO, government with mismatched domain |
| 🟡 | **Brand Impersonation** | Known brand in body but sender domain doesn't match |
| 🔵 | **Link Mismatch** | Display text URL vs actual href URL comparison |
| 🟣 | **Sentiment Pressure** | Fear, panic, and threat language NLP scoring |
| ⚪ | **Zero-Link Phishing** | Pure-text psychological manipulation — no URL needed — CEO fraud, gift card scams, social engineering |

Every analysis returns an **overall risk level** (LOW / MEDIUM / HIGH / CRITICAL), individual threat scores from 0–10, confidence percentages, and a plain-English explanation of exactly what manipulation tactics were found.

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
│  [ Manipulation Breakdown Cards + ? Help Tooltips ]  │
│  [ Session History Panel ]                           │
│  [ 🤖 Ask PhishLens — Floating AI Assistant ]        │
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
│  ② Rule Engine     →  Regex + NLP heuristics         │
│  ③ Score Builder   →  Assemble layered threat report │
│  ④ Confidence      →  Per-threat confidence scoring  │
│  ⑤ Session Logger  →  Append to session_log.csv      │
└─────────────────────────┬────────────────────────────┘
                          │
              NLP + Regex Detection Engine
                          │
                          ▼
┌──────────────────────────────────────────────────────┐
│           LAYER 03 — AI Detection Engine             │
│              Built entirely on Trae AI               │
│                                                      │
│  • Urgency score (0–10) + confidence %               │
│  • Authority spoofing detection                      │
│  • Brand impersonation analysis                      │
│  • Link mismatch check                               │
│  • Sentiment pressure scoring                        │
│  • Zero-link pure-text manipulation detection        │
│  • Plain-English explanation for the user            │
└──────────────────────────────────────────────────────┘
```

---

## 🧠 How It Works

**Layer 1 — React Frontend**
User pastes a suspicious Email, SMS, or WhatsApp message — with or without links — selects the channel, and clicks Analyze. Results render as color-coded threat cards showing each manipulation tactic found, its score, and confidence percentage. A **?** help button on each card explains the threat in plain English. A session history panel tracks all previous analyses. A Clear/Reset button resets the dashboard without clearing history.

**Layer 2 — FastAPI Backend**
Receives the message and channel via HTTP POST. Extracts URLs, sender patterns, and body text. Runs a custom regex and NLP rule engine across all 6 threat vectors — including pure text messages with no links — to generate heuristic scores and confidence levels. Assembles a final JSON threat report and logs every analysis to `session_log.csv` for persistent history.

**Layer 3 — AI Detection Engine**
Built entirely through Trae AI. Scores each of the 6 manipulation vectors independently, assigns confidence percentages, assigns an overall risk level, and generates a plain-English explanation — even when no URL is present.

---

## 🤖 AI Assistant — Ask PhishLens

PhishLens includes a built-in floating AI Assistant accessible via the **🤖 Ask PhishLens** button at the bottom right of the screen.

Users can ask questions about any threat type, phishing tactics, or what risk levels mean — and get instant plain-English answers without leaving the app.

**Example questions you can ask:**
- *"What is urgency manipulation?"*
- *"What does CRITICAL mean?"*
- *"What is zero-link phishing?"*
- *"How do I stay safe?"*
- *"What is brand impersonation?"*
- *"How do attackers trick people?"*

The assistant provides educational, plain-English guidance that helps users understand phishing threats and protect themselves — making PhishLens not just a detector but a **phishing education tool**.

---

## 📊 Session History

Every analysis is automatically saved to `backend/session_log.csv` with the following columns:

| Column | Description |
|---|---|
| timestamp | Date and time of the analysis |
| channel | Email, SMS, or WhatsApp |
| risk_level | LOW / MEDIUM / HIGH / CRITICAL |
| overall_score | Score from 0 to 100 |
| threats_detected | Number of threats found |
| message_preview | First 50 characters of the message |

Every scan is permanently recorded — even after closing the browser. Open `session_log.csv` in Excel or any spreadsheet tool to review the full analysis history.

---

## ⚡ Built Entirely on Trae AI

> Every line of code in this project was written, debugged, and refined entirely inside **Trae AI**. No external IDEs. No other platforms. Trae was our complete development environment from the first file to the final commit.

We sincerely thank **Trae AI** for providing a powerful platform that made it possible to build a production-quality full-stack cybersecurity application through intelligent, prompt-driven development. The Builder feature handled scaffolding, debugging, CORS fixes, component wiring, and iterative refinement — all through natural language prompts inside Trae.

| What We Built | How Trae Was Used |
|---|---|
| React Frontend | All components scaffolded, styled, and debugged via Trae Builder |
| FastAPI Backend | Endpoint, CORS, heuristics engine — all generated through Trae |
| Threat Detection Engine | 6-vector NLP + regex detection logic written entirely in Trae |
| Confidence Scoring | Per-threat confidence system built via Trae Builder |
| Session Logger | CSV history logger built and integrated via Trae Builder |
| History Panel + Reset | UI features added and wired through Trae AI |
| AI Assistant | Floating Ask PhishLens chat panel built entirely in Trae |

---

## 🕵️ Detection Coverage

| Threat | Risk Level | Confidence | Example |
|---|---|---|---|
| Urgency Manipulation | CRITICAL | Up to 95% | "Act NOW or your account expires" |
| Authority Spoofing | CRITICAL | Up to 95% | Fake bank / government / CEO impersonation |
| Brand Impersonation | HIGH | Up to 95% | PayPal / Google / Amazon with fake domain |
| Link Mismatch | HIGH | Up to 95% | "paypal.com" text pointing to malicious URL |
| Sentiment Pressure | MEDIUM | Up to 95% | "suspended", "blocked", "unauthorized access" |
| Zero-Link Phishing | HIGH | Up to 75% | "I'm your CEO — urgently buy gift cards" |

---

## 📁 Repository Structure

```
BWT_CommitCrew/
│
├── README.md                          ← this file
├── architecture.png                   ← architecture diagram
│
├── frontend/
│   ├── src/App.jsx                    ← main app + floating AI assistant
│   ├── src/components/
│   │   ├── InputPanel.jsx             ← message input + channel selector
│   │   ├── ThreatDashboard.jsx        ← threat cards + confidence + ? tooltips
│   │   ├── ManipulationBreakdown.jsx  ← per-threat breakdown cards
│   │   └── HistoryPanel.jsx           ← session history with click-to-load
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── main.py                        ← FastAPI app + /analyze endpoint
│   ├── heuristics.py                  ← 6-vector detection + confidence scoring
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
| Runtime | Node.js 24 + Vite | Frontend package management and dev server |
| Backend | Python 3.11 + FastAPI | Analysis engine + REST API |
| Server | Uvicorn | ASGI server for FastAPI |
| Detection | Regex + NLP Heuristics | 6-vector manipulation + confidence scoring |
| History | CSV Session Logger | Persistent analysis log |

---

## ✦ Why PhishLens Stands Out

| Traditional Detectors | PhishLens |
|---|---|
| Checks URL blacklists only | Analyzes psychological manipulation patterns |
| Binary Safe / Unsafe verdict | Multi-layer threat breakdown with severity + confidence scores |
| Email only | Email + SMS + WhatsApp |
| Cannot detect zero-link phishing | Detects pure-text manipulation with no URLs |
| No explanation given | Tells users exactly WHY a message is dangerous |
| Reactive after user clicks | Proactive — intercepts before user acts |
| No history tracking | Persistent CSV session log of all analyses |
| No user education | Built-in AI Assistant teaches users about phishing tactics |

---

## 🔮 Future Implementations

PhishLens is designed to grow. The following enhancements are planned for future development:

**Detection Improvements**
- Voice call phishing detection (vishing) via real-time audio transcription
- Multilingual support — detect manipulation tactics in regional languages
- Fine-tuned ML model trained on real-world phishing datasets for higher accuracy

**Platform Expansion**
- Browser extension for Gmail and Outlook — scan emails in real time without copy-pasting
- Mobile app for Android and iOS — scan SMS and WhatsApp messages natively
- API endpoint for enterprise integration — connect PhishLens to existing security tools
- Slack and Teams bot — analyze suspicious messages directly inside workplace chat

**Analytics and Reporting**
- Visual analytics dashboard showing threat trends over time
- Post-session PDF report with all flagged messages and screenshots
- Organization-level threat heatmap for security teams
- Automated alerts when CRITICAL threats are detected

**Intelligence Upgrades**
- Threat intelligence feed integration — cross-reference with known phishing campaigns
- Crowdsourced threat database — community-reported phishing patterns
- Continuous learning from new phishing tactics as they emerge

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
