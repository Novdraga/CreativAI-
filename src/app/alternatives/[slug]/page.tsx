import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllAlternatives, getAlternativeBySlug, getToolById } from '../../../lib/data';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { LeaderboardAd, InContentAd } from '@/components/creativai/ad-slot';
import { RefreshCw, ShieldCheck, ArrowRight, ArrowUpRight, Check, X, AlertTriangle } from 'lucide-react';

interface AlternativePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const alternatives = getAllAlternatives();
  return alternatives.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: AlternativePageProps): Metadata {
  const alternative = getAlternativeBySlug(params.slug);
  if (!alternative) return { title: 'Alternative Not Found' };

  return {
    title: `${alternative.title} — CreativAI`,
    description: alternative.description,
    alternates: {
      canonical: `/alternatives/${alternative.slug}`,
    },
    openGraph: {
      title: alternative.title,
      description: alternative.description,
      url: `https://creativai.vercel.app/alternatives/${alternative.slug}`,
      images: ['/og-image.png'],
    },
  };
}

export default function AlternativeDetailPage({ params }: AlternativePageProps) {
  const alternative = getAlternativeBySlug(params.slug);
  if (!alternative) return notFound();

  const incumbent = getToolById(alternative.incumbent_tool_id);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <section className="relative pt-8 pb-12 border-b border-black/5 dark:border-white/5 bg-paper-warm/40 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Alternatives', href: '/alternatives' },
              { label: alternative.title },
            ]}
          />

          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                Migration Guide
              </span>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Audited Trade-offs</span>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-white">
              {alternative.title}
            </h1>

            <p className="text-base sm:text-lg text-ink/70 dark:text-white/70 leading-relaxed font-normal">
              {alternative.description}
            </p>
          </div>

          {/* Leaving Reasons Callout */}
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <h3 className="font-display text-base font-bold text-ink dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Primary Reasons Creators Leave {incumbent ? incumbent.name : 'Incumbent'}
            </h3>
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              {alternative.leaving_reasons.map((reason, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-xs text-ink/70 dark:text-white/70"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Candidate Grid */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-12 space-y-12">
        {/* Situation Mappings */}
        {alternative.situation_mapping && alternative.situation_mapping.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Decision Rules
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
                When to Switch: Situation Mapping
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {alternative.situation_mapping.map((map, i) => (
                <div key={i} className="p-6 rounded-2xl glass-card space-y-3">
                  <div className="text-xs font-bold text-ink dark:text-white">
                    Reason: {map.leaving_reason}
                  </div>
                  <p className="text-xs text-ink/70 dark:text-white/70 leading-relaxed">
                    {map.justification}
                  </p>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-xs text-amber-800 dark:text-amber-300">
                    Trade-off: {map.tradeoff_statement}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Candidate Tools */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Vetted Candidates
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Candidate Tool Breakdown
            </h2>
          </div>

          <div className="grid gap-6">
            {alternative.candidates.map((cand) => {
              const tool = getToolById(cand.tool_id);

              return (
                <div
                  key={cand.tool_id}
                  className="p-8 rounded-2xl glass-card space-y-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                        {tool ? tool.name : cand.tool_id}
                      </h3>
                      {tool && (
                        <span className="text-xs text-ink/50 dark:text-white/50">
                          Starting Price: {tool.starting_price.amount === 0 ? 'Free' : `$${tool.starting_price.amount}`} · Commercial: {tool.commercial_use.allowed ? 'Allowed' : 'Restricted'}
                        </span>
                      )}
                    </div>
                    {tool && (
                      <Link
                        href={'/tools/' + tool.slug}
                        className="btn-shine inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-paper hover:bg-ink-soft transition dark:bg-paper dark:text-ink shadow-xs shrink-0"
                      >
                        <span>Full Audit & Pricing</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                      Why Choose This Candidate:
                    </div>
                    <ul className="space-y-1.5 text-xs text-ink/75 dark:text-white/75">
                      {cand.best_for_reasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-ink/80 dark:text-white/80 space-y-1.5">
                    <strong className="text-amber-700 dark:text-amber-300">Explicit Trade-Offs:</strong>
                    <ul className="space-y-1">
                      {cand.tradeoffs.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Ad Placement */}
        <div className="flex justify-center py-4">
          <InContentAd sponsor="Recommended Creator Cloud Storage" />
        </div>
      </div>
    </div>
  );
}
