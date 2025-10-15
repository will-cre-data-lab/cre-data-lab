import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save contact submission to database
    await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    });

    // Send notification email to admin
    try {
      await sendContactNotification(
        validatedData.name,
        validatedData.email,
        validatedData.message,
        validatedData.subject
      );
    } catch (emailError) {
      console.error("Failed to send contact notification email:", emailError);
      // Don't fail the API call if admin notification fails
    }

    // Send confirmation email to sender
    try {
      await sendContactConfirmation(validatedData.email, validatedData.name);
    } catch (emailError) {
      console.error("Failed to send contact confirmation email:", emailError);
      // Don't fail the API call if confirmation fails
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API error:", error);

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