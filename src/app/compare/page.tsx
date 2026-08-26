import React from 'react';
import Link from 'next/link';
import { getComparisons, getToolById } from '../../lib/data';
import { PageHero } from '@/components/creativai/page-hero';
import { Card3D } from '@/components/creativai/card-3d';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd } from '@/components/creativai/ad-slot';
import { GitCompare, ArrowRight, ArrowUpRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Side-by-Side AI Tool Comparisons — CreativAI',
  description: 'Head-to-head AI tool comparisons evaluated on output quality, pricing, true cost, and commercial licenses. 0 sponsored winner inflation.',
};

export default function ComparePage() {
  const comparisons = getComparisons();

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={70} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Head-to-Head Showdowns"
          eyebrowColor="bg-amber-500"
          title="Objective creator tool"
          highlight="comparisons."
          highlightClass="text-gradient-amber"
          description="Direct head-to-head showdowns evaluated on real output quality, verified pricing, true cost per finished asset, and commercial rights safety. No sponsored winner inflation."
          iconName="compare"
          stats={[
            { value: '7', label: 'Tool Showdowns', color: '#f59e0b' },
            { value: '100%', label: 'Audited Metrics', color: '#7c3aed' },
            { value: '0', label: 'Sponsored Bias', color: '#0d9488' },
          ]}
          cta={{ label: 'Find My Stack', href: '/stack', primary: true }}
          showCornerAd
          sponsor="Verified Hardware & GPU Sponsor"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                {comparisons.length} Head-to-Head Decisions
                <span className="ml-3 text-[12px] text-ink/50 dark:text-white/50 font-sans font-normal">
                  Real creator trade-offs & evidence-backed verdicts
                </span>
              </h2>
              <Link
                href="/tools"
                className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                Browse all 24 tools →
              </Link>
            </div>

            <div className="grid gap-6">
              {comparisons.map((comp, idx) => {
                const toolA = getToolById(comp.tool_a_id);
                const toolB = getToolById(comp.tool_b_id);

                return (
                  <Card3D key={comp.id} delay={idx * 0.04} className="w-full">
                    <div className="p-8 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                              Direct Showdown
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                            <Link href={'/compare/' + comp.slug} className="hover:underline">
                              {comp.title}
                            </Link>
                          </h3>
                          <p className="mt-2 text-sm text-ink/70 dark:text-white/70 max-w-3xl leading-relaxed">
                            {comp.verdict.summary}
                          </p>
                        </div>

                        <Link
                          href={'/compare/' + comp.slug}
                          className="btn-shine shrink-0 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-xs font-semibold text-paper hover:bg-ink-soft transition shadow-md dark:bg-paper dark:text-ink"
                        >
                          <span>View Verdict</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Tool Choice Situations */}
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1.5">
                          <div className="text-xs font-bold text-ink dark:text-white flex items-center justify-between">
                            <span>Choose {toolA ? toolA.name : 'Tool A'} if:</span>
                            <span className="text-[10.5px] font-mono text-violet-600 dark:text-violet-400">
                              PACE {comp.pace_comparison.tool_a.P}
                            </span>
                          </div>
                          <p className="text-xs text-ink/70 dark:text-white/70 leading-relaxed">
                            {comp.who_should_choose_a}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1.5">
                          <div className="text-xs font-bold text-ink dark:text-white flex items-center justify-between">
                            <span>Choose {toolB ? toolB.name : 'Tool B'} if:</span>
                            <span className="text-[10.5px] font-mono text-amber-600 dark:text-amber-400">
                              PACE {comp.pace_comparison.tool_b.P}
                            </span>
                          </div>
                          <p className="text-xs text-ink/70 dark:text-white/70 leading-relaxed">
                            {comp.who_should_choose_b}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Link */}
                      <div className="pt-2 flex items-center justify-between text-xs">
                        <span className="text-ink/50 dark:text-white/50">
                          {comp.dimensions.length} evaluated dimensions with test evidence
                        </span>
                        <Link
                          href={'/compare/' + comp.slug}
                          className="font-semibold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
                        >
                          Full side-by-side analysis →
                        </Link>
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>

            {/* Ad Placement */}
            <div className="flex justify-center py-6">
              <LeaderboardAd sponsor="Featured Creator Studio Hardware" />
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
