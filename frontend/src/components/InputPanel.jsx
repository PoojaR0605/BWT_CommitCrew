import React from "react";

export default function InputPanel({ value, onChange, onAnalyze }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <label className="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        className="w-full h-40 p-3 border rounded focus:outline-none focus:ring focus:border-indigo-500"
        placeholder="Paste a message or email content"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={onAnalyze}
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
