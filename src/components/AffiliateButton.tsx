'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { trackAffiliateClick } from '../lib/metrics';
import { trackFunnelStep } from '../lib/analytics';

import { Tool } from '../types';

interface AffiliateButtonProps {
  tool?: Tool;
  toolId?: string;
  toolName?: string;
  website?: string;
  affiliate?: {
    url: string;
    network: string | null;
    disclaimer: string;
  } | null;
  label?: string;
  referrer?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  showDisclaimer?: boolean;
}

export function AffiliateButton({
  tool,
  toolId,
  toolName,
  website,
  affiliate,
  label,
  referrer = 'tool_page',
  className = '',
  size = 'md',
  variant = 'primary',
  showDisclaimer = false,
}: AffiliateButtonProps) {
  const resolvedId = tool ? tool.id : (toolId || '');
  const resolvedName = tool ? tool.name : (toolName || '');
  const resolvedWebsite = tool ? tool.website : (website || '');
  const resolvedAffiliate = tool ? tool.affiliate : affiliate;
  const targetUrl = resolvedAffiliate?.url || resolvedWebsite;
  const buttonText = label || `Visit ${resolvedName}`;

  const handleClick = () => {
    trackAffiliateClick({
      toolId: resolvedId,
      affiliateUrl: targetUrl,
      referrer,
    });
    trackFunnelStep('affiliate_click', {
      toolId: resolvedId,
      affiliateUrl: targetUrl,
      referrer,
    });
  };

  const sizeClasses = size === 'sm' ? 'text-xs px-3 py-1.5 rounded-lg gap-1.5' : (size === 'lg' ? 'text-base px-7 py-3.5 rounded-xl gap-2.5 font-bold' : 'text-sm px-5 py-2.5 rounded-xl gap-2 font-semibold');
  const variantClasses = variant === 'secondary' ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition' : (variant === 'outline' ? 'border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 transition' : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white shadow-sm transition');

  return (
    <div className="flex flex-col items-start sm:items-end gap-1">
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={'inline-flex items-center justify-center ' + sizeClasses + ' ' + variantClasses + ' ' + className}
      >
        <span>{buttonText}</span>
        <ExternalLink className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </a>
      {showDisclaimer && affiliate && (
        <span className="text-[10px] text-slate-400 dark:text-slate-500 max-w-[200px] text-right leading-tight">
          Partner link
        </span>
      )}
    </div>
  );
}