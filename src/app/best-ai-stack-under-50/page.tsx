import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Badge } from '../../components/Badge';
import {
  Calculator,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  DollarSign
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best AI Stack Under $50/Month for YouTube Creators (2026)',
  description: 'How to build a complete commercial AI video production pipeline for under $50/month. Tool-by-tool cost breakdown and per-video economics.',
  alternates: {
    canonical: '/best-ai-stack-under-50',
  },
  openGraph: {
    title: 'The Best AI Stack Under $50/Month (Production Blueprint)',
    description: 'Get commercial monetization, human voiceover, cinematic B-roll, and high-CTR thumbnails for $17–$27/month total.',
    url: 'https://creativai.vercel.app/best-ai-stack-under-50',
    images: ['/og-image.png'],
  },
};

export default function BestAiStackUnder50Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Stack Under $50/Month for YouTube Creators (2026)',
    description: 'Complete commercial video production pipeline under $50/month with itemized pricing.',
    author: { '@type': 'Organization', name: 'CreativAI Evaluation Team' },
    publisher: { '@type': 'Organization', name: 'CreativAI', url: 'https://creativai.vercel.app' }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Decisions' }, { label: 'Best AI Stack Under $50' }]} />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60">
          <DollarSign className="w-3.5 h-3.5" />
          <span>True Cost Blueprint · Budget Optimization</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          The Best AI Video Production Stack Under $50/Month
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          You do not need to spend $200+/month on enterprise subscriptions to run a profitable YouTube channel. Here is the exact stack that delivers broadcast-level results for just $17–$27/month.
        </p>
      </div>

      {/* GEO Decision Summary */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200 font-bold text-base">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>The $17/Month Commercial Starter Stack</span>
          </div>
          <span className="font-mono font-extrabold text-emerald-600 dark:text-emerald-400 text-lg sm:text-xl">
            $17.00 / mo
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          This 4-tool pipeline covers the complete workflow from idea to upload-ready video with 100% commercial license compliance and zero attribution traps.
        </p>
      </div>

      {/* Itemized Stack Breakdown */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Itemized Monthly Cost Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 1 · Scripting</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">$0.00 / mo</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">ChatGPT (Free Plan)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Generates hooks, outlines, and full voiceover scripts using GPT-4o. Free tier grants full commercial ownership of generated text.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 2 · Narration</span>
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">$5.00 / mo</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">ElevenLabs (Starter Tier)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              30,000 characters/mo (~30 minutes of speech). Unlocks full commercial YouTube monetization rights and voice cloning.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 3 · Cinematic B-Roll</span>
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">$12.00 / mo</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Runway Gen-3 (Standard Tier)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              625 monthly credits generating ~12 dynamic atmospheric scene cutaways with watermark removal and commercial clearance.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 4 · Thumbnails & Text</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">$0.00 / mo</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Canva AI (Free Tier)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Assembles high-CTR 1280x720 thumbnails with bold stroke text, drop shadows, and background elements at zero cost.
            </p>
          </div>
        </div>
      </section>

      {/* Production Economics Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          True Cost per Video Output
        </h2>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800 pb-4 sm:pb-0 sm:pr-6 space-y-1">
              <span className="text-xs font-semibold text-slate-400">Starter Pace (4 videos / month)</span>
              <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">$4.25 <span className="text-xs font-normal text-slate-400">/ video</span></div>
              <p className="text-xs text-slate-500">Total monthly investment: $17.00. Ideal for weekly documentary uploads.</p>
            </div>
            <div className="space-y-1 sm:pl-6">
              <span className="text-xs font-semibold text-slate-400">Volume Pace (20 videos / month)</span>
              <div className="text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">$1.35 <span className="text-xs font-normal text-slate-400">/ video</span></div>
              <p className="text-xs text-slate-500">With ElevenLabs Creator ($22) + Runway Pro ($28). Total: $27–$50/mo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xl font-bold">Calculate Your Channel's Production Budget</h3>
        <p className="text-xs text-slate-300 max-w-xl">
          Use the CreativAI Decision Engine to customize this stack based on your publishing frequency, video length, and experience level.
        </p>
        <Link
          href="/stack?goal=faceless-youtube&budget=25"
          className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch $25/mo Stack Builder</span>
        </Link>
      </div>
    </div>
  );
}
