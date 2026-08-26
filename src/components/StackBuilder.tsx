'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Target,
  Rocket,
  ArrowUpRight,
  AlertTriangle,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import {
  computeStack,
  money,
  sanitizeInput,
  type StackInput,
  type StackRecommendation,
} from '../lib/stackRules';
import { trackDecisionSession } from '../lib/metrics';
import { trackFunnelStep } from '../lib/analytics';
import { Card3D } from './creativai/card-3d';

type Choice = {
  id: string;
  label: string;
  description: string;
  emoji: string;
  accent: string;
};

type WizardStep = {
  id: 'goal' | 'budget' | 'experience' | 'requirement';
  question: string;
  helper: string;
  choices: Choice[];
};

const WIZARD_STEPS: WizardStep[] = [
  {
    id: 'goal',
    question: 'What do you want to create?',
    helper: 'This anchors the stack around your primary output format and production pipeline.',
    choices: [
      { id: 'faceless-youtube', label: 'Faceless YouTube Video', description: 'Automated narration, generative B-roll, and high-CTR thumbnails', emoji: '🎬', accent: '#7c3aed' },
      { id: 'shorts', label: 'YouTube Shorts / TikTok', description: 'High-energy 9:16 vertical video with auto-captions and fast pacing', emoji: '⚡', accent: '#f59e0b' },
      { id: 'longform', label: 'Long-Form Video Essay', description: 'Deep-dive documentary scripting, voice timbre control, and cinematic timeline', emoji: '🎥', accent: '#0d9488' },
      { id: 'podcast', label: 'Podcast & Audio Narration', description: 'Studio-quality speech generation, audio mastering, and show notes', emoji: '🎙️', accent: '#c026d3' },
      { id: 'repurposing', label: 'Content Repurposing', description: 'Turn podcasts or webinars into 10+ clips with viral captions', emoji: '🔄', accent: '#4f46e5' },
      { id: 'live-streaming', label: 'Live Streaming & Broadcast', description: 'Real-time broadcasting, overlays, multi-streaming, and live production', emoji: '📡', accent: '#ec4899' },
      { id: 'education-elearning', label: 'Education & Course Production', description: 'Structured curriculum scripts, clear instructional audio, and screen capture', emoji: '📚', accent: '#14b8a6' },
      { id: 'music-production', label: 'AI Music & Soundtracks', description: 'Full-song generation, background tracks, stem editing, and DAWs', emoji: '🎵', accent: '#8b5cf6' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your monthly software budget?',
    helper: 'We will only recommend tools that fit your actual spending without hidden credit surprises.',
    choices: [
      { id: '0', label: '$0 / mo (Free & Open Source)', description: '100% free plans, community tools, and trial credits only', emoji: '💚', accent: '#10b981' },
      { id: '25', label: '$25 / mo (Starter Creator)', description: 'Low-cost entry with commercial rights for solo beginners', emoji: '🚀', accent: '#3b82f6' },
      { id: '50', label: '$50 / mo (Standard Production)', description: 'Sweet spot for active weekly creators — full commercial licenses', emoji: '⚡', accent: '#8b5cf6' },
      { id: '100', label: '$100 / mo (Pro Solo Creator)', description: 'Higher generation limits, priority render queues, and studio audio', emoji: '💎', accent: '#f59e0b' },
      { id: '200', label: '$200+ / mo (Growth & Automation)', description: 'Scale stack for daily publishing, high credit allowances, and pro exports', emoji: '🔥', accent: '#f97316' },
      { id: '500', label: '$500+ / mo (Studio / Team)', description: 'Multi-seat collaboration, agency licenses, and unlimited rendering', emoji: '🏢', accent: '#ec4899' },
      { id: '1000', label: '$1000+ / mo (Enterprise Scale)', description: 'Enterprise SLA, custom voice clones, and high-throughput pipelines', emoji: '👑', accent: '#6366f1' },
    ],
  },
  {
    id: 'experience',
    question: 'What is your technical experience level?',
    helper: 'Determines whether you need dead-simple one-click tools or granular professional control.',
    choices: [
      { id: 'no-experience', label: 'No Experience (Absolute Beginner)', description: 'Zero technical friction — one-click templates and simple web UIs', emoji: '🌱', accent: '#10b981' },
      { id: 'beginner', label: 'Beginner (Zero Technical Skill)', description: 'Comfortable with basic prompts and drag-and-drop tools', emoji: '🐣', accent: '#06b6d4' },
      { id: 'intermediate', label: 'Intermediate (Comfortable with Prompts)', description: 'Uses custom system prompts, audio parameters, and multi-track timelines', emoji: '🛠️', accent: '#8b5cf6' },
      { id: 'advanced', label: 'Advanced (High-Volume Workflows)', description: 'Batch generation, keyframe animation, and timeline round-tripping', emoji: '⚙️', accent: '#f59e0b' },
      { id: 'expert', label: 'Expert / Professional', description: 'NLE mastery (DaVinci/Premiere), custom color grading, and lossless audio', emoji: '🎯', accent: '#ef4444' },
      { id: 'agency', label: 'Agency / Production Team', description: 'Multi-editor workflows, client reviews, and high-volume asset output', emoji: '👥', accent: '#a855f7' },
    ],
  },
  {
    id: 'requirement',
    question: 'What matters most to your channel?',
    helper: 'Helps us prioritize licensing safety, render speed, ease of use, or output fidelity.',
    choices: [
      { id: 'commercial', label: 'Commercial Rights Guaranteed', description: 'Safe monetization on YouTube/TikTok with zero copyright strikes', emoji: '🛡️', accent: '#10b981' },
      { id: 'quality', label: 'Highest Output Quality', description: 'Photorealistic visuals, natural human speech, and studio timbre', emoji: '✨', accent: '#f59e0b' },
      { id: 'cheapest', label: 'Lowest Possible Cost', description: 'Maximize output volume per dollar spent — minimum monthly burn', emoji: '💰', accent: '#06b6d4' },
      { id: 'fastest', label: 'Fastest Production Speed', description: 'Automate manual editing — produce finished assets in minutes', emoji: '⚡', accent: '#ec4899' },
      { id: 'easiest', label: 'Easiest to Use', description: 'No complex software setups or terminal commands — pure simplicity', emoji: '👌', accent: '#3b82f6' },
      { id: 'support', label: 'Best Customer Support', description: 'Responsive 24/7 support, active Discord communities, and clear docs', emoji: '🤝', accent: '#8b5cf6' },
      { id: 'scalability', label: 'Scalability for Growth', description: 'Pipelines that easily handle 10x production volume as channel grows', emoji: '📈', accent: '#14b8a6' },
    ],
  },
];

export function StackBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    goal: 'faceless-youtube',
    budget: '50',
    experience: 'beginner',
    requirement: 'commercial',
  });
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<StackRecommendation | null>(null);

  const stepConfig = WIZARD_STEPS[currentStep];
  const progress = ((currentStep + (done ? 1 : 0)) / WIZARD_STEPS.length) * 100;

  const selectChoice = (stepId: string, choiceId: string) => {
    const nextAnswers = { ...answers, [stepId]: choiceId };
    setAnswers(nextAnswers);

    setTimeout(() => {
      if (currentStep < WIZARD_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        const cleanInput: StackInput = sanitizeInput({
          goal: nextAnswers.goal,
          budget: nextAnswers.budget,
          experience: nextAnswers.experience,
          requirement: nextAnswers.requirement,
        });
        const computed = computeStack(cleanInput);
        setResult(computed);
        setDone(true);

        trackDecisionSession(cleanInput.goal, computed.steps.map((s) => s.toolId));
        trackFunnelStep('result_view', {
          goal: cleanInput.goal,
          budget: cleanInput.budget,
          tools: computed.steps.map((s) => s.toolId),
        });
      }
    }, 220);
  };

  const goBack = () => {
    if (done) {
      setDone(false);
      return;
    }
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const restart = () => {
    setCurrentStep(0);
    setDone(false);
    setResult(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8" id="stack-builder">
      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-ink/50 dark:text-white/50">
          <span>
            Step {Math.min(currentStep + 1, WIZARD_STEPS.length)} of {WIZARD_STEPS.length}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Step Question Header */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Question {currentStep + 1}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink dark:text-white mt-1 tracking-tight">
                {stepConfig.question}
              </h2>
              <p className="mt-2 text-sm text-ink/65 dark:text-white/65 leading-relaxed">
                {stepConfig.helper}
              </p>
            </div>

            {/* Choices Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {stepConfig.choices.map((choice) => {
                const isSelected = answers[stepConfig.id] === choice.id;
                const accent = choice.accent || '#7c3aed';

                return (
                  <button
                    key={choice.id}
                    onClick={() => selectChoice(stepConfig.id, choice.id)}
                    className="group relative text-left overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-white/70 dark:bg-white/[0.03] dark:border-white/10"
                    style={{
                      borderColor: isSelected ? accent : undefined,
                      background: isSelected ? `${accent}12` : undefined,
                    }}
                  >
                    {/* Top Accent Band */}
                    <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                      <div
                        className="h-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                        style={{ background: accent }}
                      />
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-3xl shrink-0 select-none">{choice.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-base font-bold text-ink dark:text-white">
                            {choice.label}
                          </h3>
                          {isSelected && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                              className="grid place-items-center w-5 h-5 rounded-full text-white shrink-0"
                              style={{ background: accent }}
                            >
                              <Check className="w-3 h-3" strokeWidth={3} />
                            </motion.span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-ink/65 dark:text-white/65 leading-relaxed">
                          {choice.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-ink/30 dark:text-white/30 transition-transform group-hover:translate-x-1 shrink-0 mt-0.5"
                        style={{ color: isSelected ? accent : undefined }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <button
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/50 hover:text-ink dark:text-white/50 dark:hover:text-white transition pt-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to previous question</span>
              </button>
            )}
          </motion.div>
        ) : (
          /* Result View */
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {result && (
              <>
                {/* Result Header */}
                <div className="text-center space-y-4">
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
                    className="inline-grid place-items-center w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-white shadow-xl mx-auto"
                  >
                    <Rocket className="w-8 h-8" strokeWidth={2.2} />
                  </motion.span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                      Deterministic Recommendation · Gate 5 Standard
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink dark:text-white tracking-tight mt-1">
                      Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">perfect stack.</span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-ink/70 dark:text-white/70 max-w-xl mx-auto leading-relaxed">
                      {result.tagline}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    <Target className="w-4 h-4" />
                    <span>Estimated Monthly Cost: <strong>{money(result.monthlyTotal)}</strong></span>
                  </div>
                </div>

                {/* Stack Step Cards */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                      Recommended 4-Step Toolchain
                    </h3>
                    <button
                      onClick={restart}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Start over</span>
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {result.steps.map((step, idx) => (
                      <Card3D key={step.key} delay={idx * 0.06} className="h-full flex flex-col justify-between">
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                              {step.label}
                            </span>
                            <span className="font-display text-sm font-bold text-ink dark:text-white">
                              {step.monthlyPrice === 0 ? 'Free ($0)' : `$${step.monthlyPrice}/mo`}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-display text-2xl font-bold text-ink dark:text-white">
                              {step.toolName}
                            </h4>
                            <span className="text-xs font-semibold text-ink/50 dark:text-white/50">
                              Plan: {step.planName}
                            </span>
                          </div>

                          <p className="text-xs text-ink/75 dark:text-white/75 leading-relaxed">
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
                              href={`/tools/${step.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-bold text-ink dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition"
                            >
                              View Full Tool Audit
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

                {/* Why This Stack Works & Commercial Rights */}
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-3">
                    <h4 className="font-display text-base font-bold text-ink dark:text-white flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      Why This Stack Fits Your Criteria
                    </h4>
                    <ul className="space-y-2 text-xs text-ink/75 dark:text-white/75">
                      {result.reasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-3">
                    <h4 className="font-display text-base font-bold text-ink dark:text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-violet-500" />
                      Commercial Licensing Clearance
                    </h4>
                    <ul className="space-y-2 text-xs text-ink/75 dark:text-white/75">
                      {result.commercialNotes.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  {result.workflowHref && (
                    <Link
                      href={result.workflowHref}
                      className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all dark:bg-white dark:text-ink"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Open Step-by-Step Production Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink hover:bg-white transition dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Build Another Stack</span>
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
