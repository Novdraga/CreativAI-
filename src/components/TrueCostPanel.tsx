import React from 'react';
import { Calculator, Info } from 'lucide-react';

interface TrueCostPanelProps {
  unit: string;
  starterCost: string;
  volumeCost: string;
  assumptions: string;
}

export function TrueCostPanel({ unit, starterCost, volumeCost, assumptions }: TrueCostPanelProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">True Cost Analysis (Cost per Result)</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center">
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Starter Profile (~10 units/mo)</div>
          <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white mt-1">{starterCost}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{unit}</div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center">
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Volume Profile (~100 units/mo)</div>
          <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white mt-1">{volumeCost}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{unit}</div>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 rounded-lg p-3.5">
        <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-800 dark:text-slate-200">Calculation Assumptions:</span>
          <p className="mt-0.5 text-slate-600 dark:text-slate-400 leading-relaxed">{assumptions}</p>
        </div>
      </div>
    </div>
  );
}
