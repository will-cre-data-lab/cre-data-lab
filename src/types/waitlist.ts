export interface WaitlistSignup {
  id: string;
  email: string;
  productType: string;
  productSlug: string;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}