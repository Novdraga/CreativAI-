'use client';

import React from 'react';
import { PageViewTracker } from '../components/PageViewTracker';
import { CreativAIHero } from '../components/creativai/hero';
import { CreativAICategories } from '../components/creativai/category-bento';
import { CreativAIMethodology } from '../components/creativai/methodology';
import { CreativAIStats } from '../components/creativai/stats-strip';
import { LeaderboardAd, InContentAd } from '../components/creativai/ad-slot';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CreativAI',
    url: 'https://creativai.vercel.app',
    description: 'Evidence-backed decision engine helping creators choose the right AI tools, build integrated workflows, and calculate true production costs.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://creativai.vercel.app/tools?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageViewTracker step="home_visit" />

      {/* 1. Hero with Interactive Particle Canvas & Magnetic Typography */}
      <CreativAIHero />

      {/* Above-the-fold ad slot (728x90 / responsive) */}
      <div className="mx-auto max-w-[1320px] w-full px-5 sm:px-8 -mt-6 mb-8">
        <LeaderboardAd sponsor="Featured Production Partner" />
      </div>

      {/* Live Marquee Strip */}
      <Marquee />

      {/* 2. Interactive Category Bento Grid */}
      <CreativAICategories />

      {/* In-content native ad slot */}
      <div className="mx-auto max-w-[1320px] w-full px-5 sm:px-8 my-6">
        <InContentAd sponsor="Verified Audio / Video Sponsor" />
      </div>

      {/* 3. P.A.C.E Evaluation Methodology Deep Dive */}
      <CreativAIMethodology />

      {/* 4. Transparency & Verified Stats Strip */}
      <CreativAIStats />
    </div>
  );
}

function Marquee() {
  const items = [
    'Real output quality',
    'Verified commercial terms',
    'True per-video costs',
    'PACE Benchmark Standard',
    '0 Sponsored Bias',
    '24 Audited Creator Tools',
    'Zero Affiliate Inflation',
  ];
  return (
    <div className="relative py-3.5 border-y border-black/5 bg-paper-warm/40 dark:bg-white/[0.02] dark:border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.05em] text-ink/65 dark:text-white/65"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
