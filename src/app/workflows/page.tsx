import React from 'react';
import Link from 'next/link';
import { getWorkflows, getToolById } from '../../lib/data';
import { PageHero } from '@/components/creativai/page-hero';
import { Card3D } from '@/components/creativai/card-3d';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd, InContentAd } from '@/components/creativai/ad-slot';
import { Workflow, Clock, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Layers, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Creator AI Workflows — CreativAI',
  description: 'End-to-end multi-tool workflow pipelines for YouTubers, Faceless channels, and podcasters. Complete toolchains from script to published video.',
};

export default function WorkflowsPage() {
  const workflows = getWorkflows();

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={70} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Integrated Toolchains"
          eyebrowColor="bg-violet-500"
          title="Production-ready creator"
          highlight="workflows."
          highlightClass="text-gradient-aurora"
          description="Stop using single tools in silos. These 5 audited multi-step pipelines connect scripting, voiceover, b-roll generation, timeline assembly, and thumbnail creation into seamless creator workflows."
          iconName="workflow"
          stats={[
            { value: '5', label: 'Audited pipelines', color: '#7c3aed' },
            { value: '10-15h', label: 'Time saved / week', color: '#f59e0b' },
            { value: '$0-$50', label: 'Monthly cost range', color: '#0d9488' },
          ]}
          cta={{ label: 'Build Custom Stack', href: '/stack', primary: true }}
          showCornerAd
          sponsor="Featured Workflow Automation"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                5 Complete Creator Pipelines
                <span className="ml-3 text-[12px] text-ink/50 dark:text-white/50 font-sans font-normal">
                  Step-by-step tool slots & verified costs
                </span>
              </h2>
              <Link
                href="/stack"
                className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                Find your personalized stack →
              </Link>
            </div>

            <div className="grid gap-8">
              {workflows.map((wf, idx) => (
                <Card3D key={wf.id} delay={idx * 0.05} className="w-full">
                  <div className="p-8 sm:p-10 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                            {wf.experience_level}
                          </span>
                          <span className="text-[11px] font-semibold text-ink/50 dark:text-white/50">
                            Budget: {wf.budget_range}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                          <Link href={'/workflows/' + wf.slug} className="hover:underline">
                            {wf.name}
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm text-ink/70 dark:text-white/70 max-w-3xl leading-relaxed">
                          {wf.goal}
                        </p>
                      </div>

                      <Link
                        href={'/workflows/' + wf.slug}
                        className="btn-shine shrink-0 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-xs font-semibold text-paper hover:bg-ink-soft transition shadow-md dark:bg-paper dark:text-ink"
                      >
                        <span>View Blueprint</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Step Visualizer */}
                    <div className="pt-6 border-t border-black/5 dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50 mb-3">
                        Pipeline Steps & Tool Slots:
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {wf.steps.map((step) => {
                          const primaryTool = getToolById(step.tool_slots.recommended[0]);
                          return (
                            <div
                              key={step.order}
                              className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-1.5"
                            >
                              <div className="text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                                Step {step.order}
                              </div>
                              <div className="text-xs font-bold text-ink dark:text-white">
                                {step.name}
                              </div>
                              <div className="text-[11px] text-ink/60 dark:text-white/60 font-medium">
                                Tool: {primaryTool ? primaryTool.name : step.tool_slots.recommended[0]}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                      <div className="flex items-center gap-4 text-ink/60 dark:text-white/60">
                        <span>Target Audience: <strong className="text-ink dark:text-white">{wf.audience}</strong></span>
                        <span>Estimated Cost: <strong className="text-emerald-600 dark:text-emerald-400">{wf.estimated_cost}</strong></span>
                      </div>
                      <Link
                        href={'/workflows/' + wf.slug}
                        className="font-semibold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
                      >
                        Explore step inputs & outputs →
                      </Link>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>

            {/* Ad Placement */}
            <div className="flex justify-center py-6">
              <LeaderboardAd sponsor="Featured Creator Workstations & Storage" />
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
