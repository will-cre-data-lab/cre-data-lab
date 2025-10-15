import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");
const fromEmail = process.env.RESEND_FROM_EMAIL || "hello@credatalab.com";

export async function sendWaitlistConfirmation(email: string, productName: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `You're on the waitlist for ${productName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Waitlist Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">CRE Data Lab</h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e40af; margin-top: 0;">You're on the waitlist!</h2>

            <p>Thanks for joining the waitlist for <strong>${productName}</strong>. You'll be among the first to know when it's ready.</p>

            <h3 style="color: #1e40af;">What to expect:</h3>
            <ul style="padding-left: 20px;">
              <li>Early access notification when we launch</li>
              <li>Special launch pricing and discounts</li>
              <li>Exclusive training materials and resources</li>
              <li>No spam - we'll only email you about this product</li>
            </ul>

            <p>In the meantime, check out our other courses and tools at <a href="https://credatalab.com" style="color: #2563eb;">credatalab.com</a>.</p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p>Best regards,<br>The CRE Data Lab Team</p>
              <p style="margin-top: 20px;">
                <a href="https://credatalab.com" style="color: #2563eb;">credatalab.com</a> |
                <a href="mailto:hello@credatalab.com" style="color: #2563eb;">hello@credatalab.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error (waitlist confirmation):", error);
      throw error;
    }

    console.log("Waitlist confirmation email sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send waitlist confirmation email:", error);
    throw error;
  }
}

export async function sendContactNotification(name: string, email: string, message: string, subject?: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["hello@credatalab.com"],
      subject: `New contact form submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1e40af; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px;">
              <strong>Name:</strong> ${name}
            </div>

            <div style="margin-bottom: 20px;">
              <strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </div>

            ${subject ? `
            <div style="margin-bottom: 20px;">
              <strong>Subject:</strong> ${subject}
            </div>
            ` : ''}

            <div style="margin-bottom: 20px;">
              <strong>Message:</strong>
            </div>

            <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>

            <div style="margin-top: 20px; text-align: center;">
              <a href="mailto:${email}?subject=Re: ${subject || 'Your message to CRE Data Lab'}"
                 style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error (contact notification):", error);
      throw error;
    }

    console.log("Contact notification email sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
    throw error;
  }
}

export async function sendContactConfirmation(email: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We received your message",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message Received</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">CRE Data Lab</h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e40af; margin-top: 0;">Thanks for reaching out, ${name}!</h2>

            <p>We've received your message and appreciate you taking the time to contact us.</p>

            <div style="background: #dcfdf7; border: 1px solid #10b981; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #065f46;"><strong>⏱️ Response Time:</strong> We'll get back to you within 24-48 hours</p>
            </div>

            <p>In the meantime, feel free to:</p>
            <ul style="padding-left: 20px;">
              <li>Explore our <a href="https://credatalab.com/courses" style="color: #2563eb;">courses</a> and <a href="https://credatalab.com/tools" style="color: #2563eb;">tools</a></li>
              <li>Learn more <a href="https://credatalab.com/about" style="color: #2563eb;">about our mission</a></li>
              <li>Follow us on <a href="https://linkedin.com/company/credatalab" style="color: #2563eb;">LinkedIn</a> for industry insights</li>
            </ul>

            <p>If you have an urgent question, please mention it in a follow-up email and we'll prioritize our response.</p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p>Best regards,<br>The CRE Data Lab Team</p>
              <p style="margin-top: 20px;">
                <a href="https://credatalab.com" style="color: #2563eb;">credatalab.com</a> |
                <a href="mailto:hello@credatalab.com" style="color: #2563eb;">hello@credatalab.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error (contact confirmation):", error);
      throw error;
    }

    console.log("Contact confirmation email sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send contact confirmation email:", error);
    throw error;
  }
}

export async function sendNewsletterWelcome(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Welcome to CRE Data Lab",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to CRE Data Lab</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to CRE Data Lab!</h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e40af; margin-top: 0;">Thanks for subscribing!</h2>

            <p>You've successfully joined our newsletter and you're now part of a growing community of data-driven CRE professionals.</p>

            <h3 style="color: #1e40af;">What you can expect:</h3>
            <ul style="padding-left: 20px;">
              <li><strong>Weekly market insights</strong> - Data trends affecting CRE</li>
              <li><strong>Tool tutorials</strong> - Step-by-step guides and tips</li>
              <li><strong>Course updates</strong> - New content and special offers</li>
              <li><strong>Industry analysis</strong> - How top firms use data</li>
              <li><strong>Exclusive content</strong> - Subscriber-only resources</li>
            </ul>

            <div style="background: #dbeafe; border: 1px solid #2563eb; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; color: #1e40af;"><strong>🎯 Next Steps:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1e40af;">Explore our courses and tools to start your data-driven CRE journey today!</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://credatalab.com/courses"
                 style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 0 10px 10px 0;">
                View Courses
              </a>
              <a href="https://credatalab.com/tools"
                 style="background: #64748b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 0 0 10px 0;">
                View Tools
              </a>
            </div>

            <p style="font-size: 14px; color: #64748b;">
              Don't want to receive these emails? You can <a href="#" style="color: #2563eb;">unsubscribe</a> at any time.
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p>Best regards,<br>The CRE Data Lab Team</p>
              <p style="margin-top: 20px;">
                <a href="https://credatalab.com" style="color: #2563eb;">credatalab.com</a> |
                <a href="mailto:hello@credatalab.com" style="color: #2563eb;">hello@credatalab.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error (newsletter welcome):", error);
      throw error;
    }

    console.log("Newsletter welcome email sent:", data);
    return data;
  } catch (error) {
    console.error("Failed to send newsletter welcome email:", error);
    throw error;
  }
}