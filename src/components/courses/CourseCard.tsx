import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";
import { formatPrice, truncate } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card hoverable className="h-full">
      <div className="flex flex-col h-full">
        {/* Course Thumbnail */}
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {course.featured && (
              <Badge variant="featured">Featured</Badge>
            )}
            {course.comingSoon && (
              <Badge variant="comingSoon">Coming Soon</Badge>
            )}
          </div>
        </div>

        {/* Course Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {truncate(course.description, 150)}
            </p>

            {/* Course Details */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>{course.duration}</span>
              <span>•</span>
              <span className="capitalize">{course.level}</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(course.price)}
              </span>
            </div>

            {/* Features (first 3) */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                What&apos;s included:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {course.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto">
            {course.comingSoon ? (
              <Button
                disabled
                className="w-full opacity-50 cursor-not-allowed"
              >
                Coming Soon
              </Button>
            ) : (
              <Link href={`/courses/${course.slug}`}>
                <Button className="w-full">
                  Learn More
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CourseCard };