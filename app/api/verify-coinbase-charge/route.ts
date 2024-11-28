import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'No charge ID provided' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.commerce.coinbase.com/charges/${id}`, {
      headers: {
        'X-CC-Api-Key': process.env.COINBASE_COMMERCE_API_KEY!,
        'X-CC-Version': '2018-03-22'
      }
    });

    if (!response.ok) {
      throw new Error(`Coinbase API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({
      status: data.data.timeline[data.data.timeline.length - 1].status
    });
  } catch (error) {
    console.error('Error verifying charge:', error);
    return NextResponse.json({ error: 'Error verifying charge' }, { status: 500 });
  }
} 