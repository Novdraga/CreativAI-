'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, MessageSquareText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-black/5 dark:border-white/5 bg-paper-warm/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo-only.png"
                alt="CreativAI"
                className="w-10 h-10 object-contain shrink-0 drop-shadow-[0_2px_10px_rgba(124,58,237,0.28)] rounded-xl group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-display text-[22px] font-bold tracking-tight text-ink dark:text-white">CreativAI</span>
                <p className="text-[11px] font-medium text-ink/55 dark:text-white/55 -mt-0.5">
                  AI Decision Engine for Creators
                </p>
              </div>
            </Link>
            <p className="text-[13px] text-ink/65 dark:text-white/65 leading-relaxed">
              We optimize for creator decisions, not page views. Finding the right AI stack for your budget, workflow, and production goals.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Verification Guaranteed</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink/80 dark:text-white/80 mb-3.5">Key Decisions</h4>
            <ul className="space-y-2.5 text-[13px] text-ink/65 dark:text-white/65 font-medium">
              <li><Link href="/best-ai-voice-for-faceless-youtube" className="hover:text-ink dark:hover:text-white transition">Best Voice for YouTube</Link></li>
              <li><Link href="/best-ai-stack-under-50" className="hover:text-ink dark:hover:text-white transition">Best Stack Under $50/mo</Link></li>
              <li><Link href="/best-ai-tools-for-beginners" className="hover:text-ink dark:hover:text-white transition">Best AI for Beginners</Link></li>
              <li><Link href="/best-elevenlabs-alternatives" className="hover:text-ink dark:hover:text-white transition">ElevenLabs Alternatives</Link></li>
              <li><Link href="/best-ai-video-workflow-for-shorts" className="hover:text-ink dark:hover:text-white transition">Best Shorts Workflow</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink/80 dark:text-white/80 mb-3.5">Decision Engine</h4>
            <ul className="space-y-2.5 text-[13px] text-ink/65 dark:text-white/65 font-medium">
              <li><Link href="/tools" className="hover:text-ink dark:hover:text-white transition">All 24 Verified Tools</Link></li>
              <li><Link href="/workflows" className="hover:text-ink dark:hover:text-white transition">Production Workflows</Link></li>
              <li><Link href="/compare" className="hover:text-ink dark:hover:text-white transition">Head-to-Head Compare</Link></li>
              <li><Link href="/alternatives" className="hover:text-ink dark:hover:text-white transition">Alternative Hubs</Link></li>
              <li><Link href="/stack" className="hover:text-ink dark:hover:text-white transition">Stack Builder</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink/80 dark:text-white/80 mb-3.5">Standards & Tests</h4>
            <ul className="space-y-2.5 text-[13px] text-ink/65 dark:text-white/65 font-medium">
              <li><Link href="/benchmarks" className="hover:text-ink dark:hover:text-white transition">Benchmark Laboratory</Link></li>
              <li><Link href="/about" className="hover:text-ink dark:hover:text-white transition">P.A.C.E Methodology</Link></li>
              <li><Link href="/about#verification" className="hover:text-ink dark:hover:text-white transition">Verification Policy</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-ink dark:hover:text-white transition">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink/80 dark:text-white/80 mb-3.5">Community & Help</h4>
            <p className="text-xs text-ink/65 dark:text-white/65 leading-relaxed mb-3">
              Have questions about tool limits, pricing changes, or recommendations?
            </p>
            <a
              href="#feedback"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 text-xs font-semibold text-ink dark:text-white hover:bg-white dark:hover:bg-white/10 transition shadow-sm"
            >
              <MessageSquareText className="w-3.5 h-3.5 text-violet-500" />
              <span>Share Feedback</span>
            </a>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink/50 dark:text-white/50 gap-4">
          <p>© 2026 CreativAI. Built strictly for content creators. No sponsored score inflation. PACE Benchmark Standard.</p>
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Dataset last verified: August 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
