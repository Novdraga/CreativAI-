import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getComparisons, getComparisonBySlug, getToolById } from '../../../lib/data';
import { VerdictBlock } from '../../../components/VerdictBlock';
import { PaceBar } from '../../../components/PaceBar';
import { LeaderboardAd, InContentAd } from '@/components/creativai/ad-slot';
import { Award, ShieldCheck, ArrowRight, ArrowLeft, ArrowUpRight, Check, X } from 'lucide-react';

interface ComparePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const comparisons = getComparisons();
  return comparisons.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }: ComparePageProps): Metadata {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) return { title: 'Comparison Not Found' };

  return {
    title: `${comparison.title} — Direct Comparison & P.A.C.E Verdict | CreativAI`,
    description: `${comparison.verdict.summary} Full empirical test breakdown, true pricing comparison, and commercial safety clearance.`,
    alternates: {
      canonical: `/compare/${comparison.slug}`,
    },
    openGraph: {
      title: `${comparison.title} — Head-to-Head Comparison`,
      description: comparison.verdict.summary,
      url: `https://creativai.vercel.app/compare/${comparison.slug}`,
      images: ['/og-image.png'],
    },
  };
}

export default function CompareDetailPage({ params }: ComparePageProps) {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) return notFound();

  const toolA = getToolById(comparison.tool_a_id);
  const toolB = getToolById(comparison.tool_b_id);
  if (!toolA || !toolB) return notFound();

  const winnerTool = comparison.verdict.recommendation === 'tool_a' ? toolA : toolB;

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-black/5 dark:border-white/5 bg-paper-warm/40 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-6">
          <div>
            <Link
              href="/compare"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-ink dark:text-white/50 dark:hover:text-white transition group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to All Comparisons</span>
            </Link>
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                Head-to-Head Decision Matrix
              </span>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Sponsored Bias</span>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-white">
              {comparison.title}
            </h1>

            <p className="text-base sm:text-lg text-ink/70 dark:text-white/70 leading-relaxed font-normal">
              {comparison.verdict.summary}
            </p>
          </div>

          {/* Two Competitor Summary Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl glass-card space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-ink dark:text-white">{toolA.name}</h3>
                <Link
                  href={'/tools/' + toolA.slug}
                  className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
                >
                  View Full Audit <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-xs text-ink/70 dark:text-white/70 line-clamp-2">{toolA.description}</p>
              <div className="text-xs space-y-1 text-ink/60 dark:text-white/60 pt-2 border-t border-black/5 dark:border-white/10">
                <div>Starting Price: <strong className="text-ink dark:text-white">{toolA.starting_price.amount === 0 ? 'Free' : `$${toolA.starting_price.amount}`}</strong></div>
                <div>Commercial Rights: <strong className="text-emerald-600 dark:text-emerald-400">{toolA.commercial_use.allowed ? 'Allowed' : 'Restricted'}</strong></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-card space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-ink dark:text-white">{toolB.name}</h3>
                <Link
                  href={'/tools/' + toolB.slug}
                  className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
                >
                  View Full Audit <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-xs text-ink/70 dark:text-white/70 line-clamp-2">{toolB.description}</p>
              <div className="text-xs space-y-1 text-ink/60 dark:text-white/60 pt-2 border-t border-black/5 dark:border-white/10">
                <div>Starting Price: <strong className="text-ink dark:text-white">{toolB.starting_price.amount === 0 ? 'Free' : `$${toolB.starting_price.amount}`}</strong></div>
                <div>Commercial Rights: <strong className="text-emerald-600 dark:text-emerald-400">{toolB.commercial_use.allowed ? 'Allowed' : 'Restricted'}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-12 space-y-12">
        {/* Dimensions Comparison Table */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Dimension Evaluation
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Side-by-Side Breakdown
            </h2>
          </div>

          <div className="grid gap-4">
            {comparison.dimensions.map((dim, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card space-y-3"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-bold text-ink dark:text-white">
                    {dim.dimension}
                  </h3>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full ${
                      dim.winner === 'tool_a'
                        ? 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20'
                        : dim.winner === 'tool_b'
                        ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                        : 'bg-black/5 dark:bg-white/5 text-ink/60 dark:text-white/60'
                    }`}
                  >
                    {dim.winner === 'tool_a'
                      ? `Winner: ${toolA.name}`
                      : dim.winner === 'tool_b'
                      ? `Winner: ${toolB.name}`
                      : 'Tie / Neutral'}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                    <div className="font-bold text-ink dark:text-white">{toolA.name}:</div>
                    <p className="text-ink/70 dark:text-white/70 leading-relaxed">{dim.value_a}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
                    <div className="font-bold text-ink dark:text-white">{toolB.name}:</div>
                    <p className="text-ink/70 dark:text-white/70 leading-relaxed">{dim.value_b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Placement */}
        <div className="flex justify-center py-2">
          <InContentAd sponsor="Recommended Audio & Video Monitoring Gear" />
        </div>

        {/* P.A.C.E Comparison */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Pillar Scores
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              P.A.C.E Metric Comparison
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">{toolA.name} Scorecard</h3>
              <PaceBar scores={toolA.pace_scores} />
            </div>

            <div className="p-6 rounded-2xl glass-card space-y-4">
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">{toolB.name} Scorecard</h3>
              <PaceBar scores={toolB.pace_scores} />
            </div>
          </div>
        </section>

        {/* Verdict Block */}
        <VerdictBlock
          winnerName={winnerTool.name}
          summary={comparison.verdict.summary}
          reasoning={comparison.verdict.reasoning}
          conditions={comparison.verdict.conditions}
        />
      </div>
    </div>
  );
}
