"use client";

import { useState, Fragment, useMemo } from 'react';
import Link from 'next/link';
import { Wrench, ArrowUpRight, ShieldCheck, Filter, Search } from 'lucide-react';
import { PageHero } from '@/components/creativai/page-hero';
import { Card3D } from '@/components/creativai/card-3d';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd } from '@/components/creativai/ad-slot';
import { Tool } from '@/types';

const CATEGORY_TABS = [
  { label: 'All Tools (24)', value: 'all' },
  { label: 'Video Editing & AI', value: 'video' },
  { label: 'Voice & Audio', value: 'voice' },
  { label: 'Script & Writing', value: 'script' },
  { label: 'Thumbnails & Design', value: 'thumbnails' },
  { label: 'Live Streaming', value: 'live-streaming' },
];

const CATEGORY_COLORS: Record<string, string> = {
  video: '#7c3aed',
  voice: '#0d9488',
  script: '#4f46e5',
  thumbnails: '#f59e0b',
  'live-streaming': '#c026d3',
  research: '#3b82f6',
};

export function ToolsCatalogClient({ initialTools }: { initialTools: Tool[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return initialTools.filter((t) => {
      const matchesCat = filter === 'all' || t.category === filter;
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        (t.features && t.features.some((f) => f.toLowerCase().includes(search.toLowerCase())));
      return matchesCat && matchesSearch;
    });
  }, [initialTools, filter, search]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={70} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Verified Tool Directory"
          eyebrowColor="bg-amber-500"
          title="The verified creator"
          highlight="tool catalog."
          highlightClass="text-gradient-amber"
          description="24 industry-standard tools benchmarked against real creator production. Every profile features verified pricing, P.A.C.E scores, and commercial licensing terms."
          iconName="wrench"
          stats={[
            { value: '24', label: 'Audited tools', color: '#f59e0b' },
            { value: '100%', label: 'Verified terms', color: '#7c3aed' },
            { value: '0', label: 'Sponsored bias', color: '#0d9488' },
          ]}
          cta={{ label: 'Find My Stack', href: '/stack', primary: true }}
          showCornerAd
          sponsor="Verified Creator Sponsor"
        />

        {/* Filter bar */}
        <section className="relative py-6 border-y border-black/5 dark:border-white/5 bg-paper-warm/40 dark:bg-white/[0.02]">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex flex-wrap items-center gap-4 justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-ink/40 dark:text-white/40" />
              {CATEGORY_TABS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  className={[
                    'px-3.5 py-1.5 rounded-full text-[12.5px] font-medium transition',
                    filter === c.value
                      ? 'bg-ink text-paper shadow-md dark:bg-paper dark:text-ink'
                      : 'bg-white/60 text-ink/70 hover:bg-white dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10',
                  ].join(' ')}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 dark:text-white/40" />
              <input
                type="text"
                placeholder="Search tools, features..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl border border-black/10 bg-white/70 text-[13px] w-64 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition dark:bg-white/5 dark:border-white/10 dark:text-white"
              />
            </div>
          </div>
        </section>

        {/* Tool grid */}
        <section className="relative py-10 sm:py-14 flex-1">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl text-ink dark:text-white">
                {filtered.length} {filtered.length === 1 ? 'Tool' : 'Tools'} Available
                <span className="ml-3 text-[12px] text-ink/50 dark:text-white/50 font-sans font-normal">
                  All 24 Tools Verified · 0 Affiliate Bias
                </span>
              </h2>
              <Link
                href="/compare"
                className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                Compare tools side-by-side →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((tool, i) => {
                const color = CATEGORY_COLORS[tool.category] || '#7c3aed';
                const paceAverage = (
                  (tool.pace_scores.P + tool.pace_scores.A + tool.pace_scores.C + tool.pace_scores.E) / 4
                ).toFixed(1);

                return (
                  <Fragment key={tool.id}>
                    <Card3D accentHex={color} delay={i * 0.03} className="h-full flex flex-col justify-between">
                      <div className="p-6">
                        {/* Top row */}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span
                              className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5"
                              style={{ color }}
                            >
                              {tool.category.replace('-', ' ')}
                            </span>
                            <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                              <Link href={'/tools/' + tool.slug} className="hover:underline">
                                {tool.name}
                              </Link>
                            </h3>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Verified</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-[13px] leading-relaxed text-ink/70 dark:text-white/70 line-clamp-2">
                          {tool.description}
                        </p>

                        {/* Feature Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {tool.features.slice(0, 3).map((f) => (
                            <span
                              key={f}
                              className="inline-flex items-center text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-black/5 text-ink/70 dark:bg-white/5 dark:text-white/70"
                            >
                              {f}
                            </span>
                          ))}
                        </div>

                        {/* Metrics Bar */}
                        <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="font-display text-base font-bold text-ink dark:text-white">
                              {tool.starting_price.amount === 0 ? 'Free' : '$' + tool.starting_price.amount}
                            </div>
                            <div className="text-[10px] text-ink/50 dark:text-white/50 mt-0.5">Price</div>
                          </div>
                          <div>
                            <div className="font-display text-base font-bold" style={{ color }}>
                              {paceAverage}
                            </div>
                            <div className="text-[10px] text-ink/50 dark:text-white/50 mt-0.5">PACE Score</div>
                          </div>
                          <div>
                            <div className="font-display text-base font-bold text-emerald-600 dark:text-emerald-400">
                              {tool.commercial_use.allowed ? 'Full' : 'Limited'}
                            </div>
                            <div className="text-[10px] text-ink/50 dark:text-white/50 mt-0.5">Commercial</div>
                          </div>
                        </div>

                        {/* Action Link */}
                        <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                          <Link
                            href={'/tools/' + tool.slug}
                            className="inline-flex items-center gap-1 text-xs font-bold text-ink dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition"
                          >
                            View Audit & Breakdown
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                          {tool.website && (
                            <a
                              href={tool.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-ink/50 dark:text-white/50 hover:underline"
                            >
                              Official Site
                            </a>
                          )}
                        </div>
                      </div>
                    </Card3D>

                    {/* Native responsive ad slot after 6th and 12th card */}
                    {(i === 5 || i === 11) && (
                      <div className="sm:col-span-2 lg:col-span-3 flex justify-center py-4">
                        <LeaderboardAd sponsor="Featured Creator Infrastructure" />
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-ink/50 dark:text-white/50">
                No tools found matching &quot;{search}&quot;.
              </div>
            )}
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
