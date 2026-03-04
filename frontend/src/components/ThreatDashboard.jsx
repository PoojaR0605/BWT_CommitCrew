import React, { useState } from "react";

export default function ThreatDashboard({ result, report }) {
  const data = result || report || null;
  if (!data) {
    return (
      <div className="bg-gray-900 rounded-lg border border-cyan-700 shadow p-4">
        <div className="text-sm text-gray-400">No analysis yet.</div>
      </div>
    );
  }
  const score =
    typeof data.overall_score === "number"
      ? data.overall_score
      : typeof data.score === "number"
      ? data.score
      : 0;
  const levelRaw = (data.risk_level || data.level || "").toString().toUpperCase();
  const level = ["CRITICAL", "HIGH", "MEDIUM", "LOW"].includes(levelRaw) ? levelRaw : "LOW";
  const threats = Array.isArray(data.threats) ? data.threats : [];
  const explanation = data.explanation || "";
  const overallConf = Number(data.confidence_score || 0);

  const badge = (lvl) => {
    if (lvl === "CRITICAL") return "bg-red-600 text-white border-red-400";
    if (lvl === "HIGH") return "bg-orange-500 text-black border-orange-300";
    if (lvl === "MEDIUM") return "bg-yellow-400 text-black border-yellow-300";
    return "bg-green-500 text-black border-green-300";
  };
  const bar = (lvl) => {
    if (lvl === "CRITICAL") return "bg-red-600";
    if (lvl === "HIGH") return "bg-orange-500";
    if (lvl === "MEDIUM") return "bg-yellow-400";
    return "bg-green-500";
  };
  const threatBorder = (s) => {
    if (s >= 8) return "border-l-4 border-red-500";
    if (s >= 5) return "border-l-4 border-orange-400";
    if (s >= 1) return "border-l-4 border-yellow-300";
    return "border-l-4 border-gray-700";
  };
  const confBadge = (pct) => {
    if (pct >= 90) return "bg-green-500 text-black border-green-300";
    if (pct >= 70) return "bg-yellow-400 text-black border-yellow-300";
    return "bg-red-600 text-white border-red-400";
  };
  const [helpOpen, setHelpOpen] = useState(false);
  const [helpType, setHelpType] = useState("");
  const HELP = {
    "Urgency Manipulation": "Attackers create fake deadlines to make you panic and act without thinking. If a message says 'act now or lose your account' — slow down. Legitimate companies never pressure you this way.",
    "Authority Spoofing": "Attackers pretend to be your bank, CEO, or government to make you trust them. Always verify by calling the official number — never click links in the message.",
    "Brand Impersonation": "Attackers copy logos and names of trusted brands like PayPal or Google. Check the actual sender email domain — it will never match the real company.",
    "Link Mismatch": "The link text shows a trusted site but the actual URL goes somewhere dangerous. Always hover over links before clicking to see the real destination.",
    "Sentiment Pressure": "Words like suspended, blocked, compromised are designed to trigger fear and make you act without thinking. Take a breath — this is a manipulation tactic.",
    "Zero-Link Phishing": "No link needed to phish you. Attackers use pure psychology — fake authority, fake urgency — to manipulate you directly. CEO gift card scams work this way.",
  };
  const openHelp = (name) => {
    setHelpType(name);
    setHelpOpen(true);
  };
  const closeHelp = () => {
    setHelpOpen(false);
    setHelpType("");
  };

  return (
    <div className="bg-gray-950 text-gray-100 rounded-lg border border-cyan-700 shadow-lg p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-cyan-400">Security Dashboard</div>
        <div className="flex items-center gap-2">
          <div className={`px-3 py-1 rounded-md border text-sm ${badge(level)}`}>{level}</div>
          <div className={`px-3 py-1 rounded-md border text-sm ${confBadge(Math.round(overallConf))}`}>
            {Math.round(overallConf)}%
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-300">Overall Score</div>
          <div className="font-bold">{Math.round(score)}</div>
        </div>
        <div className="w-full h-3 bg-gray-800 rounded-md overflow-hidden border border-gray-700">
          <div
            className={`h-full ${bar(level)} transition-all`}
            style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
          />
        </div>
      </div>
      {threats.length === 0 ? (
        <div className="bg-gray-900 border border-green-500 rounded-md p-4">
          <div className="text-green-400 font-semibold">All Clear — No threats detected</div>
          <div className="text-sm text-gray-400">No psychological manipulation indicators found.</div>
        </div>
      ) : (
        <div className="space-y-3">
          {threats.map((t, idx) => (
            <div
              key={(t.name || "") + idx}
              className={`bg-gray-900 rounded-md border border-gray-700 p-4 ${threatBorder(Number(t.score || 0))}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-cyan-300 font-semibold">{t.name}</div>
                  <button
                    type="button"
                    onClick={() => openHelp(t.name)}
                    className="w-6 h-6 flex items-center justify-center rounded-full border border-cyan-600 text-cyan-300 hover:bg-cyan-700 hover:text-black transition"
                    aria-label="Threat help"
                  >
                    ?
                  </button>
                </div>
                <div className="text-sm">
                  <span className="text-gray-400">Score:</span>{" "}
                  <span className="font-bold">{Number(t.score || 0)}/10</span>
                  {" "}|{" "}
                  <span className="text-gray-400">Confidence:</span>{" "}
                  <span className="font-bold">{Number(t.confidence_score || 0)}%</span>
                </div>
              </div>
              <div className="text-sm text-gray-300 mt-2">{t.description}</div>
            </div>
          ))}
        </div>
      )}
      {helpOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeHelp}
        >
          <div
            className="bg-gray-950 border border-cyan-700 rounded-lg shadow-xl p-5 max-w-lg w-11/12 text-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-semibold text-cyan-400">{helpType || "Assistant"}</div>
              <button
                type="button"
                onClick={closeHelp}
                className="px-2 py-1 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                X
              </button>
            </div>
            <div className="text-sm text-gray-200">
              {HELP[helpType] || "Guidance unavailable for this threat type."}
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-900 rounded-md border border-cyan-600 p-4">
        <div className="text-cyan-400 font-semibold mb-1">Explanation</div>
        <div className="text-sm text-gray-200">
          {explanation || "Summary not provided by the analyzer."}
        </div>
      </div>
    </div>
  );
}
