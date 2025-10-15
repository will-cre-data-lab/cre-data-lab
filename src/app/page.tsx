import type { Metadata } from "next";
import {
  Hero,
  FeaturedCourse,
  ProductGrid,
  AboutPreview,
  CTASection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "CRE Data Lab - Data-Driven Tools for Commercial Real Estate",
  description: "Professional training and tools for commercial real estate professionals. Learn Python, data analysis, and automation to find better deals and make smarter investments.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCourse />
      <ProductGrid />
      <AboutPreview />
      <CTASection />
    </>
  );
}
