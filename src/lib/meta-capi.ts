export interface CapiUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
}

export interface CapiCustomData {
  content_name?: string;
  lead_type?: string;
  clinic_name?: string;
  specialty?: string;
  website?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

export interface TrackEventOptions {
  eventName?: string; // Standard Meta events: 'Lead', 'Contact', 'SubmitApplication', 'ViewContent', etc.
  eventSourceUrl?: string;
  user?: CapiUserData;
  customData?: CapiCustomData;
}

/**
 * Helper to trigger Meta Pixel (browser), Google Analytics (GA4 + GTM dataLayer),
 * and Meta Conversions API (server) with custom event details, user attributes & values.
 */
export function trackMetaCapiEvent(options: TrackEventOptions = {}) {
  const {
    eventName = 'Lead',
    eventSourceUrl = typeof window !== 'undefined' ? window.location.href : '',
    user = {},
    customData = {},
  } = options;

  try {
    const isPurchase = eventName.toLowerCase() === 'purchase';
    const value = customData.value ?? (isPurchase ? 99 : 0);
    const currency = customData.currency || 'INR';
    const contentName = customData.content_name || eventName;
    const transactionId = customData.transaction_id || `tx_${Date.now()}`;

    // 1. Browser Meta Pixel Event (Facebook / Meta Ads)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', isPurchase ? 'Purchase' : eventName, {
        content_name: contentName,
        currency,
        value,
        ...customData,
      });
    }

    // 2. Google Analytics (gtag) & GTM dataLayer
    if (typeof window !== 'undefined') {
      // 2a. Direct gtag event for GA4 / Google Ads
      if ((window as any).gtag) {
        if (isPurchase) {
          (window as any).gtag('event', 'purchase', {
            transaction_id: transactionId,
            value,
            currency,
            items: [
              {
                item_name: contentName,
                price: value,
                quantity: 1,
              },
            ],
            ...customData,
          });
        } else {
          (window as any).gtag('event', eventName.toLowerCase(), {
            event_category: 'Engagement',
            event_label: contentName,
            value,
            currency,
            ...customData,
          });
        }
      }

      // 2b. GTM dataLayer push
      (window as any).dataLayer = (window as any).dataLayer || [];
      if (isPurchase) {
        (window as any).dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: transactionId,
            value,
            currency,
            items: [
              {
                item_name: contentName,
                price: value,
                quantity: 1,
              },
            ],
          },
          content_name: contentName,
          value,
          currency,
        });
      } else {
        (window as any).dataLayer.push({
          event: eventName.toLowerCase(),
          content_name: contentName,
          value,
          currency,
        });
      }
    }

    // 3. Server-Side Meta Conversions API (CAPI) Event
    fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: isPurchase ? 'Purchase' : eventName,
        eventSourceUrl,
        user,
        customData: {
          ...customData,
          value,
          currency,
          content_name: contentName,
        },
      }),
    }).catch((err) => console.error('[Meta CAPI Helper Error]:', err));
  } catch (err) {
    console.error('[Meta/GA Tracking Exception]:', err);
  }
}
