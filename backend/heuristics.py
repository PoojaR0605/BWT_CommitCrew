import re

SUSPICIOUS_KEYWORDS = [
    "password",
    "verify",
    "urgent",
    "immediately",
    "account",
    "click",
    "login",
    "update",
    "security",
    "suspend",
    "confirm",
    "bank",
    "invoice",
    "payment",
    "gift",
    "winner",
    "limited",
    "offer",
]

def analyze_message(text: str) -> dict:
    t = text.lower()
    keyword_hits = sum(1 for w in SUSPICIOUS_KEYWORDS if w in t)
    has_link = bool(re.search(r"https?://|www\.", text))
    has_domain_like = bool(re.search(r"[a-z0-9.-]+\.[a-z]{2,}", text))
    exclamations = text.count("!")
    uppercase_ratio = _uppercase_ratio(text)
    asks_credentials = bool(re.search(r"(enter|provide|share).*(password|otp|pin|credentials)", t))
    urgency = bool(re.search(r"(urgent|immediately|asap|now|today|deadline)", t))
    threat = bool(re.search(r"(suspend|deactivate|cancel|terminate)", t))
    rewards = bool(re.search(r"(prize|winner|gift|free|offer)", t))
    return {
        "keyword_hits": keyword_hits,
        "has_link": has_link,
        "has_domain_like": has_domain_like,
        "exclamations": exclamations,
        "uppercase_ratio": uppercase_ratio,
        "asks_credentials": asks_credentials,
        "urgency": urgency,
        "threat": threat,
        "rewards": rewards,
    }

def _uppercase_ratio(text: str) -> float:
    total = sum(1 for c in text if c.isalpha())
    upper = sum(1 for c in text if c.isupper())
    return 0.0 if total == 0 else upper / total
