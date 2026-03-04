import React from "react";

export default function HistoryPanel({ items, onSelect }) {
  const badge = (lvl) => {
    const l = (lvl || "").toUpperCase();
    if (l === "CRITICAL") return "bg-red-600 text-white border-red-400";
    if (l === "HIGH") return "bg-orange-500 text-black border-orange-300";
    if (l === "MEDIUM") return "bg-yellow-400 text-black border-yellow-300";
    return "bg-green-500 text-black border-green-300";
  };
  const label = (ch) => {
    if (ch === "email") return "Email";
    if (ch === "sms") return "SMS";
    if (ch === "whatsapp") return "WhatsApp";
    return ch;
  };
  if (!items || items.length === 0) {
    return (
      <div className="bg-gray-900 rounded-lg border border-cyan-700 shadow p-4">
        <div className="text-sm text-gray-400">No history yet.</div>
      </div>
    );
  }
  return (
    <div className="bg-gray-950 text-gray-100 rounded-lg border border-cyan-700 shadow-lg p-5 space-y-3">
      <div className="text-xl font-semibold text-cyan-400">History</div>
      <div className="space-y-2">
        {items.map((h, idx) => (
          <button
            key={(h.timestamp || "") + idx}
            type="button"
            onClick={() => onSelect && onSelect(h.result)}
            className="w-full text-left bg-gray-900 rounded-md border border-gray-700 hover:border-cyan-600 transition p-3"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-300">{h.timestamp}</div>
              <div className={`px-2 py-0.5 rounded-md border text-xs ${badge(h.risk_level)}`}>{h.risk_level}</div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="text-xs text-gray-400">{label(h.channel)}</div>
              <div className="text-xs text-gray-400">{String(h.overall_score)} / 100</div>
            </div>
            <div className="text-sm text-gray-200 mt-2">{h.message}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
