import React from 'react';
import { Check, AlertTriangle, Award } from 'lucide-react';

interface VerdictBlockProps {
  winnerName: string;
  summary: string;
  reasoning: string[];
  conditions?: string;
}

export function VerdictBlock({ winnerName, summary, reasoning, conditions }: VerdictBlockProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/40 dark:from-indigo-950/60 dark:via-slate-900 dark:to-indigo-950/30 border-2 border-indigo-200 dark:border-indigo-900/80 rounded-xl p-6 sm:p-7 shadow-sm space-y-5">
      <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
        <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-wider">Our Decision Verdict</span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Primary Recommendation: <span className="text-indigo-600 dark:text-indigo-400">{winnerName}</span>
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">{summary}</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/60 rounded-lg p-5 space-y-2.5">
        <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Recommended Because:</h4>
        <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
          {reasoning.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {conditions && (
        <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-lg p-3.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <span><strong>Situational Rule:</strong> {conditions}</span>
        </div>
      )}
    </div>
  );
}
