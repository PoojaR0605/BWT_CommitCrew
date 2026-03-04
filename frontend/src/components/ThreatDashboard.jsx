import React from "react";

export default function ThreatDashboard({ report }) {
  if (!report) {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-sm text-gray-500">No analysis yet.</div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex items-baseline justify-between">
        <div className="text-xl font-semibold">Threat Report</div>
        <div className="text-2xl font-bold">{Math.round(report.score)}</div>
      </div>
      <div className="text-sm">Level: {report.level}</div>
      <div className="space-y-2">
        {report.indicators?.map((i) => (
          <div key={i.name} className="flex justify-between text-sm">
            <span className="text-gray-600">{i.name}</span>
            <span className="font-medium">{String(i.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
