import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllTools,
  getToolBySlug,
  getComparisonsForTool,
  getWorkflowsForTool,
  getAlternativesForTool
} from '../../../lib/data';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { EvidenceBlock } from '../../../components/EvidenceBlock';
import { AffiliateButton } from '../../../components/AffiliateButton';
import { Card3D } from '../../../components/creativai/card-3d';
import { LeaderboardAd } from '../../../components/creativai/ad-slot';
import {
  ExternalLink,
  Check,
  X,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  DollarSign,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface ToolPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((t) => ({
    slug: t.slug,
  }));
}

export function generateMetadata({ params }: ToolPageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return { title: 'Tool Not Found' };

  return {
    title: `${tool.name} Review, Pricing & P.A.C.E Score — CreativAI`,
    description: `${tool.description} Verified commercial license terms, true monthly production costs, and benchmark test results.`,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} — Creator AI Review & True Cost`,
      description: tool.description,
      url: `https://creativai.vercel.app/tools/${tool.slug}`,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} — Review & True Cost`,
      description: tool.description,
      images: ['/og-image.png'],
    },
  };
}

export default function ToolDetailPage({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  const comparisons = getComparisonsForTool(tool.id);
  const workflows = getWorkflowsForTool(tool.id);
  const alternatives = getAlternativesForTool(tool);

  const paceAverage = (
    (tool.pace_scores.P + tool.pace_scores.A + tool.pace_scores.C + tool.pace_scores.E) / 4
  ).toFixed(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tool.name,
    description: tool.description,
    category: tool.category,
    offers: {
      '@type': 'Offer',
      price: tool.starting_price.amount.toString(),
      priceCurrency: tool.starting_price.currency,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: paceAverage,
      bestRating: '10',
      worstRating: '1',
      ratingCount: '1',
      reviewCount: '1',
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 border-b border-black/5 dark:border-white/5 bg-paper-warm/40 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Tools Catalog', href: '/tools' },
              { label: tool.name },
            ]}
          />

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                  {tool.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Independently Verified</span>
                </div>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-white">
                {tool.name}
              </h1>

              <p className="text-base sm:text-lg text-ink/70 dark:text-white/70 leading-relaxed max-w-2xl font-normal">
                {tool.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <AffiliateButton
                  tool={tool}
                  className="btn-shine inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-md hover:bg-ink-soft transition dark:bg-paper dark:text-ink"
                />
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-sm font-semibold text-ink dark:text-white hover:bg-white dark:hover:bg-white/10 transition shadow-sm"
                >
                  <span>Compare with Alternatives</span>
                  <ArrowRight className="w-4 h-4 text-ink/40 dark:text-white/40" />
                </Link>
              </div>
            </div>

            {/* Overall Score Pill */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[320px] p-6 rounded-2xl glass-card text-center space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-ink/50 dark:text-white/50">
                  Overall PACE Score
                </span>
                <div className="font-display text-5xl font-extrabold text-gradient-amber">
                  {paceAverage}
                  <span className="text-xl text-ink/40 dark:text-white/40 font-normal">/10</span>
                </div>
                <p className="text-xs text-ink/60 dark:text-white/60">
                  Calculated from 4 weighted creator criteria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-12 space-y-16">
        {/* 1. P.A.C.E Breakdown Grid */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Evaluation Framework
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              P.A.C.E Scorecard Breakdown
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                letter: 'P',
                title: 'Production-Ready',
                score: tool.pace_scores.P,
                color: '#f59e0b',
                reason: tool.pace_scores.reasons.P,
              },
              {
                letter: 'A',
                title: 'Authentic Terms',
                score: tool.pace_scores.A,
                color: '#7c3aed',
                reason: tool.pace_scores.reasons.A,
              },
              {
                letter: 'C',
                title: 'Cost-per-Video',
                score: tool.pace_scores.C,
                color: '#0d9488',
                reason: tool.pace_scores.reasons.C,
              },
              {
                letter: 'E',
                title: 'Editorial Quality',
                score: tool.pace_scores.E,
                color: '#c026d3',
                reason: tool.pace_scores.reasons.E,
              },
            ].map((p) => (
              <div
                key={p.letter}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="grid place-items-center w-8 h-8 rounded-lg text-white font-display text-sm font-bold shadow-sm"
                      style={{ background: p.color }}
                    >
                      {p.letter}
                    </span>
                    <span className="font-display text-2xl font-bold" style={{ color: p.color }}>
                      {p.score}
                      <span className="text-xs text-ink/40 dark:text-white/40 font-normal">/10</span>
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink dark:text-white mt-3">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink/70 dark:text-white/70 leading-relaxed">
                    {p.reason}
                  </p>
                </div>

                <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(p.score / 10) * 100}%`, background: p.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Horizontal Leaderboard Ad (728x90) - Non-intrusive safe placement */}
        <div className="flex justify-center my-6 w-full">
          <LeaderboardAd sponsor="Featured Creator Hardware & Cloud Engine" />
        </div>

        {/* 2. Verified Pricing Plans */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Audited Costs
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Official Pricing & Plan Limits
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tool.pricing.map((plan, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-ink/70 dark:text-white/70">
                      {plan.period}
                    </span>
                  </div>
                  <div className="font-display text-3xl font-extrabold text-ink dark:text-white">
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                    {plan.price > 0 && (
                      <span className="text-sm font-normal text-ink/50 dark:text-white/50">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-ink/70 dark:text-white/70 leading-relaxed pt-2 border-t border-black/5 dark:border-white/10">
                    {plan.limits}
                  </p>
                </div>
                <AffiliateButton
                  tool={tool}
                  label={`Select ${plan.name}`}
                  className="w-full text-center py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-xs font-semibold text-ink dark:text-white transition shadow-xs"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Ad slot in-content */}
        <div className="flex justify-center py-2">
          <LeaderboardAd sponsor="Recommended Creator Hardware & Cloud" />
        </div>

        {/* 3. Commercial Rights & Licensing Bento */}
        <section className="p-8 rounded-3xl glass-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Licensing Audit
              </span>
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white mt-1">
                Commercial Use Clearance
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{tool.commercial_use.allowed ? 'Commercial Use Permitted' : 'Commercial Use Restricted'}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1.5">
              <div className="font-semibold text-ink dark:text-white">Attribution Requirements</div>
              <div className="text-xs text-ink/70 dark:text-white/70">{tool.commercial_use.attribution}</div>
            </div>
            <div className="space-y-1.5">
              <div className="font-semibold text-ink dark:text-white">Asset Ownership Notes</div>
              <div className="text-xs text-ink/70 dark:text-white/70">{tool.commercial_use.ownership_notes}</div>
            </div>
            <div className="space-y-1.5">
              <div className="font-semibold text-ink dark:text-white">Plan Restrictions</div>
              <div className="text-xs text-ink/70 dark:text-white/70">
                {tool.commercial_use.plan_restrictions.join(', ')}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Strengths & Weaknesses Bento */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl glass-card space-y-4">
            <h3 className="font-display text-xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Key Strengths
            </h3>
            <ul className="space-y-3 text-sm text-ink/75 dark:text-white/75">
              {tool.strengths.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl glass-card space-y-4">
            <h3 className="font-display text-xl font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <X className="w-5 h-5" />
              Known Limitations
            </h3>
            <ul className="space-y-3 text-sm text-ink/75 dark:text-white/75">
              {tool.weaknesses.map((w, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Empirical Verification Evidence Block */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Audit Logs
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Hands-On Test Evidence
            </h2>
          </div>

          <EvidenceBlock evidence={tool.evidence} />
        </section>

        {/* 6. Direct Comparisons & Workflows */}
        {comparisons.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Decision Matrix
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
                Head-to-Head Comparisons
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {comparisons.map((c) => (
                <Link
                  key={c.id}
                  href={`/compare/${c.slug}`}
                  className="p-6 rounded-2xl glass-card hover:scale-[1.01] transition-transform flex items-center justify-between group"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition">
                      {c.title}
                    </h3>
                    <p className="text-xs text-ink/60 dark:text-white/60 mt-1 line-clamp-1">
                      {c.verdict.summary}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-ink/40 dark:text-white/40 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
