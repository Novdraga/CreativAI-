import React from 'react';
import { EvidenceRecord } from '../types';
import { ShieldCheck, ExternalLink, Calendar, UserCheck } from 'lucide-react';

interface EvidenceBlockProps {
  evidence: EvidenceRecord[];
  sourceUrl?: string;
}

export function EvidenceBlock({ evidence, sourceUrl }: EvidenceBlockProps) {
  if (!evidence || evidence.length === 0) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-xs text-slate-500 dark:text-slate-400">
        Preliminary evaluation — formal hands-on evidence record scheduled.
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Evidence & Verification Record</h3>
        </div>
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
          >
            <span>Official Source</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      <div className="space-y-4">
        {evidence.map((record) => (
          <div key={record.id} className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg p-4 space-y-2.5 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-200/60 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {record.tested_at}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                  {record.tested_by}
                </span>
              </div>
              <span className="font-mono text-[11px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded">
                Method: {record.test_method}
              </span>
            </div>

            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Verification Conditions:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">{record.test_conditions}</p>
            </div>

            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Key Observations:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">{record.observations}</p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 rounded p-2.5 text-emerald-900 dark:text-emerald-200 font-medium">
              Result: {record.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
