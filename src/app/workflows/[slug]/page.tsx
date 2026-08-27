import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWorkflows, getWorkflowBySlug, getToolById } from '../../../lib/data';
import { LeaderboardAd, InContentAd } from '@/components/creativai/ad-slot';
import { Workflow, ShieldCheck, ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Clock, DollarSign, Layers } from 'lucide-react';

interface WorkflowPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const workflows = getWorkflows();
  return workflows.map((w) => ({
    slug: w.slug,
  }));
}

export function generateMetadata({ params }: WorkflowPageProps): Metadata {
  const workflow = getWorkflowBySlug(params.slug);
  if (!workflow) return { title: 'Workflow Not Found' };

  return {
    title: `${workflow.name} — Production AI Blueprint | CreativAI`,
    description: `${workflow.goal}. Step-by-step tool slots, calculated true costs, and commercial export safety.`,
    alternates: {
      canonical: `/workflows/${workflow.slug}`,
    },
    openGraph: {
      title: `${workflow.name} — Video Production Workflow`,
      description: workflow.goal,
      url: `https://creativai.vercel.app/workflows/${workflow.slug}`,
      images: ['/og-image.png'],
    },
  };
}

export default function WorkflowDetailPage({ params }: WorkflowPageProps) {
  const workflow = getWorkflowBySlug(params.slug);
  if (!workflow) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-black/5 dark:border-white/5 bg-paper-warm/40 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-6">
          <div>
            <Link
              href="/workflows"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-ink dark:text-white/50 dark:hover:text-white transition group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to All Workflows</span>
            </Link>
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                Level: {workflow.experience_level}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Audited Pipeline</span>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-white">
              {workflow.name}
            </h1>

            <p className="text-base sm:text-lg text-ink/70 dark:text-white/70 leading-relaxed font-normal">
              {workflow.goal}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-ink/60 dark:text-white/60">
              <div>Budget: <strong className="text-ink dark:text-white">{workflow.budget_range}</strong></div>
              <div>Estimated Cost: <strong className="text-emerald-600 dark:text-emerald-400">{workflow.estimated_cost}</strong></div>
              <div>Audience: <strong className="text-ink dark:text-white">{workflow.audience}</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Steps Sequence */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-12 space-y-12">
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Pipeline Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Step-by-Step Blueprint
            </h2>
          </div>

          <div className="grid gap-6">
            {workflow.steps.map((step) => {
              const primaryTool = getToolById(step.tool_slots.recommended[0]);
              const altTools = step.tool_slots.alternative
                .map(getToolById)
                .filter((t): t is NonNullable<typeof t> => Boolean(t));

              return (
                <div
                  key={step.order}
                  className="p-8 rounded-2xl glass-card space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-8 h-8 rounded-lg bg-violet-600 text-white font-display text-sm font-bold shadow-sm">
                        {step.order}
                      </span>
                      <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                        {step.name}
                      </h3>
                    </div>
                    {primaryTool && (
                      <Link
                        href={'/tools/' + primaryTool.slug}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                      >
                        Primary: <strong>{primaryTool.name}</strong>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>

                  <p className="text-sm text-ink/75 dark:text-white/75 leading-relaxed">
                    {step.job_to_be_done}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                        Inputs Required
                      </div>
                      <ul className="space-y-1 text-xs text-ink/70 dark:text-white/70">
                        {step.inputs.map((inp, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                            <span>{inp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-white/50">
                        Outputs Generated
                      </div>
                      <ul className="space-y-1 text-xs text-ink/70 dark:text-white/70">
                        {step.outputs.map((out, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {altTools.length > 0 && (
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center gap-2 text-xs">
                      <span className="text-ink/50 dark:text-white/50">Approved Alternatives:</span>
                      {altTools.map((at) => (
                        <Link
                          key={at.id}
                          href={'/tools/' + at.slug}
                          className="px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-ink/80 dark:text-white/80 hover:underline"
                        >
                          {at.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Ad Placement */}
        <div className="flex justify-center py-4">
          <InContentAd sponsor="Recommended Production Workstation Partner" />
        </div>
      </div>
    </div>
  );
}
