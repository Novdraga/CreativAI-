import React from 'react';
import Link from 'next/link';
import { Tool } from '../types';
import { Badge } from './Badge';
import { PaceBar } from './PaceBar';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">{tool.category.replace('-', ' ')}</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              <Link href={`/tools/${tool.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                {tool.name}
              </Link>
            </h3>
          </div>
          <Badge type="verified" text="Verified" />
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>

        <div className="pt-1">
          <PaceBar scores={tool.pace_scores} compact />
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Starting Price:</span>
            <span className="font-mono font-semibold text-slate-900 dark:text-white">
              {tool.starting_price.amount === 0 ? 'Free tier available' : `$${tool.starting_price.amount}/${tool.starting_price.period}`}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Commercial Use:</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-medium">
              {tool.commercial_use.allowed ? '✓ Allowed' : 'Restricted'}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
        >
          <span>Evaluation & Breakdown</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 p-1"
          title="Official Website"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
