import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Mic,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Music
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best ElevenLabs Alternatives for AI Voice & Audio (2026)',
  description: 'Looking for alternatives to ElevenLabs? Compare Murf.ai (video sync), Play.ht (multi-voice podcasting), and Suno AI (music generation).',
  alternates: {
    canonical: '/best-elevenlabs-alternatives',
  },
  openGraph: {
    title: 'Top ElevenLabs Alternatives for Creators (2026 Comparison)',
    description: 'Find the right voice or music engine when ElevenLabs is not the best fit for your workflow.',
    url: 'https://creativai.vercel.app/best-elevenlabs-alternatives',
    images: ['/og-image.png'],
  },
};

export default function ElevenLabsAlternativesGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Decisions' }, { label: 'Best ElevenLabs Alternatives' }]} />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/60">
          <Mic className="w-3.5 h-3.5" />
          <span>Alternative Decision Guide</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          The Best ElevenLabs Alternatives (When & Why to Switch)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          While ElevenLabs is the industry benchmark for human realism, specific creator workflows benefit from specialized alternatives with built-in video timelines or soundtrack generation.
        </p>
      </div>

      {/* 3 Situations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Situation 1</span>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Murf.ai (Video Timeline Sync)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Choose Murf if you need to align voiceover blocks directly to video cuts without jumping back and forth to Premiere or CapCut.
          </p>
          <Link href="/tools/murf" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
            <span>Explore Murf.ai</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Situation 2</span>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Play.ht (Multi-Voice Studio)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Choose Play.ht if you produce multi-speaker podcasts or audiobooks and need to assign different character voices to conversational dialogue.
          </p>
          <Link href="/tools/play-ht" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
            <span>Explore Play.ht</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Situation 3</span>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Suno AI (Music & Soundtracks)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Choose Suno if you already have voiceover covered and need full-length background songs and stems to soundtrack your video.
          </p>
          <Link href="/tools/suno" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
            <span>Explore Suno AI</span> <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/alternatives/elevenlabs-alternatives"
          className="inline-flex items-center gap-2 font-bold text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/60 px-4 py-2.5 rounded-lg hover:bg-indigo-100 transition"
        >
          <span>View Detailed ElevenLabs Alternatives Matrix & P.A.C.E Scores →</span>
        </Link>
      </div>
    </div>
  );
}
