import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const WORTAL_WEBHOOK_URL = process.env.WORTAL_WEBHOOK_URL || 'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';

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
            subject: `✉️ New General Inquiry — ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">✉️ New Website Inquiry</h2>
 
                    <div style="background: white; border-radius: 8px; padding: 20px; margin-top: 16px; border: 1px solid #e2e8f0;">
                        <p><strong style="color: #334155;">👤 Name:</strong> ${fullName}</p>
                        <p><strong style="color: #334155;">📱 Mobile:</strong> <a href="tel:${mobile}">${mobile}</a></p>
                        <p><strong style="color: #334155;">📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong style="color: #334155;">💬 Message:</strong></p>

                        <div style="background: #f1f5f9; padding: 12px; border-radius: 6px; color: #475569; font-style: italic;">
                            ${message}
                        </div>
                    </div>

                    <p style="color: #64748b; font-size: 13px; margin-top: 16px; text-align: center;">
                        This message was sent from the main Contacts Page.
                    </p>
                </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error("Failed to send email to staff:", emailError);
        }

        // ─── Fire Wortal CRM Webhook (blocking await) ────────────────────────
        const remarks = `Message: ${message} | Source: General Contact Page`;

        const wortalPayload = {
            name: fullName,
            email: email,
            phone: mobile,
            display_name: fullName,

            product: 'General Inquiry',
            desc: remarks,
            remark: remarks,
        };

        try {
            const response = await fetch(WORTAL_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(wortalPayload),
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error('[Wortal] Webhook responded with error:', response.status, errText);
            }
        } catch (e) {
            console.error('[Wortal] Webhook failed:', (e as Error).message);
        }
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('General contact error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send message. Please try again or email us.' },
            { status: 500 }
        );
    }
}
