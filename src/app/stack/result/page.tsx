import React, { Suspense } from 'react';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { ResultContent } from './ResultContent';

export const metadata = {
  title: 'Your Recommended Stack — CreativAI',
  description: 'Rules-based AI stack recommendation with dynamic true-cost breakdown and commercial compliance notes.',
};

export default function StackResultPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Stack Builder', href: '/stack' },
          { label: 'Result' },
        ]}
      />
      <Suspense
        fallback={
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center text-sm text-slate-500 dark:text-slate-400">
            Computing your recommendation…
          </div>
        }
      >
        <ResultContent />
      </Suspense>
    </div>
  );
}
