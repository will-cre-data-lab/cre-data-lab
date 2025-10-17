import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-display text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join professionals using data to make better decisions in commercial real estate
        </p>
        <Link href="/courses">
          <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-neutral-50">
            Explore Courses
          </Button>
        </Link>
      </div>
    </section>
  );
}
