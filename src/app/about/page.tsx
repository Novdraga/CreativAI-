import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '@/components/creativai/page-hero';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd } from '@/components/creativai/ad-slot';
import { ShieldCheck, CheckCircle2, Award, Scale, Check, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Methodology & Trust Standards — CreativAI',
  description: 'Our evaluation principles, P.A.C.E scorecard model, and official verification policy.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={60} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Trust Standards & Constitution"
          eyebrowColor="bg-amber-500"
          title="The P.A.C.E evaluation"
          highlight="methodology."
          highlightClass="text-gradient-amber"
          description="Why CreativAI exists: we optimize for creator decisions, not affiliate page views. Learn how our 4-pillar scorecard, verification audits, and zero-bias testing engine work."
          iconName="award"
          stats={[
            { value: '4', label: 'Scorecard Pillars', color: '#f59e0b' },
            { value: '100%', label: 'Hands-on Audits', color: '#7c3aed' },
            { value: '0', label: 'Sponsored Inflation', color: '#0d9488' },
          ]}
          cta={{ label: 'Explore Tools', href: '/tools', primary: true }}
          showCornerAd
          sponsor="Verified Editorial Partner"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8 space-y-12">
            {/* Core Principle */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                1. Core Product Philosophy
              </div>
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                &quot;We optimize for creator decisions, not page views.&quot;
              </h2>
              <p className="text-sm text-ink/75 dark:text-white/75 leading-relaxed">
                Traditional AI directory websites dump thousands of affiliate cards onto creators, optimizing for clicks and referral commissions. CreativAI follows a strict deterministic decision chain:
              </p>
              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 font-mono text-xs text-ink/80 dark:text-white/80">
                Goal → Constraints → Workflow → Recommendation → Comparison → Evidence → Decision → Action
              </div>
            </div>

            {/* PACE Model */}
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  2. The P.A.C.E Evaluation Model
                </div>
                <h2 className="font-display text-2xl font-bold text-ink dark:text-white mt-1">
                  Four Pillars of Creator Software Integrity
                </h2>
                <p className="text-sm text-ink/70 dark:text-white/70 mt-1">
                  Every tool is audited across four transparent pillars on a strict 0–10 scale. Aggregate scores are never published without full component rationale.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    letter: 'P',
                    title: 'Production-Ready (Workflow Integration)',
                    color: '#f59e0b',
                    desc: 'Evaluates export formats (ProRes, WAV, SRT), timeline round-tripping, API access, batch operations, and compatibility with NLEs like Premiere and DaVinci Resolve.',
                  },
                  {
                    letter: 'A',
                    title: 'Authentic Terms (Commercial Safety)',
                    color: '#7c3aed',
                    desc: 'Evaluates copyright indemnity, commercial rights clarity, attribution demands, training data transparency, and model training opt-outs.',
                  },
                  {
                    letter: 'C',
                    title: 'Cost-per-Video (True Production Cost)',
                    color: '#0d9488',
                    desc: 'Calculates the real expense to produce finished videos rather than advertised monthly plan prices. Flags credit expiration traps and overage spikes.',
                  },
                  {
                    letter: 'E',
                    title: 'Editorial Quality (Output Fidelity)',
                    color: '#c026d3',
                    desc: 'Measures qualitative excellence: speech cadence naturalness, hallucination frequency, artifact absence, and creative control precision.',
                  },
                ].map((pillar) => (
                  <div key={pillar.letter} className="p-6 rounded-2xl glass-card space-y-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid place-items-center w-8 h-8 rounded-lg text-white font-display text-sm font-bold shadow-sm"
                        style={{ background: pillar.color }}
                      >
                        {pillar.letter}
                      </span>
                      <h3 className="font-display text-base font-bold text-ink dark:text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-ink/70 dark:text-white/70 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Policy */}
            <div id="verification" className="p-8 sm:p-10 rounded-3xl glass-card space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                3. Verification Policy
              </div>
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                Official Verification Criteria
              </h2>
              <p className="text-sm text-ink/75 dark:text-white/75 leading-relaxed">
                A tool receives the green &quot;Verified&quot; checkmark ONLY if it meets all five baseline criteria:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink/75 dark:text-white/75">
                {[
                  'Hands-on testing conducted and verified by the CreativAI research team',
                  'Pricing audited directly against current vendor billing pages within the last 90 days',
                  'Commercial terms inspected for license ownership, attribution, and monetization rules',
                  'At least one verifiable benchmark run executed and logged in our Benchmark Laboratory',
                  'Zero sponsorship arrangements influencing PACE pillar scores or catalog rankings',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ad Placement */}
            <div className="flex justify-center py-4">
              <LeaderboardAd sponsor="Featured Creator Infrastructure" />
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
