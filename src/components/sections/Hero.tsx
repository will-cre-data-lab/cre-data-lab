import Link from 'next/link';
import Button from '@/components/ui/Button';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-accent-purple/20">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-hero text-neutral-900 leading-tight">
              Learn CRE Data Analysis
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-xl">
              Unlock the potential of commercial real estate data with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg">View Courses</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Illustration/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl p-12 shadow-2xl">
              <div className="flex flex-col items-center justify-center space-y-8">
                <BarChart3 className="w-32 h-32 text-white opacity-90" />
                <TrendingUp className="w-24 h-24 text-white opacity-80" />
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full">
                  <p className="text-white text-center font-semibold">
                    Master CRE Data Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
