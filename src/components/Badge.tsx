import React from 'react';
import { CheckCircle2, AlertCircle, ShieldCheck, Zap } from 'lucide-react';

interface BadgeProps {
  type: 'verified' | 'unverified' | 'commercial' | 'category' | 'difficulty' | 'highlight';
  text: string;
  className?: string;
}

export function Badge({ type, text, className = '' }: BadgeProps) {
  switch (type) {
    case 'verified':
      return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 ${className}`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          {text}
        </span>
      );
    case 'unverified':
      return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 ${className}`}>
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          {text}
        </span>
      );
    case 'commercial':
      return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 ${className}`}>
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          {text}
        </span>
      );
    case 'highlight':
      return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 ${className}`}>
          <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          {text}
        </span>
      );
    case 'difficulty':
      return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 capitalize ${className}`}>
          {text}
        </span>
      );
    default:
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 ${className}`}>
          {text}
        </span>
      );
  }
}
