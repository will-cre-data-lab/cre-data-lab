import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { prisma } from '@/lib/db';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Save to database
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    });

    // Send emails
    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
