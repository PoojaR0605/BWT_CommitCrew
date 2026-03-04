# BWT_CommitCrew
Real-time AI-powered phishing detector that decodes psychological manipulation in Email, SMS &amp; WhatsApp built 100% on Trae AI.

# 🛡️ PhishLens — BWT_CommitCrew

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
| 🟣 Sentiment Pressure | Fear and panic language detected via NLP |

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
│  ③ AI Layer       →  NLP threat analysis        │
│  ④ Score Builder  →  Assemble threat report     │
└────────────────────┬────────────────────────────┘
                     │
           NLP + Machine Learning
           Threat Scoring Engine
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│         LAYER 03 — AI Detection Engine          │
│         Built and trained using Trae AI         │
│                                                 │
│  • Urgency score (0–10)                         │
│  • Authority spoofing detection                 │
│  • Brand impersonation analysis                 │
│  • Link mismatch check                          │
│  • Sentiment pressure score                     │
│  • Plain-English explanation for the user       │
└─────────────────────────────────────────────────┘
```

**Layer 1 — React Frontend**
User pastes a message, selects the channel, and hits Analyze. Results display as color-coded threat cards showing each manipulation tactic and why it is dangerous.

**Layer 2 — FastAPI Backend**
Extracts message content and runs it through a regex rule engine for initial heuristic scoring, then passes enriched context to the AI detection engine for deep analysis.

**Layer 3 — AI Detection Engine**
Built entirely using Trae AI. Analyzes the message for all 5 psychological manipulation vectors and returns a threat report with individual scores and a plain-English explanation.

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Build Platform | Trae AI |
| Frontend | React + Tailwind CSS |
| Backend | Python 3.11 + FastAPI |
| AI Detection | NLP + Regex Heuristics |
| Styling | Dark Cyber Theme |

---

*BWT_CommitCrew · Built 100% with Trae AI · Under 24 Hours*
