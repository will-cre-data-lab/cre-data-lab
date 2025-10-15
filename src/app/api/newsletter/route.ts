import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { newsletterSchema } from "@/lib/validations";
import { sendNewsletterWelcome } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // Check if email already exists
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: {
        email: validatedData.email,
      },
    });

    if (existingSubscriber) {
      // If already active, return conflict
      if (existingSubscriber.status === "active") {
        return NextResponse.json(
          {
            error: "You're already subscribed to our newsletter",
            details: "already_subscribed"
          },
          { status: 409 }
        );
      }

      // If previously unsubscribed, reactivate
      if (existingSubscriber.status === "unsubscribed") {
        await prisma.newsletterSubscriber.update({
          where: {
            email: validatedData.email,
          },
          data: {
            status: "active",
            updatedAt: new Date(),
          },
        });

        // Send welcome email for reactivation
        try {
          await sendNewsletterWelcome(validatedData.email);
        } catch (emailError) {
          console.error("Failed to send newsletter welcome email:", emailError);
          // Don't fail the API call if email fails
        }

        return NextResponse.json({ success: true });
      }
    }

    // Create new subscriber
    await prisma.newsletterSubscriber.create({
      data: {
        email: validatedData.email,
        status: "active",
        source: "website",
      },
    });

    // Send welcome email
    try {
      await sendNewsletterWelcome(validatedData.email);
    } catch (emailError) {
      console.error("Failed to send newsletter welcome email:", emailError);
      // Don't fail the API call if email fails
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Newsletter API error:", error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address",
          details: error.issues
        },
        { status: 400 }
      );
    }

    // Handle Prisma unique constraint errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            error: "You're already subscribed to our newsletter",
            details: "unique_constraint"
          },
          { status: 409 }
        );
      }
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
        details: "internal_error"
      },
      { status: 500 }
    );
  }
}