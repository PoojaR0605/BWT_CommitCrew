import csv
import os
from datetime import datetime

def log_session(result: dict, message: str, channel: str):
    path = os.path.join(os.path.dirname(__file__), "session_log.csv")
    exists = os.path.exists(path)
    fields = ["timestamp", "channel", "risk_level", "overall_score", "threats_detected", "message_preview"]
    ts = datetime.utcnow().isoformat()
    risk = str(result.get("risk_level", ""))
    score = result.get("overall_score", result.get("score", 0))
    threats = result.get("threats", [])
    count = len(threats) if isinstance(threats, list) else 0
    preview = (message or "")[:50]
    row = [ts, channel, risk, score, count, preview]
    with open(path, "a", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        if not exists:
            w.writerow(fields)
        w.writerow(row)
