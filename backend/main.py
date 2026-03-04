from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from enum import Enum
from heuristics import analyze_message

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Channel(str, Enum):
    email = "email"
    sms = "sms"
    whatsapp = "whatsapp"

class AnalyzeRequest(BaseModel):
    message: str
    channel: Channel

@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    threats = analyze_message(req.message)
    total = sum(int(t.get("score", 0)) for t in threats)
    overall_score = max(0, min(100, round(total * 2)))
    risk_level = _risk_level(overall_score)
    explanation = _explain(threats, risk_level)
    return {
        "overall_score": overall_score,
        "risk_level": risk_level,
        "threats": threats,
        "explanation": explanation,
    }

@app.get("/")
def root():
    return {"status": "PhishLens API is running"}

def _risk_level(score: int) -> str:
    if score >= 85:
        return "CRITICAL"
    if score >= 60:
        return "HIGH"
    if score >= 30:
        return "MEDIUM"
    return "LOW"

def _explain(threats: list, level: str) -> str:
    if not threats:
        return "No significant manipulation indicators detected."
    names = ", ".join(t.get("name", "") for t in threats)
    details = "; ".join(t.get("description", "") for t in threats if t.get("description"))
    return f"Detected {names}. {details}. Overall risk {level}."
