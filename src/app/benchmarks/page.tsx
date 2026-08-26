import React from 'react';
import Link from 'next/link';
import { getAllBenchmarks, getToolById } from '../../lib/data';
import { PageHero } from '@/components/creativai/page-hero';
import { Card3D } from '@/components/creativai/card-3d';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd, InContentAd } from '@/components/creativai/ad-slot';
import { Terminal, ShieldCheck, CheckCircle2, Clock, ArrowUpRight, Award, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Hands-on Benchmarks & Test Evidence — CreativAI',
  description: 'Reproducible benchmark prompts, test conditions, execution times, and qualitative output evaluations for creator AI tools.',
};

export default function BenchmarksPage() {
  const benchmarks = getAllBenchmarks();

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={70} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Empirical Testing Laboratory"
          eyebrowColor="bg-emerald-500"
          title="Hands-on creator"
          highlight="benchmarks."
          highlightClass="text-gradient-amber"
          description="We never trust vendor marketing claims or cherry-picked demos. Every tool is audited with uniform creator prompts under free tier and trial conditions to measure real output quality, generation speed, watermark traps, and commercial roadblocks."
          iconName="terminal"
          stats={[
            { value: '5', label: 'Empirical Test Logs', color: '#f59e0b' },
            { value: '100%', label: 'Reproducible Prompts', color: '#7c3aed' },
            { value: '0', label: 'Sponsored Bias', color: '#0d9488' },
          ]}
          cta={{ label: 'Find My Stack', href: '/stack', primary: true }}
          showCornerAd
          sponsor="Verified Benchmark Computing Partner"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                {benchmarks.length} Empirical Creator Test Logs
                <span className="ml-3 text-[12px] text-ink/50 dark:text-white/50 font-sans font-normal">
                  Reproducible test prompt runs & observations
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
              {benchmarks.map((test, idx) => {
                const tool = getToolById(test.tool_id);

                return (
                  <Card3D key={test.id} delay={idx * 0.04} className="w-full">
                    <div className="p-8 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                              {test.test_name}
                            </span>
                            <span className="text-[11px] font-mono text-ink/50 dark:text-white/50">
                              Tested: {test.tested_at}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                            {tool ? tool.name : test.tool_id}
                          </h3>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{test.result}</span>
                          </div>
                          {tool && (
                            <Link
                              href={'/tools/' + tool.slug}
                              className="btn-shine inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-paper hover:bg-ink-soft transition dark:bg-paper dark:text-ink shadow-xs"
                            >
                              <span>View Profile</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Prompt Section */}
                      {test.test_prompt && (
                        <div className="space-y-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                            Standardized Test Prompt:
                          </div>
                          <pre className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-xs text-ink/80 dark:text-white/80 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                            {test.test_prompt}
                          </pre>
                        </div>
                      )}

                      {/* Conditions & Observations */}
                      <div className="grid sm:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                          <div className="font-bold text-ink dark:text-white">Test Conditions & Tier:</div>
                          <p className="text-ink/70 dark:text-white/70 leading-relaxed">{test.test_conditions}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                          <div className="font-bold text-ink dark:text-white">Empirical Observations:</div>
                          <p className="text-ink/70 dark:text-white/70 leading-relaxed">{test.observations}</p>
                        </div>
                      </div>

                      {/* Footer Details */}
                      <div className="pt-2 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-ink/50 dark:text-white/50">
                        <div>Auditor: <strong className="text-ink dark:text-white">{test.tested_by}</strong></div>
                        {test.generation_time_sec && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Execution Latency: <strong>{test.generation_time_sec}s</strong></span>
                          </div>
                        )}
                        <div>Test Log ID: <code className="font-mono">{test.id}</code></div>
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>

            {/* Ad Placement */}
            <div className="flex justify-center py-6">
              <LeaderboardAd sponsor="Featured Creator Benchmark Hardware" />
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
