'use client';

import React from 'react';
import { PageViewTracker } from '../components/PageViewTracker';
import { CreativAIHero } from '../components/creativai/hero';
import { CreativAICategories } from '../components/creativai/category-bento';
import { CreativAIMethodology } from '../components/creativai/methodology';
import { CreativAIStats } from '../components/creativai/stats-strip';
import { LeaderboardAd, InContentAd } from '../components/creativai/ad-slot';
import { Marquee } from '../components/Marquee';

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
