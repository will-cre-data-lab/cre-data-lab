import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { waitlistSchema } from "@/lib/validations";
import { sendWaitlistConfirmation } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = waitlistSchema.parse(body);

    // Check for existing signup with same email and product
    const existingSignup = await prisma.waitlistSignup.findUnique({
      where: {
        email_productSlug: {
          email: validatedData.email,
          productSlug: validatedData.productSlug,
        },
      },
    });

    if (existingSignup) {
      return NextResponse.json(
        {
          error: "You're already on the waitlist for this product",
          details: "duplicate_signup"
        },
        { status: 409 }
      );
    }

    // Create new waitlist signup
    await prisma.waitlistSignup.create({
      data: {
        email: validatedData.email,
        productType: validatedData.productType,
        productSlug: validatedData.productSlug,
        source: validatedData.source,
      },
    });

    // Send confirmation email
    try {
      const productName = validatedData.productType === "course"
        ? `the ${validatedData.productSlug.replace(/-/g, " ")} course`
        : `the ${validatedData.productSlug.replace(/-/g, " ")} tool`;

      await sendWaitlistConfirmation(validatedData.email, productName);
    } catch (emailError) {
      console.error("Failed to send waitlist confirmation email:", emailError);
      // Don't fail the API call if email fails
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Waitlist API error:", error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Invalid form data",
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
            error: "You're already on the waitlist for this product",
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