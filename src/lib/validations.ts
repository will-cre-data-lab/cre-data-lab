import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  productType: z.enum(["course", "tool"]),
  productSlug: z.string().min(1, "Product slug is required"),
  source: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Export TypeScript types inferred from schemas
export type WaitlistFormData = z.infer<typeof waitlistSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;