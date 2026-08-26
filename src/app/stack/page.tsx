import React from 'react';
import { StackBuilder } from '../../components/StackBuilder';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageViewTracker } from '../../components/PageViewTracker';
import { PageHero } from '@/components/creativai/page-hero';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { LeaderboardAd } from '@/components/creativai/ad-slot';

export const metadata = {
  title: 'Stack Builder Decision Engine — CreativAI',
  description: 'Interactive rules-based decision builder for creator AI workflows. Get an audited stack tailored to your goal, budget, and experience.',
};

export default function StackPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <PageViewTracker step="stack_click" />
      <InteractivePageLayout density={60} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Decision Engine"
          eyebrowColor="bg-amber-500"
          title="Find your personalized"
          highlight="AI stack."
          highlightClass="text-gradient-amber"
          description="Answer 4 straightforward production questions: Goal, Budget, Experience Level, and Key Requirement. Our deterministic engine maps your exact constraints to verified creator software with 0 affiliate bias."
          iconName="sliders"
          stats={[
            { value: '2,352', label: 'Tested Combinations', color: '#f59e0b' },
            { value: '0', label: 'Affiliate Bias', color: '#7c3aed' },
            { value: '100%', label: 'Audited Pricing', color: '#0d9488' },
          ]}
          showCornerAd
          sponsor="Featured Hardware & Cloud Engine"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 space-y-8">
            <div className="p-8 sm:p-12 rounded-3xl glass-card">
              <StackBuilder />
            </div>

            {/* Ad Placement */}
            <div className="flex justify-center py-4">
              <LeaderboardAd sponsor="Recommended Production Infrastructure" />
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
