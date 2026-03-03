import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, mobile, email, business, package: pkg, message } = body;

        if (!name || !mobile) {
            return NextResponse.json(
                { status: 'error', message: 'Name and Mobile number are required' },
                { status: 400 }
            );
        }

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
            subject: `🚀 New Web Dev Lead: ${name} — Package: ${pkg || 'Not specified'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">🌐 New Website Development Lead</h2>
                    
                    <div style="background: white; border-radius: 8px; padding: 20px; margin-top: 16px; border: 1px solid #e2e8f0;">
                        <p><strong style="color: #334155;">👤 Name:</strong> ${name}</p>
                        <p><strong style="color: #334155;">📱 Mobile:</strong> <a href="tel:${mobile}">${mobile}</a></p>
                        ${email ? `<p><strong style="color: #334155;">📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
                        ${business ? `<p><strong style="color: #334155;">🏢 Business:</strong> ${business}</p>` : ''}
                        <p><strong style="color: #334155;">📦 Package Selected:</strong> <span style="background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-weight: bold;">${pkg || 'Not specified'}</span></p>
                        ${message ? `<p><strong style="color: #334155;">💬 Message:</strong> ${message}</p>` : ''}
                    </div>

                    <p style="color: #64748b; font-size: 13px; margin-top: 16px; text-align: center;">
                        This lead came from the Web Development Landing Page — Facebook Ad Campaign
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        // ─── Fire Wortal CRM Webhook (non-blocking) ───────────────────────────
        const remarks = [
            `Package: ${pkg || 'Not specified'}`,
            business ? `Business: ${business}` : '',
            message ? `Message: ${message}` : '',
            'Source: Web Development Landing Page (Facebook Ad)',
        ].filter(Boolean).join(' | ');

        const wortalPayload = {
            name: name,
            email: email || '',
            phone: mobile,
            display_name: name,
            country: '',
            state: '',
            city: '',
            pincode: '',
            product: pkg || 'Web Development',
            amount: 0,
            website: '',
            address_1: '',
            address_2: '',
            desc: remarks,
            remark: remarks,
        };

        const WORTAL_WEBHOOK_URL = 'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';

        // Fire-and-forget: do NOT await — we don't want Wortal to delay or
        // break the response if it's slow or temporarily down.
        fetch(WORTAL_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wortalPayload),
        })
            .then(() => console.log('[Wortal] Lead pushed successfully:', name))
            .catch((e: Error) => console.error('[Wortal] Webhook failed:', e.message));
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Request submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Web Dev Lead error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send email. Please try calling us directly.' },
            { status: 500 }
        );
    }
}
