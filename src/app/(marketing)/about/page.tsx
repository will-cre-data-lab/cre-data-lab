import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About | CRE Data Lab',
  description: 'Learn about our mission to empower CRE professionals with data analysis skills',
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-display text-neutral-900 mb-8 text-center">
          About CRE Data Lab
        </h1>

        <div className="space-y-8 text-body-lg text-neutral-600">
          <p>
            CRE Data Lab was founded with a simple mission: to empower commercial real estate
            professionals with the data analysis skills they need to make better, more informed
            decisions.
          </p>

          <p>
            In today's market, data is everywhere. But having access to data isn't enough – you
            need to know how to analyze it, visualize it, and extract actionable insights from it.
            That's where we come in.
          </p>

          <h2 className="text-heading-2 text-neutral-900 mt-12 mb-6">
            Our Approach
          </h2>

          <p>
            We believe in hands-on, practical learning. Our courses are designed by industry
            professionals who understand the unique challenges of commercial real estate. Every
            lesson is built around real-world scenarios and data sets you'll actually encounter
            in your work.
          </p>

          <h2 className="text-heading-2 text-neutral-900 mt-12 mb-6">
            Who We Serve
          </h2>

          <p>
            Whether you're a broker looking to find better deals, an investor seeking data-driven
            insights, or a developer analyzing market trends, our courses are designed to meet you
            where you are and take your skills to the next level.
          </p>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
