import React, { useState } from "react";
import InputPanel from "./components/InputPanel.jsx";
import ThreatDashboard from "./components/ThreatDashboard.jsx";
import HistoryPanel from "./components/HistoryPanel.jsx";

export default function App() {
  const [message, setMessage] = useState("");
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState([]);
  const onAnalyze = (payload) => {
    const { result, channel, message: msgPreview, timestamp } = payload || {};
    setReport(result);
    const entry = {
      timestamp,
      channel,
      risk_level: result?.risk_level,
      overall_score: result?.overall_score,
      message: msgPreview,
      result,
    };
    setHistory((prev) => [entry, ...prev]);
  };
  const onReset = () => {
    setReport(null);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-cyan-400">PhishLens <span aria-hidden>🛡️</span></div>
            <div className="text-sm text-gray-400">Manipulation-Aware Threat Detector</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InputPanel
            value={message}
            onChange={setMessage}
            onAnalyze={onAnalyze}
            onReset={onReset}
          />
          <div className="space-y-6">
            {report && <ThreatDashboard result={report} />}
            <HistoryPanel items={history} onSelect={setReport} />
          </div>
        </div>
      </div>
    </div>
  );
}
