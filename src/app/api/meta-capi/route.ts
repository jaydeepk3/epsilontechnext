import { NextResponse } from 'next/server';
import crypto from 'crypto';

const FB_PIXEL_ID = '1575709850775284';
const DEFAULT_ACCESS_TOKEN =
  'EAANYuHIfFwUBSCyLZC724SLg9ANXcwsDbv5PCTTjpmiZC7l7MYUQCIEIcfqNAHHyPdcSyEEsS9RpBrnR09myLyK5Ja4ZCtkMIvAbxyX0ffyRjMTCFOJozdhan6mf92aLa1P6795ddvjH6F2BGTs2j0hR7URhmgFaEmxvnKi1LpSIQGoBpxv7JsFPaET5OMS0QZDZD';

function hashData(value?: string | null): string | null {
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return null;
  return crypto.createHash('sha256').update(trimmed).digest('hex');
}

function normalizePhone(phone?: string | null): string | null {
  if (!phone || typeof phone !== 'string') return null;
  // Remove non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  if (!digitsOnly) return null;
  return digitsOnly;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      eventName = 'Lead',
      eventId,
      eventSourceUrl,
      user = {},
      customData = {},
      eventTime,
      fbp,
      fbc,
    } = body;

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const event_time = eventTime || currentTimestamp;
    const event_id = eventId || `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const hashedEmail = hashData(user.email);
    const hashedPhone = hashData(normalizePhone(user.phone));
    const hashedFn = hashData(user.firstName);
    const hashedLn = hashData(user.lastName);
    const hashedCity = hashData(user.city);

    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      undefined;

    const userAgent = request.headers.get('user-agent') || undefined;

    const accessToken = process.env.META_CAPI_ACCESS_TOKEN || DEFAULT_ACCESS_TOKEN;
    const pixelId = process.env.META_PIXEL_ID || FB_PIXEL_ID;
    const apiVersion = process.env.META_CAPI_VERSION || 'v19.0';

    const capiUrl = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: event_time,
          event_id: event_id,
          action_source: 'website',
          event_source_url: eventSourceUrl || undefined,
          user_data: {
            em: hashedEmail ? [hashedEmail] : undefined,
            ph: hashedPhone ? [hashedPhone] : undefined,
            fn: hashedFn ? [hashedFn] : undefined,
            ln: hashedLn ? [hashedLn] : undefined,
            ct: hashedCity ? [hashedCity] : undefined,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
            client_ip_address: clientIp,
            client_user_agent: userAgent,
          },
          custom_data: Object.keys(customData).length > 0 ? customData : undefined,
        },
      ],
    };

    const fbResponse = await fetch(capiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await fbResponse.json();

    // ─── Forward Lead to WhatsApp CRM Endpoint ─────────────────────────
    if (user.phone) {
      try {
        const rawPhone = normalizePhone(user.phone) || user.phone;
        const formattedPhone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;
        const leadType = customData.lead_type || customData.content_name || 'Online OPD Lead';
        const messageDetails = [
          `Lead Type: ${leadType}`,
          user.firstName ? `Doctor Name: ${user.firstName}` : '',
          user.city ? `City: ${user.city}` : '',
          customData.clinic_name ? `Clinic: ${customData.clinic_name}` : '',
          customData.specialty ? `Specialty: ${customData.specialty}` : '',
          customData.website ? `Website: ${customData.website}` : '',
          'Source: Online OPD Growth System Form',
        ].filter(Boolean).join(' | ');

        const crmPayload = {
          name: user.firstName || 'Doctor Lead',
          number: formattedPhone,
          email: user.email || '',
          message: messageDetails,
        };

        fetch('https://whatsapp.epsilon-technology.com/api/public/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'epsilon_27e088fcf7f74e041691653c8f4a1005',
          },
          body: JSON.stringify(crmPayload),
        })
          .then((res) => {
            if (!res.ok) {
              console.error('[WhatsApp CRM] Lead push failed status:', res.status);
            } else {
              console.log('[WhatsApp CRM] Lead pushed successfully for:', formattedPhone);
            }
          })
          .catch((err) => console.error('[WhatsApp CRM] Error:', err));
      } catch (crmErr) {
        console.error('[WhatsApp CRM Exception]', crmErr);
      }
    }

    if (!fbResponse.ok) {
      console.error('[Meta CAPI Error]', result);
      return NextResponse.json({ success: false, error: result }, { status: fbResponse.status });
    }

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error('[Meta CAPI Exception]', error);
    return NextResponse.json({ success: false, error: error?.message || 'Server error' }, { status: 500 });
  }
}
