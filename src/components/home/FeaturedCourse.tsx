import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const FeaturedCourse: React.FC = () => {
  const course = getCourseBySlug("find-better-deals");

  if (!course) {
    return null;
  }

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Course Image */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          {/* Course Content */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-2 text-gray-900 mb-4">
                {course.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {course.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What You&apos;ll Get:
              </h3>
              <ul className="space-y-3">
                {course.features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and CTA */}
            <div className="pt-4">
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(course.price)}
                </span>
                <span className="text-gray-600 ml-2">
                  • {course.duration} • {course.level}
                </span>
              </div>

              <Link href={course.teachableUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Enroll Now - {formatPrice(course.price)}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturedCourse };