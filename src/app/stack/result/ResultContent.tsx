'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Check,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Calculator,
  ListChecks,
  Sparkles,
  Layers,
} from 'lucide-react';
import { computeStack, money, sanitizeInput } from '../../../lib/stackRules';
import { trackDecisionSession } from '../../../lib/metrics';
import { trackFunnelStep } from '../../../lib/analytics';
import { Card3D } from '@/components/creativai/card-3d';
import { LeaderboardAd, InContentAd } from '@/components/creativai/ad-slot';

export function ResultContent() {
  const searchParams = useSearchParams();
  const input = sanitizeInput({
    goal: searchParams.get('goal') ?? undefined,
    budget: searchParams.get('budget') ?? undefined,
    experience: searchParams.get('experience') ?? undefined,
    requirement: searchParams.get('requirement') ?? undefined,
  });
  const rec = computeStack(input);

  useEffect(() => {
    trackDecisionSession(input.goal, rec.steps.map((s) => s.toolId));
    trackFunnelStep('result_view', {
      goal: input.goal,
      budget: input.budget,
      tools: rec.steps.map((s) => s.toolId),
    });
  }, [input.goal]);

  const adjustParams = new URLSearchParams({
    goal: input.goal,
    budget: input.budget,
    experience: input.experience,
    requirement: input.requirement,
  }).toString();

  return (
    <div className="space-y-12">
      {/* Goal Summary Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-ink text-paper p-8 sm:p-10 lg:p-12 shadow-xl">
        <div className="absolute inset-0 aurora-bg-dark opacity-90 pointer-events-none" aria-hidden />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-paper border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Personalized Recommendation · Gate 5 Verification</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {rec.goalLabel}
            </h1>
            <p className="text-sm sm:text-base text-paper/70 max-w-2xl leading-relaxed">
              {rec.tagline}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-paper border border-white/15 capitalize">
                Level: {input.experience.replace('-', ' ')}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-paper border border-white/15 capitalize">
                Focus: {input.requirement}
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shrink-0 text-center lg:text-right space-y-1">
            <div className="text-xs font-medium text-paper/70">Estimated Monthly Production Cost</div>
            <div className="font-display text-4xl font-extrabold text-gradient-amber">
              {money(rec.monthlyTotal)}
            </div>
            <div className="text-xs text-paper/50">
              Budget Tier: ${['100', '200', '500', '1000'].includes(input.budget) ? `${input.budget}+` : input.budget}/mo
            </div>
          </div>
        </div>
      </section>

      {/* Step Breakdown Cards */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Recommended Stack
            </span>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white mt-1">
              Your 4-Step Production Pipeline
            </h2>
          </div>
          <Link
            href={`/stack?${adjustParams}`}
            className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
          >
            Adjust inputs →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {rec.steps.map((step, idx) => (
            <Card3D key={step.key} delay={idx * 0.05} className="h-full flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                    {step.label}
                  </div>
                  <div className="font-display text-lg font-bold text-ink dark:text-white">
                    {step.monthlyPrice === 0 ? 'Free ($0)' : `$${step.monthlyPrice}/mo`}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                    {step.toolName}
                  </h3>
                  <div className="text-xs font-semibold text-ink/50 dark:text-white/50 mt-0.5">
                    Plan: {step.planName}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink/75 dark:text-white/75 leading-relaxed">
                  {step.role}
                </p>

                {step.warning && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{step.warning}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={`/tools/${step.toolId}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-ink dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition"
                  >
                    View Tool Audit & Limits
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* Why This Stack Works & Commercial Safety */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl glass-card space-y-4">
          <h3 className="font-display text-xl font-bold text-ink dark:text-white flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-500" />
            Why This Stack Fits Your Criteria
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-ink/75 dark:text-white/75">
            {rec.reasons.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl glass-card space-y-4">
          <h3 className="font-display text-xl font-bold text-ink dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-violet-500" />
            Commercial Use & Licensing Clearance
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-ink/75 dark:text-white/75">
            {rec.commercialNotes.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ad Placement */}
      <div className="flex justify-center py-2">
        <InContentAd sponsor="Recommended Creator Cloud Storage & Hardware" />
      </div>

      {/* Workflow Integration Card */}
      {rec.workflowHref && (
        <section className="p-8 rounded-3xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              End-to-End Blueprint
            </span>
            <h3 className="font-display text-xl font-bold text-ink dark:text-white">
              Ready to execute this stack step-by-step?
            </h3>
            <p className="text-xs sm:text-sm text-ink/70 dark:text-white/70">
              Follow our production blueprint with explicit inputs, outputs, and pacing cues.
            </p>
          </div>
          <Link
            href={rec.workflowHref}
            className="btn-shine shrink-0 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-xs font-semibold text-paper hover:bg-ink-soft transition shadow-md dark:bg-paper dark:text-ink"
          >
            <span>Open Step-by-Step Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      )}
    </div>
  );
}
