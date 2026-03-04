import React, { useState } from "react";
import InputPanel from "./components/InputPanel.jsx";
import ThreatDashboard from "./components/ThreatDashboard.jsx";

export default function App() {
  const [message, setMessage] = useState("");
  const [report, setReport] = useState(null);

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
            onAnalyze={setReport}
          />
          {report && <ThreatDashboard result={report} />}
        </div>
      </div>
    </div>
  );
}
