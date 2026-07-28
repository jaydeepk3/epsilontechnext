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
        const { firstName, lastName, mobile, email, message } = body;

        if (!firstName || !email || !mobile || !message) {
            return NextResponse.json(
                { status: 'error', message: 'First Name, Email, Mobile, and Message are required' },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName}`.trim();
        const formattedPhone = formatPhone(mobile);
        const remarks = `Message: ${message} | Source: General Contact Page`;

        // 1. Wortal CRM Payload
        const wortalPayload = {
            name: fullName,
            email: email || '',
            phone: mobile,
            display_name: fullName,
            country: '',
            state: '',
            city: '',
            pincode: '',
            product: 'General Inquiry',
            amount: 0,
            website: '',
            address_1: '',
            address_2: '',
            desc: remarks,
            remark: remarks,
            received_from: 'Supports Form',
        };

        // 2. WhatsApp CRM Payload
        const whatsappPayload = {
            name: fullName,
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
                }
            } catch (e) {
                console.error('[WhatsApp CRM] Failed:', (e as Error).message);
            }
        })();

        await Promise.allSettled([wortalPromise, whatsappPromise]);
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('General contact error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
