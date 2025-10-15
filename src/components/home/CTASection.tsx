import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const CTASection: React.FC = () => {
  return (
    <section className="section bg-brand-600 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-2 text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join 1,000+ CRE professionals using data to find better deals
        </p>
        <Link href="/courses">
          <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
            Explore Courses
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { CTASection };