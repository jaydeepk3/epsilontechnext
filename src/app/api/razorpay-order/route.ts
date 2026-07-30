import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST() {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error('[Razorpay Order] Missing Razorpay credentials.');
      return NextResponse.json(
        { status: 'error', message: 'Razorpay payment credentials are not configured.' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: 9900, // ₹99 in paise
      currency: 'INR',
      receipt: `aikit_${Date.now()}`,
      notes: {
        product: 'AI Growth Kit for Doctors',
        source: 'Online OPD Growth System Landing Page',
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: keyId,
    });
  } catch (error) {
    console.error('[Razorpay Order] Failed to create order:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create payment order.' },
      { status: 500 }
    );
  }
}

