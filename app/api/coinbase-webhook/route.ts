import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-cc-webhook-signature');
  
  // Verify webhook signature
  const hmac = crypto.createHmac('sha256', process.env.COINBASE_COMMERCE_WEBHOOK_SECRET!);
  hmac.update(rawBody);
  const computedSignature = hmac.digest('hex');
  
  if (computedSignature !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const event = JSON.parse(rawBody);
  
  // Handle different event types
  switch (event.type) {
    case 'charge:confirmed':
      // Handle successful payment
      break;
    case 'charge:failed':
      // Handle failed payment
      break;
    // Add other event types as needed
  }

  return NextResponse.json({ received: true });
} 