import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
      <div className="container-custom text-center">
        <h1 className="heading-1 text-white mb-6">
          Welcome to CRE Data Lab
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
          Data-driven tools and training for commercial real estate professionals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
              Explore Courses
            </Button>
          </Link>
          <Link href="/tools">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-700"
            >
              View Tools
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Hero };