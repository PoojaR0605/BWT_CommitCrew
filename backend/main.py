from fastapi import FastAPI
from pydantic import BaseModel
from heuristics import analyze_message
from score_builder import build_report

app = FastAPI()

class AnalyzeRequest(BaseModel):
    message: str

@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    metrics = analyze_message(req.message)
    report = build_report(metrics)
    return report
