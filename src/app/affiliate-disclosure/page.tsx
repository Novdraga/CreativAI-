import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '@/components/creativai/page-hero';
import { InteractivePageLayout } from '@/components/creativai/interactive-page-layout';
import { ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Affiliate Disclosure & Commercial Policy — CreativAI',
  description: 'Our complete monetization and affiliate transparency statement. How CreativAI stays independent.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-clip">
      <InteractivePageLayout density={60} className="flex-1 flex flex-col">
        <PageHero
          eyebrow="Independence Policy"
          eyebrowColor="bg-violet-500"
          title="Affiliate disclosure &"
          highlight="commercial ethics."
          highlightClass="text-gradient-aurora"
          description="How CreativAI finances independent benchmarking without compromising editorial ratings, P.A.C.E scores, or tool recommendations."
          iconName="scale"
          stats={[
            { value: '0', label: 'Paid Rankings', color: '#f59e0b' },
            { value: '100%', label: 'Disclosure Standard', color: '#7c3aed' },
            { value: 'Gate 5', label: 'Deterministic Engine', color: '#0d9488' },
          ]}
          cta={{ label: 'Explore Tools', href: '/tools', primary: true }}
          showCornerAd
          sponsor="Transparency Standard"
        />

        <section className="relative py-12 flex-1">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl glass-card space-y-6 text-sm text-ink/75 dark:text-white/75 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
                How We Make Money (And How We Don&apos;t)
              </h2>
              <p>
                CreativAI contains affiliate links. If you click on an affiliate link and subscribe to a tool, we may earn a referral commission. This commission comes at zero additional cost to you and supports our ongoing benchmark testing lab.
              </p>
              <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                Our Non-Negotiable Guarantees:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>No Sponsored Score Inflation:</strong> A vendor cannot pay to increase their P.A.C.E score or alter their weakness findings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Deterministic Stack Recommendations:</strong> The Stack Builder engine is 100% rules-based. It selects tools based purely on budget, goal, and requirements—never affiliate commission payouts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Negative Findings Never Withheld:</strong> If a tool traps creators with non-commercial free exports, hidden credit expiration, or aggressive subscription lock-in, we report it explicitly.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </InteractivePageLayout>
    </div>
  );
}
