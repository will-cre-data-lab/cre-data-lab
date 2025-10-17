import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';
import { prisma } from '@/lib/db';
import { sendNewsletterWelcome } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Create subscriber
    await prisma.newsletterSubscriber.create({
      data: { email: data.email },
    });

    // Send welcome email
    await sendNewsletterWelcome(data.email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
