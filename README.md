# BWT_CommitCrew
Real-time AI-powered phishing detector that decodes psychological manipulation in Email, SMS &amp; WhatsApp built 100% on Trae AI.

<div align="center">

# 🛡️ PhishLens
### Manipulation-Aware Communication Threat Detector

> *"Don't just scan links. Decode manipulation."*

![Cyber Threat Detection](https://img.shields.io/badge/Theme-Cyber%20Threat%20Detection-00ffe5?style=for-the-badge&labelColor=03070f)
![Build With Trae](https://img.shields.io/badge/Built%20With-Trae%20AI-9b4dff?style=for-the-badge&labelColor=03070f)
![Hackathon](https://img.shields.io/badge/Hackathon-Build%20With%20Trae-ff2d4e?style=for-the-badge&labelColor=03070f)
![Detection Speed](https://img.shields.io/badge/Detection-Sub%20300ms-00ff9d?style=for-the-badge&labelColor=03070f)
![AI Powered](https://img.shields.io/badge/AI-Claude%20API-3d8fff?style=for-the-badge&labelColor=03070f)

**Repository:** `BWT_CommitCrew` &nbsp;·&nbsp; **Challenge:** A — Trust Nothing In Your Inbox &nbsp;·&nbsp; **Theme:** 02

</div>

---

## 🚨 The Problem

Most phishing detectors ask the wrong question: **"Is this URL malicious?"**

Attackers don't just use bad links — they **weaponize human psychology**. They manufacture urgency, fake authority, and trigger panic — before the user even clicks anything. Traditional tools miss this entirely.

| What Tools Do Today | What Attackers Actually Use |
|---|---|
| Check URL blacklists | Rotate domains every few minutes |
| Scan for known malware | Craft psychologically manipulative text |
| Cover email only | Attack via SMS, WhatsApp, and voice |
| Say "UNSAFE" with no explanation | Exploit urgency, authority, and fear |

---

## 💡 Solution Overview

PhishLens is a real-time **communication trust scorer** that analyzes incoming messages across **Email, SMS, and WhatsApp**. Instead of a binary safe/unsafe verdict, it returns a **layered manipulation breakdown** — telling users exactly which psychological tactics are being used against them, scored by severity, with plain-English explanations they can learn from.

### 🔍 What PhishLens Detects

| Threat Vector | How It's Detected | Severity |
|---|---|---|
| 🔴 **Urgency Manipulation** | "Act NOW", "Expires in 1hr", "Immediate action" keyword patterns | CRITICAL |
| 🟠 **Authority Spoofing** | Sender claims to be bank, CEO, government with mismatched domain | CRITICAL |
| 🟡 **Brand Impersonation** | Known brand name in body but sender domain doesn't match | HIGH |
| 🔵 **Link Mismatch** | Display text vs actual URL href comparison | HIGH |
| 🟣 **Sentiment Pressure** | NLP fear/panic/threat language scoring via Claude AI | MEDIUM |
| 🟢 **Zero-Link Phishing** | Pure-text psychological manipulation — no URL required | HIGH |
| ⚪ **SMS Smishing** | Same 5-vector analysis applied to SMS/WhatsApp format | MULTI |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 01 — PRESENTATION                      │
│                      React Frontend                             │
│              localhost:3000 · React + Tailwind CSS              │
│                                                                 │
│  [ Message Input ]  [ Channel Selector ]  [ Analyze Button ]   │
│  [ Live Threat Score Dashboard ]  [ Manipulation Breakdown ]    │
│  [ Explainability View — "Why is this dangerous?" ]             │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                    HTTP POST /analyze
                  JSON { message, channel }
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  LAYER 02 — PROCESSING ENGINE                   │
│                   Python FastAPI Backend                        │
│              localhost:8000 · Python 3.11 + FastAPI             │
│                                                                 │
│  ① Pre-processor   →  Extract URLs, sender, subject, body      │
│  ② Rule Engine     →  Regex heuristics (urgency, spoof, links) │
│  ③ AI Layer        →  Send enriched context to Claude API      │
│  ④ Score Builder   →  Assemble final layered threat report     │
└───────────────────────────┬─────────────────────────────────────┘
                            │
               HTTPS · Anthropic Claude API
               Structured JSON Response
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│               LAYER 03 — AI INTELLIGENCE                        │
│                    Claude AI Engine                             │
│         Anthropic Claude · Prompt Engineering · JSON Output     │
│                  [ Integrated via Trae AI ]                     │
│                                                                 │
│  • Urgency Manipulation Score (0–10)                           │
│  • Authority Spoofing Detection                                 │
│  • Brand Impersonation Analysis                                 │
│  • Link Mismatch Check                                         │
│  • Sentiment Pressure Scoring                                   │
│  • Plain-English Explanation for user                          │
└─────────────────────────────────────────────────────────────────┘
```

> See `architecture.png` in this repository for the full visual diagram.

---

## 🧠 How It Works

### Layer 1 — Message Input (React Frontend)
User pastes a suspicious Email, SMS, or WhatsApp message into the input panel, selects the channel type, and hits Analyze. The raw message is sent as a JSON payload to the backend via HTTP POST /analyze.

### Layer 2 — Pre-processing & Rule Engine (FastAPI Backend)
The backend extracts URLs, sender info, subject line, and body text. A custom regex rule engine scans for urgency keywords, link mismatches between display text and actual URLs, and known sender spoofing patterns — generating an initial heuristic score.

### Layer 3 — AI Analysis (Claude API via Trae)
The enriched message context is sent to Claude via Anthropic's API — integrated entirely through Trae AI. Claude analyzes 5 psychological manipulation vectors and returns a structured JSON with individual threat scores, detected tactics, and a plain-English explanation for the user.

### Layer 4 — Score Builder & Response Assembly
The backend merges heuristic rule scores with Claude AI scores into a final layered threat report. Each threat vector is scored 0–10, an overall risk level (LOW / MEDIUM / HIGH / CRITICAL) is assigned, and the full JSON is returned to the frontend.

### Layer 5 — Live Dashboard (React)
The frontend renders color-coded threat cards — red for critical, orange for high, yellow for medium. Each card shows the threat type, score, and explanation. Users learn not just that a message is dangerous but exactly what tactic was used and why.

---

## ⚡ Built 100% With Trae AI

> **This project was built entirely on Trae AI — the official build platform for this hackathon. No external IDEs. No other tools. Start to finish, everything lives on Trae.**

| What We Built | How Trae Was Used |
|---|---|
| React Frontend | Components designed, generated, and iterated entirely inside Trae |
| FastAPI Backend | Scaffolded, written, and debugged via Trae AI chat |
| Claude API Integration | Prompt engineering crafted and refined through Trae |
| Heuristic Rule Engine | Threat detection rules written and tested using Trae's tools |
| Architecture | Decisions and folder structure planned with Trae AI |
| Debugging | All live error fixing handled through Trae during build |

---

## 📁 File Structure

```
BWT_CommitCrew/
│
├── README.md                        ← this file
├── architecture.png                 ← architecture diagram
│
├── frontend/                        ← React app
│   ├── src/App.jsx                  ← main app entry
│   ├── src/components/
│   │   ├── InputPanel.jsx           ← message input + channel selector
│   │   ├── ThreatDashboard.jsx      ← live threat score display
│   │   └── ManipulationBreakdown.jsx  ← per-threat breakdown cards
│   └── package.json
│
├── backend/                         ← FastAPI engine
│   ├── main.py                      ← FastAPI app + /analyze endpoint
│   ├── analyzer.py                  ← Claude API integration
│   ├── heuristics.py                ← regex rule engine
│   ├── score_builder.py             ← threat report assembler
│   └── requirements.txt
│
└── samples/
    └── test_messages.json           ← 5 demo phishing scenarios
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Trae AI | Latest | Complete build platform — entire project built here |
| React | 18+ | Frontend UI — live threat dashboard |
| Tailwind CSS | 3+ | Styling — dark cyber theme |
| Python | 3.11 | Core backend language |
| FastAPI | 0.110+ | REST API — /analyze endpoint |
| Anthropic Claude API | claude-sonnet | AI manipulation analysis + explanation |
| Uvicorn | Latest | ASGI server for FastAPI |
| python-dotenv | Latest | Environment variable management |

---

## 📈 Build Journey — 24 Hours on Trae

```
Phase 01 (00–02h)  →  Setup & Planning      — Opened Trae, scaffolded project, defined API contract
Phase 02 (02–07h)  →  Backend Engine         — FastAPI + regex rule engine + Claude API via Trae
Phase 03 (07–13h)  →  Frontend Interface     — React UI components built and refined inside Trae
Phase 04 (13–18h)  →  Integration & Polish   — Connected layers, tuned Claude prompts via Trae
Phase 05 (18–22h)  →  Demo Preparation       — 3 live scenarios + talking points via Trae
Phase 06 (22–24h)  →  Submit & Present       — Final push to BWT_CommitCrew, submitted on portal
```

---

## ✦ Why PhishLens Stands Out

| Traditional Phishing Detectors | ✦ PhishLens |
|---|---|
| ✗ Checks if URL is in a blacklist | ✓ Analyzes psychological manipulation patterns |
| ✗ Binary Safe / Unsafe verdict | ✓ Multi-layer threat breakdown with severity scores |
| ✗ Email only | ✓ Email + SMS + WhatsApp text support |
| ✗ No explanation given to user | ✓ Tells users exactly WHY a message is dangerous |
| ✗ Reactive — triggers after user acts | ✓ Proactive — intercepts before user acts |
| ✗ Cannot detect zero-link phishing | ✓ Detects pure-text psychological manipulation |

---

## ⚠️ Limitations

- Detection accuracy improves with longer, more structured messages
- Very short SMS messages (under 10 words) may produce lower confidence scores
- Claude API requires a valid Anthropic API key — free tier available at console.anthropic.com
- Designed for hackathon demo — runs on localhost, not yet deployed to cloud

---

## 🔮 Future Improvements

- Browser extension that scans emails in Gmail/Outlook in real time
- Voice call phishing detection (vishing) via audio transcription
- Historical threat database to track repeated attack patterns per user
- Fine-tuned open-source model to remove dependency on Claude API

---

<div align="center">

## 👥 Team

**BWT_CommitCrew**

Build With Trae Hackathon &nbsp;·&nbsp; Cyber Threat Detection &nbsp;·&nbsp; Theme 02

Challenge A — Trust Nothing In Your Inbox

*Built 100% with Trae AI · Under 24 Hours*

---

📄 **License** — MIT License · Built during hackathon, open for the world.

</div>
