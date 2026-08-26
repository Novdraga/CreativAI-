import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Badge } from '../../components/Badge';
import {
  Video,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best AI Video Workflow for YouTube Shorts & TikTok (2026)',
  description: 'How to produce 30–60 viral YouTube Shorts and TikToks per month using automated AI clipping, dynamic captions, and AI audio hooks.',
  alternates: {
    canonical: '/best-ai-video-workflow-for-shorts',
  },
  openGraph: {
    title: 'High-Velocity AI Video Workflow for Shorts & TikTok',
    description: 'Step-by-step pipeline blueprint for vertical video creation with high viewer retention.',
    url: 'https://creativai.vercel.app/best-ai-video-workflow-for-shorts',
    images: ['/og-image.png'],
  },
};

export default function BestShortsWorkflowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Decisions' }, { label: 'Best AI Video Workflow for Shorts' }]} />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/60">
          <Zap className="w-3.5 h-3.5" />
          <span>High-Velocity Pipeline Blueprint</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          The Best AI Video Workflow for YouTube Shorts & TikTok
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Shorts algorithms prioritize swipe-away rate and completion percentage. This production pipeline is optimized for fast hooks, animated kinetic captions, and rapid multi-platform exports.
        </p>
      </div>

      {/* Step by Step Pipeline */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The 4-Step Velocity Pipeline
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 1 · 3-Second Hook</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">ChatGPT (GPT-4o)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Generate 5 contrasting viral hook angles for a 45-second script.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 2 · High-Energy Narration</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">ElevenLabs ($5/mo)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Fast, enthusiastic voice profile with high vocal presence.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 3 · Stock B-Roll Assembly</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Pictory ($19/mo)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Auto-matches 9:16 vertical clips and generates word-by-word animated captions.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 4 · Audio Hook & Trending Beat</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Suno AI ($8/mo)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Custom background instrumental beat that boosts completion metrics.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xl font-bold">View Full Shorts & TikTok Blueprint</h3>
        <p className="text-xs text-slate-300 max-w-xl">
          See full input/output specifications, exact prompt templates, and true per-short cost calculations.
        </p>
        <Link
          href="/workflows/youtube-shorts"
          className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Open YouTube Shorts Blueprint</span>
        </Link>
      </div>
    </div>
  );
}
