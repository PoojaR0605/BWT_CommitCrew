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

def analyze_message(text: str) -> list:
    t = text.lower()
    threats = []
    urgency_terms = [
        "act now",
        "expires",
        "immediate",
        "urgent",
        "limited time",
        "last chance",
    ]
    urgency_found = [p for p in urgency_terms if p in t]
    if urgency_found:
        threats.append(
            {
                "name": "Urgency Manipulation",
                "description": ", ".join(sorted(set(urgency_found))),
                "score": 9,
            }
        )
    authority_terms = [
        "bank",
        "ceo",
        "government",
        "hr",
        "it department",
        "it support",
        "helpdesk",
        "security team",
    ]
    authority_found = []
    for p in authority_terms:
        if re.search(r"\b" + re.escape(p) + r"\b", t):
            authority_found.append(p)
    if authority_found:
        threats.append(
            {
                "name": "Authority Spoofing",
                "description": ", ".join(sorted(set(authority_found))),
                "score": 9,
            }
        )
    brands = ["paypal", "google", "amazon", "microsoft", "apple"]
    brand_hits = [b for b in brands if re.search(r"\b" + b + r"\b", t)]
    suspicious = [
        "verify",
        "login",
        "click",
        "update",
        "secure",
        "account",
        "password",
        "confirm",
    ]
    suspicious_hits = [s for s in suspicious if s in t]
    if brand_hits and suspicious_hits:
        threats.append(
            {
                "name": "Brand Impersonation",
                "description": "brands: "
                + ", ".join(sorted(set(brand_hits)))
                + "; patterns: "
                + ", ".join(sorted(set(suspicious_hits))),
                "score": 9,
            }
        )
    mismatch_descriptions = []
    for m in re.finditer(r"\[([^\]]+)\]\((https?://[^\)]+)\)", text):
        disp = m.group(1)
        href = m.group(2)
        d_host = _host_from_text(disp)
        h_host = _host_from_url(href)
        if d_host and h_host and d_host != h_host:
            mismatch_descriptions.append(disp + " -> " + href)
    for m in re.finditer(r'<a[^>]*href=["\'](https?://[^"\']+)["\'][^>]*>(.*?)</a>', text, re.IGNORECASE | re.DOTALL):
        href = m.group(1)
        disp = m.group(2)
        d_host = _host_from_text(disp)
        h_host = _host_from_url(href)
        if d_host and h_host and d_host != h_host:
            mismatch_descriptions.append(disp + " -> " + href)
    if mismatch_descriptions:
        threats.append(
            {
                "name": "Link Mismatch",
                "description": "; ".join(mismatch_descriptions[:5]),
                "score": 10,
            }
        )
    pressure_terms = [
        "suspended",
        "blocked",
        "unauthorized",
        "verify immediately",
        "compromised",
    ]
    pressure_found = [p for p in pressure_terms if p in t]
    if pressure_found:
        threats.append(
            {
                "name": "Sentiment Pressure",
                "description": ", ".join(sorted(set(pressure_found))),
                "score": 10,
            }
        )
    return threats

def analyze_message_metrics(text: str) -> dict:
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

def _host_from_url(url: str) -> str:
    m = re.search(r"https?://([^/]+)", url, re.IGNORECASE)
    return m.group(1).lower() if m else ""

def _host_from_text(text: str) -> str:
    m = re.search(r"([a-z0-9.-]+\.[a-z]{2,})", text, re.IGNORECASE)
    return m.group(1).lower() if m else ""
