import { NextResponse } from 'next/server';

const WORTAL_WEBHOOK_URL = process.env.WORTAL_WEBHOOK_URL || 'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';
const WHATSAPP_CRM_URL = 'https://whatsapp.epsilon-technology.com/api/public/leads';
const WHATSAPP_API_KEY = 'epsilon_27e088fcf7f74e041691653c8f4a1005';

function formatPhone(phone: string): string {
    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length === 10) return `91${digits}`;
    return digits || phone;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, mobile, city, specialty, clinic, email, leadType, website } = body;

        // Basic validation — mobile is the key required field for this form
        if (!mobile) {
            return NextResponse.json(
                { status: 'error', message: 'WhatsApp number is required' },
                { status: 400 }
            );
        }

        const displayName = name || specialty || 'Doctor Lead';
        const formattedPhone = formatPhone(mobile);

        const remarks = [
            leadType ? `Type: ${leadType}` : '',
            specialty ? `Specialty: ${specialty}` : '',
            city ? `City: ${city}` : '',
            clinic ? `Clinic: ${clinic}` : '',
            website ? `Website: ${website}` : '',
            'Source: Online OPD Growth System (Instagram/Facebook/Direct)',
        ].filter(Boolean).join(' | ');

        // 1. Wortal CRM Payload
        const wortalPayload = {
            name: displayName,
            email: email || '',
            phone: mobile,
            display_name: displayName,
            country: '',
            state: '',
            city: city || '',
            pincode: '',
            product: leadType || 'Doctor Digital Marketing',
            amount: 0,
            website: website || '',
            address_1: '',
            address_2: '',
            desc: remarks,
            remark: remarks,
            received_from: 'Supports Form',
        };

        // 2. WhatsApp CRM Payload
        const whatsappPayload = {
            name: displayName,
            number: formattedPhone,
            email: email || '',
            message: remarks,
        };

        // ─── Fire Both CRMs Concurrently ───────────────────────────────────────
        const wortalPromise = (async () => {
            try {
                const res = await fetch(WORTAL_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(wortalPayload),
                });
                if (!res.ok) {
                    const errText = await res.text();
                    console.error('[Wortal CRM] Error status:', res.status, errText);
                } else {
                    console.log('[Wortal CRM] Lead pushed successfully:', mobile);
                }
            } catch (e) {
                console.error('[Wortal CRM] Failed:', (e as Error).message);
            }
        })();

        const whatsappPromise = (async () => {
            try {
                const res = await fetch(WHATSAPP_CRM_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': WHATSAPP_API_KEY,
                    },
                    body: JSON.stringify(whatsappPayload),
                });
                if (!res.ok) {
                    const errText = await res.text();
                    console.error('[WhatsApp CRM] Error status:', res.status, errText);
                } else {
                    console.log('[WhatsApp CRM] Lead pushed successfully:', formattedPhone);
                }
            } catch (e) {
                console.error('[WhatsApp CRM] Failed:', (e as Error).message);
            }
        })();

        await Promise.allSettled([wortalPromise, whatsappPromise]);
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Request submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to process request.' },
            { status: 500 }
        );
    }
}
