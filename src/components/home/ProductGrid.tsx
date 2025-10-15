import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Search,
  TrendingUp,
  BookOpen,
  ExternalLink
} from "lucide-react";
import { getFeaturedCourses } from "@/data/courses";
import { tools } from "@/data/tools";
import { formatPrice } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const iconMap = {
  BarChart3,
  Search,
  TrendingUp,
};

const ProductGrid: React.FC = () => {
  const featuredCourses = getFeaturedCourses();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <BookOpen className="h-8 w-8" />;
  };

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training and powerful tools to transform your commercial real estate business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Courses Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-brand-600" />
              Courses
            </h3>
            <div className="space-y-6">
              {featuredCourses.slice(0, 2).map((course) => (
                <Card key={course.id} hoverable className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        width={400}
                        height={225}
                        className="object-cover w-full h-full"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {course.title}
                        </h4>
                        {course.featured && (
                          <Badge variant="featured">Featured</Badge>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4">
                        {course.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(course.price)}
                        </span>
                        <Link href={`/courses/${course.slug}`}>
                          <Button variant="outline">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* View All Courses */}
              <div className="text-center pt-4">
                <Link href="/courses">
                  <Button variant="ghost" className="flex items-center">
                    View All Courses
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-brand-600" />
              Tools
            </h3>
            <div className="space-y-6">
              {tools.slice(0, 3).map((tool) => (
                <Card key={tool.id} hoverable className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg mr-4">
                        <div className="text-brand-600">
                          {getIcon(tool.icon)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-semibold text-gray-900">
                            {tool.title}
                          </h4>
                          <Badge variant="comingSoon">Coming Soon</Badge>
                        </div>
                        <p className="text-brand-600 font-medium">
                          {tool.pricing}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 flex-1">
                      {tool.description}
                    </p>

                    <Link href={`/tools/${tool.slug}`}>
                      <Button variant="outline" className="w-full">
                        Join Waitlist
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}

              {/* View All Tools */}
              <div className="text-center pt-4">
                <Link href="/tools">
                  <Button variant="ghost" className="flex items-center">
                    View All Tools
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductGrid };