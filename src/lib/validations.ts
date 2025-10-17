import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
