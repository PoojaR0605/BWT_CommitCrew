import React, { useState } from "react";

export default function InputPanel({ value, onChange, onAnalyze }) {
  const [channel, setChannel] = useState("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!value || !value.trim()) {
      setError("Please paste a message to analyze.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ message: value, channel }),
      });
      if (res.ok) {
        const data = await res.json();
        if (onAnalyze) onAnalyze(data);
      } else {
        let msg = "Analysis failed. Please try again.";
        try {
          const err = await res.json();
          if (err && err.detail) msg = String(err.detail);
        } catch {}
        setError(msg);
      }
    } catch (e) {
      setError("Network error. Please ensure the API is running on port 8000.");
    } finally {
      setLoading(false);
    }
  };

  const channelBtn = (id, label) => {
    const active = channel === id;
    const base = "px-3 py-2 rounded-md border transition text-sm";
    const on = "bg-cyan-600 text-black border-cyan-400 shadow";
    const off = "bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700";
    return (
      <button
        type="button"
        className={`${base} ${active ? on : off}`}
        onClick={() => setChannel(id)}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-cyan-700 shadow-lg p-5 space-y-4 text-gray-100">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-cyan-400">Channel</div>
        <div className="flex gap-2">
          {channelBtn("email", "Email")}
          {channelBtn("sms", "SMS")}
          {channelBtn("whatsapp", "WhatsApp")}
        </div>
      </div>
      <textarea
        className="w-full h-48 p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Paste your suspicious message here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <div className="text-red-400 text-sm">{error}</div>
      )}
      <div className="flex items-center justify-end">
        <button
          type="button"
          disabled={loading}
          onClick={submit}
          className={`px-5 py-2 rounded-md font-medium ${
            loading
              ? "bg-gray-700 text-gray-300 cursor-not-allowed"
              : "bg-cyan-500 text-black hover:bg-cyan-400"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  );
}
