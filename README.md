# BWT_CommitCrew
Real-time AI-powered phishing detector that decodes psychological manipulation in Email, SMS &amp; WhatsApp built 100% on Trae AI.

# 🛡️ PhishLens — BWT_CommitCrew

> A real-time manipulation-aware phishing detector built 100% on Trae AI.

![Theme](https://img.shields.io/badge/Theme-Cyber%20Threat%20Detection-00ffe5?style=flat-square&labelColor=0a0a0a) ![Trae](https://img.shields.io/badge/Built%20With-Trae%20AI-9b4dff?style=flat-square&labelColor=0a0a0a) ![AI](https://img.shields.io/badge/AI-Claude%20API-3d8fff?style=flat-square&labelColor=0a0a0a)

---

## 💡 Solution Overview

Most phishing tools ask *"Is this URL malicious?"* — that's the wrong question.

Attackers don't just use bad links. They weaponize human psychology through urgency, fake authority, and panic-triggering language — before the user ever clicks anything.

**PhishLens detects the manipulation, not just the malware.**

It analyzes incoming messages across Email, SMS, and WhatsApp and returns a layered threat breakdown — scoring 5 psychological attack vectors and explaining exactly why a message is dangerous in plain English.

| Threat Vector | How It's Detected |
|---|---|
| 🔴 Urgency Manipulation | "Act NOW", "Expires in 1hr" keyword patterns |
| 🟠 Authority Spoofing | Fake bank / CEO / government with mismatched domain |
| 🟡 Brand Impersonation | Known brand name but sender domain doesn't match |
| 🔵 Link Mismatch | Display text vs actual URL comparison |
| 🟣 Sentiment Pressure | Fear and panic language scored by Claude AI |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│            LAYER 01 — React Frontend            │
│         localhost:3000 · React + Tailwind        │
│                                                 │
│  [ Paste Email / SMS / WhatsApp message ]       │
│  [ Select Channel ] → [ Analyze Button ]        │
│  [ Live Threat Score ] [ Breakdown Cards ]      │
└────────────────────┬────────────────────────────┘
                     │
              HTTP POST /analyze
             JSON { message, channel }
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│          LAYER 02 — FastAPI Backend             │
│        localhost:8000 · Python + FastAPI         │
│                                                 │
│  ① Pre-processor  →  Extract URLs, body, sender │
│  ② Rule Engine    →  Regex heuristics           │
│  ③ AI Layer       →  Call Claude API            │
│  ④ Score Builder  →  Assemble threat report     │
└────────────────────┬────────────────────────────┘
                     │
         HTTPS · Anthropic Claude API
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│         LAYER 03 — Claude AI Engine             │
│       Anthropic API · Integrated via Trae       │
│                                                 │
│  • Urgency score (0–10)                         │
│  • Authority spoofing detection                 │
│  • Brand impersonation analysis                 │
│  • Link mismatch check                          │
│  • Sentiment pressure score                     │
│  • Plain-English explanation for the user       │
└─────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Build Platform | Trae AI |
| Frontend | React + Tailwind CSS |
| Backend | Python 3.11 + FastAPI |
| AI Engine | Anthropic Claude API |
| Detection | Regex + NLP Heuristics |

---

*BWT_CommitCrew · Built 100% with Trae AI · Under 24 Hours*
