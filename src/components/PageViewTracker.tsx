'use client';

import { useEffect } from 'react';
import { trackFunnelStep, trackPageView, FunnelStep } from '../lib/analytics';

interface PageViewTrackerProps {
  step?: FunnelStep;
  properties?: Record<string, any>;
}

export function PageViewTracker({ step, properties = {} }: PageViewTrackerProps) {
  useEffect(() => {
    if (step) {
      trackFunnelStep(step, properties);
    } else {
      trackPageView();
    }
  }, [step]);

  return null;
}