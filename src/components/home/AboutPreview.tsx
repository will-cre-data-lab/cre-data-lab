import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const AboutPreview: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            About CRE Data Lab
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/about/founder-photo.jpg"
                alt="CRE Data Lab Founder"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Built by a commercial real estate broker, appraiser, engineer, and data scientist</strong>
                who understands the unique challenges facing CRE professionals in today&apos;s data-driven market.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                After years of manually analyzing deals and watching competitors gain advantages through
                technology, I realized that most CRE professionals lack the technical skills to leverage
                the massive amounts of data available to them. That&apos;s when CRE Data Lab was born.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: <em>democratize data science for commercial real estate.</em> We believe
                every broker, investor, and developer should have access to the same analytical tools
                that the largest firms use to identify opportunities and make better decisions.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg">
                  Learn More About Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutPreview };