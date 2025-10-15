import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Check, Star, User } from "lucide-react";
import { getCourseBySlug, courses } from "@/data/courses";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | CRE Data Lab",
    };
  }

  return {
    title: `${course.title} | CRE Data Lab`,
    description: course.longDescription,
    openGraph: {
      title: `${course.title} | CRE Data Lab`,
      description: course.longDescription,
      images: [course.thumbnail],
    },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.longDescription,
    "provider": {
      "@type": "Organization",
      "name": "CRE Data Lab",
      "url": "https://credatalab.com"
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "USD",
      "availability": course.comingSoon ? "https://schema.org/PreOrder" : "https://schema.org/InStock"
    },
    "image": course.thumbnail,
    "courseMode": "online",
    "educationalLevel": course.level,
    "timeRequired": course.duration,
    "inLanguage": "en"
  };

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
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
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {course.featured && (
                  <Badge variant="featured">Featured</Badge>
                )}
                {course.comingSoon && (
                  <Badge variant="comingSoon">Coming Soon</Badge>
                )}
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div>
                <h1 className="heading-1 text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {course.longDescription}
                </p>
              </div>

              {/* Course Details */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="font-medium">Duration:</span>
                  <span className="ml-1">{course.duration}</span>
                </span>
                <span className="flex items-center">
                  <span className="font-medium">Level:</span>
                  <span className="ml-1 capitalize">{course.level}</span>
                </span>
              </div>

              {/* Price and CTA */}
              <div className="space-y-4">
                <div>
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(course.price)}
                  </span>
                </div>

                {course.comingSoon ? (
                  <Button size="lg" disabled className="w-full sm:w-auto">
                    Coming Soon
                  </Button>
                ) : (
                  <Link href={course.teachableUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto">
                      Enroll Now - {formatPrice(course.price)}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Course Curriculum
            </h2>
            <div className="space-y-4">
              {course.curriculum.map((module, index) => (
                <Card key={module.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Module {index + 1}: {module.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {module.description}
                      </p>
                      <div className="text-sm text-gray-500">
                        {module.lessons.length} lesson{module.lessons.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {course.testimonials.length > 0 && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-gray-900 mb-8 text-center">
                What Students Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {course.testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Instructor Bio */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Your Instructor
            </h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <User className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Industry Expert
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Your instructor is a commercial real estate broker, appraiser, engineer,
                    and data scientist with over 15 years of experience in the industry.
                    They&apos;ve closed hundreds of millions in transactions and built tools
                    that are used by top CRE firms nationwide.
                  </p>
                  <p className="text-gray-700">
                    Passionate about democratizing data science for commercial real estate,
                    they&apos;ve taught thousands of professionals how to leverage technology
                    to find better deals and make smarter investments.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "Do I need any coding experience?",
                  answer: "No coding experience is required. We start from the very basics and build up your skills step by step."
                },
                {
                  question: "How long do I have access to the course?",
                  answer: "You have lifetime access to all course materials, including any future updates."
                },
                {
                  question: "Is there a money-back guarantee?",
                  answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your investment."
                },
                {
                  question: "Can I get help if I'm stuck?",
                  answer: "Absolutely! You'll have access to our community forum and office hours where you can get help from instructors and fellow students."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Transform Your CRE Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of CRE professionals who have already transformed their
            businesses with data-driven decision making.
          </p>

          {course.comingSoon ? (
            <Button size="lg" disabled className="bg-white text-brand-700 opacity-50">
              Coming Soon
            </Button>
          ) : (
            <Link href={course.teachableUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
                Enroll Now - {formatPrice(course.price)}
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}