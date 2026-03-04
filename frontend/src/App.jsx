import React, { useState } from "react";
import InputPanel from "./components/InputPanel.jsx";
import ThreatDashboard from "./components/ThreatDashboard.jsx";

export default function App() {
  const [message, setMessage] = useState("");
  const [report, setReport] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">PhishLens</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InputPanel
            value={message}
            onChange={setMessage}
            onAnalyze={() => {}}
          />
          <ThreatDashboard report={report} />
        </div>
      </div>
    </div>
  );
}
