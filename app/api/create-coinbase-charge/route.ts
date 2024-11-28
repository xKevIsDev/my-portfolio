import { NextResponse } from 'next/server';

if (!process.env.COINBASE_COMMERCE_API_KEY) {
  throw new Error('COINBASE_COMMERCE_API_KEY is not set in environment variables');
}

async function validateApiKey() {
  try {
    const response = await fetch('https://api.commerce.coinbase.com/checkouts', {
      headers: {
        'X-CC-Api-Key': process.env.COINBASE_COMMERCE_API_KEY as string,
        'X-CC-Version': '2018-03-22'
      } as HeadersInit
    });

    if (!response.ok) {
      throw new Error('Invalid API key or authentication failed');
    }

    return true;
  } catch (error) {
    console.error('Coinbase API authentication error:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    // First validate the API key
    const isValid = await validateApiKey();
    if (!isValid) {
      return NextResponse.json(
        { error: 'Failed to authenticate with Coinbase Commerce' },
        { status: 401 }
      );
    }

    const { amount, description } = await req.json();

    // Validate amount
    if (!amount || isNaN(parseFloat(amount))) {
      return NextResponse.json(
        { error: 'Invalid amount provided' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.commerce.coinbase.com/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': process.env.COINBASE_COMMERCE_API_KEY as string,
        'X-CC-Version': '2018-03-22'
      } as HeadersInit,
      body: JSON.stringify({
        name: 'Development Services',
        description: description || 'Freelance Service',
        pricing_type: 'fixed_price',
        local_price: {
          amount: amount.toString(),
          currency: 'USD'
        },
        redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/return`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment`,
        metadata: {
          customer_description: description || 'Freelance Service'
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create charge');
    }

    const data = await response.json();
    
    return NextResponse.json({
      hostedUrl: data.data.hosted_url,
      id: data.data.id,
      code: data.data.code
    });

  } catch (error) {
    console.error('Coinbase charge error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error creating charge' },
      { status: 500 }
    );
  }
} 