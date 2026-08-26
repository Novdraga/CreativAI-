import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Badge } from '../../components/Badge';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  PlayCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best AI Tools for Beginner Content Creators (2026)',
  description: 'The easiest, most beginner-friendly AI tools for new content creators. Minimal learning curves, generous free tiers, and fast results.',
  alternates: {
    canonical: '/best-ai-tools-for-beginners',
  },
  openGraph: {
    title: 'Top AI Tools for Beginner Creators (Zero Learning Curve)',
    description: 'Start creating content without prompt engineering complexity or expensive subscriptions.',
    url: 'https://creativai.vercel.app/best-ai-tools-for-beginners',
    images: ['/og-image.png'],
  },
};

export default function BestAiToolsForBeginnersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Tools for Beginner Content Creators (2026)',
    description: 'Beginner-friendly AI tools evaluated on ease of use, pricing, and fast learning curves.',
    author: { '@type': 'Organization', name: 'CreativAI Evaluation Team' },
    publisher: { '@type': 'Organization', name: 'CreativAI', url: 'https://creativai.vercel.app' }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Decisions' }, { label: 'Best AI Tools for Beginners' }]} />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/60">
          <Zap className="w-3.5 h-3.5" />
          <span>Beginner Guide · Fast Onboarding</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          The 4 Best AI Tools for Beginner Content Creators
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Most AI software requires complex prompt engineering or confusing multi-slider interfaces. These 4 tools let you create your first video, voiceover, and thumbnail in under 10 minutes.
        </p>
      </div>

      {/* The 4 Beginner Tools */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Badge type="difficulty" text="beginner" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Canva AI (Visual Design & Thumbnails)</h3>
            </div>
            <Link href="/tools/canva-ai" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
              View Review →
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Canva is the easiest graphic design tool on the web. Its AI features (Magic Studio, Magic Media, 1-click background remover) let you generate YouTube thumbnails with bold stroke text and templates with zero Photoshop experience.
          </p>
          <div className="text-xs text-slate-400 font-mono">Price: Free Plan ($0) · Pro: $10/mo</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Badge type="difficulty" text="beginner" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. ChatGPT (Scripting & Hook Brainstorming)</h3>
            </div>
            <Link href="/tools/chatgpt" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
              View Review →
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            ChatGPT requires zero setup. Simply type your video idea and ask for a 5-minute video outline with 3 high-retention hook options. The free tier uses GPT-4o and provides full commercial rights.
          </p>
          <div className="text-xs text-slate-400 font-mono">Price: Free Plan ($0) · Plus: $20/mo</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Badge type="difficulty" text="beginner" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. ElevenLabs (Voiceover Generation)</h3>
            </div>
            <Link href="/tools/elevenlabs" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
              View Review →
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Paste your script, pick a voice persona from the library, and click Generate. ElevenLabs handles breathing, cadence, and tone automatically without requiring audio engineering skills.
          </p>
          <div className="text-xs text-slate-400 font-mono">Price: Free (Testing) · Starter: $5/mo (Commercial)</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Badge type="difficulty" text="beginner" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. Suno AI (Soundtrack & Music Generation)</h3>
            </div>
            <Link href="/tools/suno" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
              View Review →
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Type "lo-fi acoustic background music for storytelling", and Suno generates a complete 2-minute original song in 20 seconds. Eliminates copyright claim strikes on YouTube.
          </p>
          <div className="text-xs text-slate-400 font-mono">Price: Free (50 credits/day) · Pro: $8/mo</div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xl font-bold">Ready to Launch Your Channel?</h3>
        <p className="text-xs text-slate-300 max-w-xl">
          Use the Stack Builder with the "Beginner" experience filter to automatically receive step-by-step tools with zero learning curves.
        </p>
        <Link
          href="/stack?experience=beginner"
          className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch Beginner Stack Builder</span>
        </Link>
      </div>
    </div>
  );
}
