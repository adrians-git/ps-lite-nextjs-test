import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const campaignId = searchParams.get('campaignId') || 'unknown';

  // Log the checkout attempt
  console.log('=== CHECKOUT INITIATED ===');
  console.log('Campaign ID:', campaignId);
  console.log('Timestamp:', new Date().toISOString());
  console.log('Price: $97 (flash pricing)');
  console.log('========================');

  // For now, simulate Stripe checkout by redirecting to the welcome page
  // In production, this would create a Stripe checkout session and redirect there

  // Simulate a brief delay (like Stripe would have)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Redirect to campaign welcome page (existing flow)
  return NextResponse.redirect(
    new URL(`/campaign-welcome/${campaignId}`, request.url)
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { campaignId, priceId, amount } = body;

    console.log('=== CHECKOUT POST REQUEST ===');
    console.log('Campaign ID:', campaignId);
    console.log('Price ID:', priceId);
    console.log('Amount:', amount);
    console.log('Timestamp:', new Date().toISOString());
    console.log('============================');

    // In production, this would:
    // 1. Create a Stripe checkout session
    // 2. Return the session URL
    // 3. Frontend redirects to Stripe

    return NextResponse.json({
      success: true,
      checkoutUrl: `/campaign-welcome/${campaignId}`,
      message: 'Checkout session created (simulated)',
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
