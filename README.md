# BWT_CommitCrew
Real-time AI-powered phishing detector that decodes psychological manipulation in Email, SMS &amp; WhatsApp built 100% on Trae AI.
BWT_CommitCrew // README_v1.0THEME_02 // CHALLENGE_A
🛡 Cyber Threat Detection
⚡ Build With Trae
🔴 Hackathon Live
✓ Sub-300ms Detection
AI-Powered
PHISHLENS
// MANIPULATION-AWARE COMMUNICATION THREAT DETECTOR
Most detectors ask: "Is this URL malicious?" — That's the wrong question.
Attackers don't just use bad links. They weaponize human psychology.
PhishLens decodes the manipulation, not just the malware.
<300ms
Detection Speed
5
Threat Vectors
3
Input Channels
100%
Built on Trae AI
// 01 — PROBLEM STATEMENT
Why Existing Solutions Fail
🔗
They Only Check Links
Traditional tools scan URLs against blacklists. Attackers rotate domains in minutes — making blacklists obsolete before they're published.

🧠
They Ignore Psychology
The real weapon is the message itself — urgency, fear, authority. A message with no links can still steal credentials through pure manipulation.

📱
Only Covers Email
Attackers have moved to SMS and WhatsApp. Most detectors only handle email, leaving mobile users completely exposed.

⚫
No User Education
Telling users "UNSAFE" without explaining why doesn't build awareness. Users stay vulnerable because they never learn the tactics used against them.

// 02 — SOLUTION OVERVIEW
What PhishLens Does
PhishLens is a real-time communication trust scorer that analyzes incoming messages across Email, SMS, and WhatsApp. Instead of a binary safe/unsafe verdict, it returns a layered manipulation breakdown — telling users exactly which psychological tactics are being used against them, scored by severity, with plain-English explanations they can learn from.

Urgency Manipulation
"Act NOW", "Expires in 1 hour" — pressure tactics that override rational thinking before the user pauses to verify.

Authority Spoofing
Fake bank, HR, CEO, or government impersonation. Leverages institutional trust to bypass critical judgment.

Brand Impersonation
Sender mimicking known companies — PayPal, Google, your bank. Logo language without a legitimate domain.

Link Mismatch
Display text says "paypal.com" — actual URL leads somewhere else entirely. A classic and effective deception vector.

Sentiment Pressure
NLP scoring of fear, panic, and threat language. Measures emotional manipulation intensity across the message body.

Multi-Channel Support
Email, SMS, and WhatsApp text all analyzed through the same pipeline. One tool — every attack surface covered.

// 03 — SYSTEM ARCHITECTURE
How It Works — End to End
// ARCHITECTURE DIAGRAM — PhishLens v1.0 — BWT_CommitCrew
01
// PRESENTATION LAYER
React Frontend
User Interface · localhost:3000 · React + Tailwind CSS
Message Input — Email / SMS / WhatsApp
Channel Selector
Live Threat Score Dashboard
Manipulation Breakdown Cards
Explainability View
HTTP POST /analyze · JSON Payload
02
// PROCESSING ENGINE
Python FastAPI Backend
Analysis Engine · localhost:8000 · Python 3.11 + FastAPI
① Pre-processor — Extract URLs, sender, body
② Rule Engine — Regex heuristics
③ AI Layer — Claude API call
④ Score Builder — Assemble threat report
HTTPS · Anthropic API · Structured JSON Response
03
// AI INTELLIGENCE LAYER
Claude AI Engine  [ via Trae AI ]
Anthropic Claude · Prompt Engineering · JSON Output
Urgency Score (0–10)
Authority Spoofing Detection
Brand Impersonation Analysis
Link Mismatch Check
Sentiment Pressure Score
Plain-English Explanation
Frontend Layer
Backend Engine
AI Intelligence
Urgency / Auth Threat
Brand / Link Threat
Safe / Explanation
// 04 — BUILT WITH TRAE AI
Our Entire Build Runs on Trae
⚡ Trae AI — Our Complete Build Platform
PhishLens is built 100% using Trae AI — the official AI-powered IDE for this hackathon. Every component, every integration, every prompt — designed and delivered entirely through Trae's AI-powered environment. No external tools. No other IDEs. Just Trae, start to finish.

React frontend components designed and iterated inside Trae
FastAPI backend scaffolded and debugged via Trae AI chat
Claude API prompt engineering refined through Trae
Threat detection rules written and tested using Trae's tools
Architecture decisions and project structure planned with Trae AI
Live debugging and error fixing handled through Trae during build
// 05 — BUILD PHASES
How We Built It in 24 Hours
PHASE 01 // HOURS 00–02
Setup & Planning
Opened Trae AI, defined project structure, set up the repo, planned the 5 detection categories and API contract with Trae's assistance.

PHASE 02 // HOURS 02–07
Backend Engine
Built the FastAPI /analyze endpoint, regex rule engine for heuristics, and Claude API integration — all generated and debugged inside Trae.

PHASE 03 // HOURS 07–13
Frontend Interface
Built the dark cyber-themed React UI — input panel, threat score dashboard, and manipulation breakdown cards — using Trae to generate and refine each component.

PHASE 04 // HOURS 13–18
Integration & Polish
Connected frontend to backend, resolved issues via Trae, tuned Claude prompts for sharper explanations, and tested all 5 detection vectors with real phishing samples.

PHASE 05 // HOURS 18–22
Demo Preparation
Prepared 3 live demo scenarios — Email phish, SMS smish, CEO fraud. Used Trae to generate talking points and finalize the presentation flow.

PHASE 06 // HOURS 22–24
Submit & Present
Final push to GitHub BWT_CommitCrew. Rehearsed 5-minute live demo. Submitted on hackathon portal before deadline.

// 06 — TECH STACK
Built With
⚡
BUILD PLATFORM
Trae AI
⚛️
FRONTEND
React + Tailwind CSS
🐍
BACKEND
Python + FastAPI
🤖
AI ENGINE
Claude API
🔍
DETECTION
NLP + Regex Rules
// 07 — WHY WE STAND OUT
PhishLens vs Everyone Else
TRADITIONAL PHISHING DETECTORS	✦ PHISHLENS
✗Checks if URL is in a blacklist	✓Analyzes psychological manipulation patterns
✗Binary Safe / Unsafe verdict	✓Multi-layer threat breakdown with severity scores
✗Email only	✓Email + SMS + WhatsApp text support
✗No explanation given to user	✓Tells users exactly WHY a message is dangerous
✗Reactive — triggers after user acts	✓Proactive — intercepts before user acts
✗Cannot detect zero-link phishing	✓Detects pure-text psychological manipulation
// 08 — THE TEAM
CommitCrew
BWT_CommitCrew
Build With Trae Hackathon  ·  Cyber Threat Detection  ·  Theme 02
CYBER DEFENSE PROTOCOL
Challenge A — Trust Nothing In Your Inbox
Built 100% with Trae AI  ·  <24 Hours
CYBER_DEFENSE_PROTOCOL
BWT_CommitCrew // PhishLens v1.0
CHALLENGE_A // THEME_02
