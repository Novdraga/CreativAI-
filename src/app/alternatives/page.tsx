import React from 'react';
import Link from 'next/link';
import { getAllAlternatives, getToolById } from '../../lib/data';
import { PageHero } from '@/components/creativai/page-hero';
import { Card3D } from '@/components/creativai/card-3d';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd } from '@/components/creativai/ad-slot';
import { RefreshCw, ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Tool Alternatives & Migration Guides — CreativAI',
  description: 'Situation-mapped tool alternatives for creators looking to switch AI tools based on cost, quality, or commercial needs.',
};

export default function AlternativesIndexPage() {
  const alternatives = getAllAlternatives();

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={70} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Migration & Alternative Hub"
          eyebrowColor="bg-violet-500"
          title="Find the right tool"
          highlight="alternative."
          highlightClass="text-gradient-violet"
          description="Switching software without trade-off data is risky. Our 5 migration hubs start with why creators leave and map each pain point directly to an audited candidate."
          iconName="alternatives"
          stats={[
            { value: '5', label: 'Migration Hubs', color: '#7c3aed' },
            { value: '100%', label: 'Audited Trade-offs', color: '#f59e0b' },
            { value: '0', label: 'Sponsored Bias', color: '#0d9488' },
          ]}
          cta={{ label: 'Find My Stack', href: '/stack', primary: true }}
          showCornerAd
          sponsor="Featured Migration Assistant"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                5 Situation-Fit Alternative Hubs
                <span className="ml-3 text-[12px] text-ink/50 dark:text-white/50 font-sans font-normal">
                  Mapped to genuine creator switching reasons
                </span>
              </h2>
              <Link
                href="/tools"
                className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                View all 24 tools →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {alternatives.map((alt, idx) => {
                const incumbent = getToolById(alt.incumbent_tool_id);

                return (
                  <Card3D key={alt.id} delay={idx * 0.04} className="h-full flex flex-col justify-between">
                    <div className="p-8 space-y-5">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                          Switching from {incumbent ? incumbent.name : alt.incumbent_tool_id}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-ink dark:text-white mt-2.5">
                          <Link href={'/alternatives/' + alt.slug} className="hover:underline">
                            {alt.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs text-ink/70 dark:text-white/70 leading-relaxed">
                        {alt.description}
                      </p>

                      {/* Leaving Reasons */}
                      <div className="space-y-2 pt-3 border-t border-black/5 dark:border-white/10">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                          Common Reasons for Leaving:
                        </div>
                        <ul className="space-y-1 text-xs text-ink/75 dark:text-white/75">
                          {alt.leaving_reasons.slice(0, 3).map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                        <span className="text-xs text-ink/50 dark:text-white/50 font-medium">
                          {alt.candidates.length} vetted candidates
                        </span>
                        <Link
                          href={'/alternatives/' + alt.slug}
                          className="btn-shine inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-paper hover:bg-ink-soft transition dark:bg-paper dark:text-ink shadow-sm"
                        >
                          <span>Explore Alternatives</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>

            {/* Ad Placement */}
            <div className="flex justify-center py-6">
              <LeaderboardAd sponsor="Featured Cloud Backup & Collaboration" />
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
