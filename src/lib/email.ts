import { Resend } from 'resend';

// Lazy initialization - only create client when actually needed
let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const client = getResendClient();

    // Send notification to admin
    await client.emails.send({
      from: 'CRE Data Lab <noreply@credatalab.com>',
      to: 'info@credatalab.com',
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    // Send confirmation to sender
    await client.emails.send({
      from: 'CRE Data Lab <noreply@credatalab.com>',
      to: data.email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will get back to you within 24-48 hours.</p>
        <p>Best regards,<br/>The CRE Data Lab Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw error;
  }
}

export async function sendNewsletterWelcome(email: string) {
  try {
    const client = getResendClient();

    await client.emails.send({
      from: 'CRE Data Lab <noreply@credatalab.com>',
      to: email,
      subject: 'Welcome to CRE Data Lab',
      html: `
        <h2>Welcome to CRE Data Lab!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive updates about new courses, tools, and insights on CRE data analysis.</p>
        <p>Best regards,<br/>The CRE Data Lab Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send newsletter welcome email:', error);
    throw error;
  }
}
