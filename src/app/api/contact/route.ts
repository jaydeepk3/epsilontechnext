import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const WORTAL_WEBHOOK_URL = 'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, mobile, city, specialty, clinic } = body;

        // Basic validation — mobile is the key required field for this form
        if (!mobile) {
            return NextResponse.json(
                { status: 'error', message: 'WhatsApp number is required' },
                { status: 400 }
            );
        }

        const displayName = name || specialty || 'Doctor Lead';

        // ─── Send Email Notification ──────────────────────────────────────────
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contact@epsilon-technology.com',
            subject: `🩺 New Doctor Marketing Lead — ${specialty || 'Specialist'} from ${city || 'Unknown City'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">🩺 New Doctor Marketing Inquiry</h2>

                    <div style="background: white; border-radius: 8px; padding: 20px; margin-top: 16px; border: 1px solid #e2e8f0;">
                        ${name ? `<p><strong style="color: #334155;">👤 Name:</strong> ${name}</p>` : ''}
                        <p><strong style="color: #334155;">📱 WhatsApp:</strong> <a href="tel:${mobile}">${mobile}</a></p>
                        ${specialty ? `<p><strong style="color: #334155;">🩺 Specialty:</strong> ${specialty}</p>` : ''}
                        ${city ? `<p><strong style="color: #334155;">📍 City / Country:</strong> ${city}</p>` : ''}
                        ${clinic ? `<p><strong style="color: #334155;">🏥 Clinic:</strong> ${clinic}</p>` : ''}
                    </div>

                    <p style="color: #64748b; font-size: 13px; margin-top: 16px; text-align: center;">
                        This lead came from the Doctor Marketing Page — Instagram / Facebook Ad Campaign
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        // ─── Fire Wortal CRM Webhook (non-blocking) ───────────────────────────
        const remarks = [
            specialty ? `Specialty: ${specialty}` : '',
            city ? `City: ${city}` : '',
            clinic ? `Clinic: ${clinic}` : '',
            'Source: Doctor Marketing Page (Instagram/Facebook Ad)',
        ].filter(Boolean).join(' | ');

        const wortalPayload = {
            name: displayName,
            email: '',
            phone: mobile,
            display_name: displayName,
            country: '',
            state: '',
            city: city || '',
            pincode: '',
            product: 'Doctor Digital Marketing',
            amount: 0,
            website: '',
            address_1: '',
            address_2: '',
            desc: remarks,
            remark: remarks,
        };

        // Fire-and-forget: do NOT await — we don't want Wortal to delay or
        // break the response if it's slow or temporarily down.
        fetch(WORTAL_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wortalPayload),
        })
            .then(() => console.log('[Wortal] Doctor lead pushed successfully:', mobile))
            .catch((e: Error) => console.error('[Wortal] Webhook failed:', e.message));
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Request submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send. Please WhatsApp us directly.' },
            { status: 500 }
        );
    }
}
