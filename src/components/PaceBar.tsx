import React from 'react';
import { PaceScores } from '../types';

interface PaceBarProps {
  scores: PaceScores;
  compact?: boolean;
}

export function PaceBar({ scores, compact = false }: PaceBarProps) {
  const criteria = [
    { key: 'P' as const, label: 'Price per Result', short: 'Price', score: scores.P, reason: scores.reasons.P, color: 'bg-emerald-500' },
    { key: 'A' as const, label: 'Accuracy / Quality', short: 'Quality', score: scores.A, reason: scores.reasons.A, color: 'bg-indigo-500' },
    { key: 'C' as const, label: 'Control & Flexibility', short: 'Control', score: scores.C, reason: scores.reasons.C, color: 'bg-blue-500' },
    { key: 'E' as const, label: 'Ease of Use', short: 'Ease', score: scores.E, reason: scores.reasons.E, color: 'bg-violet-500' },
  ];

  const overallAvg = (
    (scores.P + scores.A + scores.C + scores.E) / 4
  ).toFixed(1);

  if (compact) {
    return (
      <div className="space-y-1.5 w-full">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-semibold text-slate-700 dark:text-slate-300">P.A.C.E Rating</span>
          <span className="font-mono font-bold text-slate-900 dark:text-white">{overallAvg}/10</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {criteria.map((c) => (
            <div key={c.key} className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded p-1.5 text-center">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">{c.key}</div>
              <div className="font-mono text-xs font-bold text-slate-900 dark:text-white">{c.score.toFixed(1)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4 transition-colors">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-base">P.A.C.E Evaluation Model</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Four-pillar evidence-backed benchmark scoring (0–10)</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">{overallAvg}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-medium">Platform Avg</div>
        </div>
      </div>

      <div className="space-y-4">
        {criteria.map((c) => (
          <div key={c.key} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                <span className="font-bold font-mono text-slate-900 dark:text-white mr-1">{c.key}</span> — {c.label}
              </span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{c.score.toFixed(1)} / 10</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className={`h-2 rounded-full ${c.color}`}
                style={{ width: `${Math.min(100, Math.max(0, c.score * 10))}%` }}
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 pl-1">{c.reason}</p>
          </div>
        ))}
      </div>
      <div className="pt-2 text-[11px] text-slate-400 dark:text-slate-500 text-right border-t border-slate-100 dark:border-slate-800">
        Verified on <span className="font-mono text-slate-600 dark:text-slate-400">{scores.last_verified}</span>
      </div>
    </div>
  );
}
