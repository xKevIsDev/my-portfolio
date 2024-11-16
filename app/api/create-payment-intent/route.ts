import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-10-28.acacia',
});

export async function POST(req: Request) {
  try {
    const { amount, description } = await req.json();
    
    const amountInCents = Math.round(amount * 100);

    if (amountInCents < 50) {
      return NextResponse.json({ error: 'Minimum amount is $0.50' }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
      description: description || 'Freelance Service',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        description: description || 'Freelance Service',
      },
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret,
      amount: amountInCents,
    });

  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe error:', {
        type: error.type,
        code: error.code,
        message: error.message
      });
    } else {
      console.error('Unknown error:', error);
    }

    return NextResponse.json(
      { 
        error: error instanceof Stripe.errors.StripeError 
          ? error.message 
          : 'Error creating payment intent'
      },
      { status: 500 }
    );
  }
}