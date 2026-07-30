import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export async function POST() {
  try {
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
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
    });
  } catch (error) {
    console.error('[Razorpay Order] Failed to create order:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create payment order.' },
      { status: 500 }
    );
  }
}
