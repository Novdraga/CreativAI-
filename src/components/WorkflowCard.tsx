import React from 'react';
import Link from 'next/link';
import { Workflow } from '../types';
import { ArrowRight, DollarSign, Users } from 'lucide-react';
import { Badge } from './Badge';

interface WorkflowCardProps {
  workflow: Workflow;
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <Badge type="highlight" text="Recommended Stack" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
            <Link href={`/workflows/${workflow.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              {workflow.name}
            </Link>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{workflow.goal}</p>
        </div>
        <div className="text-left sm:text-right bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 rounded-lg px-3.5 py-2 shrink-0">
          <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Estimated Stack</div>
          <div className="text-base font-bold font-mono text-indigo-900 dark:text-white">{workflow.estimated_cost}</div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg p-4 space-y-2.5">
        <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Workflow Chain ({workflow.steps.length} Steps)</div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
          {workflow.steps.map((step) => (
            <div key={step.order} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2.5 text-xs shadow-xs">
              <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">Step {step.order}</div>
              <div className="font-semibold text-slate-800 dark:text-slate-200 truncate mt-0.5">{step.name}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate capitalize">
                {step.tool_slots.recommended.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span>Audience: <strong>{workflow.audience}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 text-slate-400" />
          <span>True Cost: <strong>{workflow.estimated_cost_per_result.starter_profile_cost}</strong> / video</span>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <Link
          href={`/workflows/${workflow.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
        >
          <span>View Full Step Breakdown & Setup</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
