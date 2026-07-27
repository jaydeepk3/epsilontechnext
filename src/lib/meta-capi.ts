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
 * Helper to trigger Meta Pixel (browser) and Meta Conversions API (server)
 * with custom event details, per-page custom names, and user attributes.
 */
export function trackMetaCapiEvent(options: TrackEventOptions = {}) {
  const {
    eventName = 'Lead',
    eventSourceUrl = typeof window !== 'undefined' ? window.location.href : '',
    user = {},
    customData = {},
  } = options;

  try {
    // 1. Browser Meta Pixel Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, {
        content_name: customData.content_name || eventName,
        currency: customData.currency || 'INR',
        value: customData.value || 0,
        ...customData,
      });
    }

    // 2. Google Analytics (gtag) Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName.toLowerCase(), {
        event_category: 'Engagement',
        event_label: customData.content_name || eventName,
        value: customData.value || 0,
        currency: customData.currency || 'INR',
        ...customData,
      });
    }

    // 3. Server-Side Meta Conversions API (CAPI) Event
    fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventSourceUrl,
        user,
        customData,
      }),
    }).catch((err) => console.error('[Meta CAPI Helper Error]:', err));
  } catch (err) {
    console.error('[Meta Tracking Exception]:', err);
  }
}
