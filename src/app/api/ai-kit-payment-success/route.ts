import { NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import prisma from '@/lib/prisma';

const WORTAL_WEBHOOK_URL =
  process.env.WORTAL_WEBHOOK_URL ||
  'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';
const WHATSAPP_CRM_URL = 'https://whatsapp.epsilon-technology.com/api/public/leads';
const WHATSAPP_API_KEY = 'epsilon_27e088fcf7f74e041691653c8f4a1005';

const AI_KIT_PDF_URL =
  process.env.AI_KIT_PDF_URL || 'https://docs.google.com/document/d/1uEDZeGPz8qFaTdUO1J6pZa3L-s70ueNkzS7pvYosHfg/edit?usp=sharing';

function formatPhone(phone: string): string {
  const digits = (phone || '').replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits || phone;
}

async function sendConfirmationEmail(data: {
  name: string;
  email: string;
  amount: number;
  orderId: string;
}) {
  if (!process.env.SMTP_USER || process.env.SMTP_USER.includes('REPLACE')) {
    console.warn('[Email] SMTP not configured — skipping email send.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#0F6FFF,#00C2A8);padding:32px 40px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:900;">🎉 Purchase Confirmed!</h1>
          <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:14px;">AI Growth Kit for Doctors — Order #${data.orderId.slice(-8)}</p>
        </div>
        
        <!-- Body -->
        <div style="padding:40px;">
          <p style="font-size:16px;color:#1e293b;margin-top:0;">Dear <strong>${data.name}</strong>,</p>
          <p style="font-size:15px;color:#475569;line-height:1.7;">
            Thank you for purchasing the <strong>AI Growth Kit for Doctors</strong>. Your payment of 
            <strong style="color:#0F6FFF;">₹${(data.amount / 100).toFixed(0)}</strong> has been received successfully.
          </p>
          
          <!-- Download Button -->
          <div style="text-align:center;margin:32px 0;">
            <a href="${AI_KIT_PDF_URL}" 
               style="display:inline-block;background:linear-gradient(135deg,#0F6FFF,#00C2A8);color:#ffffff;text-decoration:none;padding:16px 40px;border-radius:12px;font-size:16px;font-weight:900;letter-spacing:0.5px;">
              📥 Download Your AI Growth Kit
            </a>
          </div>
          
          <!-- What's Inside -->
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:24px;">
            <h3 style="margin-top:0;color:#0f172a;font-size:15px;">📦 What You've Received:</h3>
            <ul style="margin:0;padding-left:20px;color:#475569;font-size:14px;line-height:2;">
              <li>Complete AI Book for Doctors (120+ pages)</li>
              <li>100+ Ready-to-Use AI Prompts</li>
              <li>Gemini Prompt Library</li>
              <li>Claude Strategy Templates</li>
              <li>Google Flow Video Guide</li>
              <li>Canva AI Design Guide</li>
              <li>Google Business AI Templates</li>
              <li>WhatsApp Message Templates</li>
              <li>30-Day AI Marketing Plan</li>
            </ul>
          </div>
          
          <p style="font-size:14px;color:#64748b;line-height:1.7;">
            If the download button doesn't work, copy and paste this link in your browser:<br/>
            <a href="${AI_KIT_PDF_URL}" style="color:#0F6FFF;word-break:break-all;">${AI_KIT_PDF_URL}</a>
          </p>
          
          <p style="font-size:14px;color:#64748b;">
            Questions? WhatsApp us at <strong>+91 73593 15576</strong> or reply to this email.
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background:#f1f5f9;padding:24px 40px;text-align:center;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;">
            Epsilon Technology | Created for Indian Doctors &amp; Clinic Owners<br/>
            <a href="https://epsilon-technology.com" style="color:#0F6FFF;text-decoration:none;">epsilon-technology.com</a>
          </p>
        </div>
        
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'Epsilon Technology <noreply@epsilon-technology.com>',
    to: data.email,
    subject: `✅ Your AI Growth Kit for Doctors is Ready — Order Confirmed`,
    html: emailHtml,
  });

  console.log('[Email] Confirmation email sent to:', data.email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      mobile,
      clinicName,
      specialty,
    } = body;

    // ─── 1. Verify Razorpay Payment Signature ─────────────────────────────
    const keySecret = process.env.RAZORPAY_KEY_SECRET || '';
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid = expectedSignature === razorpay_signature;
    if (!isValid) {
      console.error('[AI Kit Payment] Signature verification FAILED');
      return NextResponse.json(
        { status: 'error', message: 'Payment signature verification failed.' },
        { status: 400 }
      );
    }

    console.log('[AI Kit Payment] Signature verified ✓');

    // ─── 2. Save Order to Database ─────────────────────────────────────────
    let dbOrder: { id: string } | null = null;
    try {
      dbOrder = await prisma.aiKitOrder.create({
        data: {
          name: name || 'Doctor',
          email: email || '',
          mobile: mobile || '',
          clinicName: clinicName || null,
          specialty: specialty || null,
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          amount: 9900,
          currency: 'INR',
          status: 'paid',
        },
      });
      console.log('[AI Kit Payment] Order saved to DB:', dbOrder.id);
    } catch (dbErr) {
      console.error('[AI Kit Payment] DB save failed:', dbErr);
    }

    // ─── 3. Send Confirmation Email ────────────────────────────────────────
    if (email) {
      try {
        await sendConfirmationEmail({
          name: name || 'Doctor',
          email,
          amount: 9900,
          orderId: razorpay_order_id,
        });
      } catch (emailErr) {
        console.error('[AI Kit Payment] Email send failed:', emailErr);
      }
    }

    // ─── 4. Push to Wortal CRM ─────────────────────────────────────────────
    const remarks = [
      'Type: AI Growth Kit Purchase (₹99)',
      specialty ? `Specialty: ${specialty}` : '',
      clinicName ? `Clinic: ${clinicName}` : '',
      `Payment ID: ${razorpay_payment_id}`,
      'Source: Online OPD Growth System — AI Kit Upsell',
    ]
      .filter(Boolean)
      .join(' | ');

    const wortalPromise = (async () => {
      try {
        await fetch(WORTAL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name || 'Doctor',
            email: email || '',
            phone: mobile || '',
            product: 'AI Growth Kit for Doctors (₹99)',
            amount: 99,
            desc: remarks,
            remark: remarks,
            received_from: 'AI Kit Payment Form',
          }),
        });
      } catch (e) {
        console.error('[Wortal CRM] Failed:', (e as Error).message);
      }
    })();

    // ─── 5. Push to WhatsApp CRM ───────────────────────────────────────────
    const whatsappPromise = (async () => {
      try {
        const formattedPhone = formatPhone(mobile || '');
        if (formattedPhone) {
          await fetch(WHATSAPP_CRM_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': WHATSAPP_API_KEY,
            },
            body: JSON.stringify({
              name: name || 'Doctor',
              number: formattedPhone,
              email: email || '',
              message: remarks,
            }),
          });
        }
      } catch (e) {
        console.error('[WhatsApp CRM] Failed:', (e as Error).message);
      }
    })();

    await Promise.allSettled([wortalPromise, whatsappPromise]);

    return NextResponse.json({
      status: 'success',
      message: 'Payment verified and order confirmed.',
      orderId: dbOrder?.id,
      pdfUrl: AI_KIT_PDF_URL,
    });
  } catch (error) {
    console.error('[AI Kit Payment] Unhandled error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Payment processing failed.' },
      { status: 500 }
    );
  }
}
