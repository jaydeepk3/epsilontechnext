'use client';

import { useEffect } from 'react';
import { trackMetaCapiEvent } from '@/lib/meta-capi';

export default function AiKitPurchaseTracker() {
  useEffect(() => {
    trackMetaCapiEvent({
      eventName: 'Purchase',
      customData: {
        content_name: 'Paid AI Growth Kit / Book Purchase',
        value: 99,
        currency: 'INR',
      },
    });
  }, []);

  return null;
}
