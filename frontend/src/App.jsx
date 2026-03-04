import React, { useState } from "react";
import InputPanel from "./components/InputPanel.jsx";
import ThreatDashboard from "./components/ThreatDashboard.jsx";
import HistoryPanel from "./components/HistoryPanel.jsx";

export default function App() {
  const [message, setMessage] = useState("");
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState([]);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const QA = {
    "what is urgency manipulation": "Attackers create fake deadlines to make you panic and act without thinking. Slow down and verify independently.",
    "how do i stay safe": "Verify sender identity using official channels, avoid clicking links, never share credentials, and take a pause before acting.",
    "what is zero-link phishing": "Phishing without links using pure psychology: fake authority and urgency to get you to act. Verify requests directly.",
    "what does critical mean": "CRITICAL indicates very high risk with multiple strong manipulation signals. Treat as malicious and do not engage.",
  };
  const onSend = () => {
    const q = (chatInput || "").trim();
    if (!q) return;
    const userMsg = { role: "user", text: q, ts: new Date().toISOString() };
    const key = q.toLowerCase();
    let answer = QA[key];
    if (!answer) {
      if (key.includes("urgency")) answer = QA["what is urgency manipulation"];
      else if (key.includes("zero-link")) answer = QA["what is zero-link phishing"];
      else if (key.includes("critical")) answer = QA["what does critical mean"];
      else if (key.includes("safe")) answer = QA["how do i stay safe"];
      else answer = "PhishLens focuses on psychological manipulation: urgency, authority, brand impersonation, link mismatch, and sentiment pressure. Ask about any of these for guidance.";
    }
    const botMsg = { role: "assistant", text: answer, ts: new Date().toISOString() };
    setChatMessages((prev) => [...prev, userMsg, botMsg]);
    setChatInput("");
  };
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
    <>
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
    <button
      type="button"
      onClick={() => setAssistantOpen(true)}
      className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full bg-cyan-500 text-black shadow-lg hover:bg-cyan-400"
    >
      <span>🤖</span>
      <span className="font-semibold">Ask PhishLens</span>
    </button>
    <div
      className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-gray-950 border-l border-cyan-700 shadow-2xl transform transition-transform ${
        assistantOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="text-cyan-400 font-semibold">PhishLens Assistant</div>
        <button
          type="button"
          onClick={() => setAssistantOpen(false)}
          className="px-2 py-1 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          X
        </button>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setChatInput("What is urgency manipulation?")}
            className="text-xs px-2 py-1 rounded-md border border-cyan-700 text-cyan-300 hover:bg-cyan-700 hover:text-black"
          >
            Urgency manipulation
          </button>
          <button
            type="button"
            onClick={() => setChatInput("How do I stay safe?")}
            className="text-xs px-2 py-1 rounded-md border border-cyan-700 text-cyan-300 hover:bg-cyan-700 hover:text-black"
          >
            Stay safe
          </button>
          <button
            type="button"
            onClick={() => setChatInput("What is zero-link phishing?")}
            className="text-xs px-2 py-1 rounded-md border border-cyan-700 text-cyan-300 hover:bg-cyan-700 hover:text-black"
          >
            Zero-link phishing
          </button>
          <button
            type="button"
            onClick={() => setChatInput("What does CRITICAL mean?")}
            className="text-xs px-2 py-1 rounded-md border border-cyan-700 text-cyan-300 hover:bg-cyan-700 hover:text-black"
          >
            CRITICAL meaning
          </button>
        </div>
        <div className="h-80 overflow-y-auto bg-gray-900 border border-gray-800 rounded-md p-3 space-y-2">
          {chatMessages.map((m, i) => (
            <div
              key={i}
              className={`text-sm p-2 rounded-md ${
                m.role === "user"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-cyan-900/40 text-cyan-200 border border-cyan-700"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Ask about phishing threats..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSend();
            }}
          />
          <button
            type="button"
            onClick={onSend}
            className="px-4 py-2 rounded-md bg-cyan-500 text-black hover:bg-cyan-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
