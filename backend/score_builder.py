def build_report(metrics: dict) -> dict:
    score = 0.0
    score += metrics.get("keyword_hits", 0) * 6
    if metrics.get("has_link"):
        score += 15
    if metrics.get("has_domain_like"):
        score += 5
    score += min(metrics.get("exclamations", 0), 5) * 3
    score += metrics.get("uppercase_ratio", 0) * 10
    if metrics.get("asks_credentials"):
        score += 20
    if metrics.get("urgency"):
        score += 10
    if metrics.get("threat"):
        score += 8
    if metrics.get("rewards"):
        score += 8
    level = "low"
    if score >= 70:
        level = "high"
    elif score >= 40:
        level = "medium"
    indicators = []
    for k, v in metrics.items():
        indicators.append({"name": k, "value": v})
    return {
        "score": min(score, 100),
        "level": level,
        "indicators": indicators,
    }
