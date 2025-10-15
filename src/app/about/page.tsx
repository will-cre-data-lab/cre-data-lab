import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { User, Target, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About | CRE Data Lab",
  description: "Learn about CRE Data Lab's mission to democratize data science for commercial real estate professionals. Founded by an industry expert with deep experience in brokerage, appraisal, engineering, and data science.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden max-w-md mx-auto">
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

            {/* Introduction */}
            <div className="space-y-6">
              <h1 className="heading-1 text-gray-900">
                About CRE Data Lab
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bridging the gap between commercial real estate expertise and data science
                to help professionals make better, faster decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                CRE Data Lab was born from a simple observation: the commercial real estate
                industry was drowning in data but starving for insights. Despite having access
                to more market information than ever before, most professionals were still
                making decisions based on gut feelings and limited analysis.
              </p>

              <p>
                The problem wasn&apos;t a lack of data—it was a lack of technical skills to
                properly analyze and leverage that data. While the largest institutional
                firms had teams of data scientists building sophisticated models, the majority
                of CRE professionals were left behind, unable to compete on analytical capabilities.
              </p>

              <p>
                That&apos;s when we realized something needed to change. The tools and techniques
                used by the biggest players shouldn&apos;t be exclusive to firms with massive
                technology budgets. Every broker, investor, and developer should have access
                to the same analytical power that drives better decision-making.
              </p>

              <p>
                CRE Data Lab was founded to democratize data science for commercial real estate,
                making advanced analytical techniques accessible to professionals at any level.
                Our mission is simple: teach CRE professionals how to use data effectively
                and provide them with the tools they need to find better deals and make
                smarter investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              About the Founder
            </h2>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <User className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Built by a CRE Professional, for CRE Professionals
                  </h3>
                  <p className="text-gray-700">
                    <strong>Commercial Real Estate Broker, Appraiser, Engineer, and Data Scientist</strong>
                    with over 15 years of hands-on experience in the industry.
                  </p>
                  <p className="text-gray-700">
                    Having worked as both a practitioner and a technologist, I understand the
                    unique challenges facing CRE professionals. I&apos;ve closed hundreds of
                    millions in transactions, appraised complex commercial properties, and
                    built data systems for some of the largest real estate firms in the country.
                  </p>
                  <p className="text-gray-700">
                    My passion for teaching comes from seeing firsthand how the right analytical
                    tools can transform a career. I&apos;ve helped hundreds of professionals
                    leverage data to find opportunities others miss, negotiate better deals,
                    and build more successful businesses.
                  </p>
                </div>
              </div>
            </Card>

            {/* Credentials & Background */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: User,
                  title: "Licensed Broker",
                  description: "Active commercial real estate license with transaction experience"
                },
                {
                  icon: Target,
                  title: "Certified Appraiser",
                  description: "Commercial appraisal certification with complex property experience"
                },
                {
                  icon: Lightbulb,
                  title: "Professional Engineer",
                  description: "Engineering background in systems design and analysis"
                },
                {
                  icon: Users,
                  title: "Data Scientist",
                  description: "Advanced degrees in data science and machine learning"
                }
              ].map((credential, index) => (
                <Card key={index} className="p-6 text-center">
                  <credential.icon className="h-8 w-8 text-brand-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {credential.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {credential.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize data science for commercial real estate by making advanced
                  analytical techniques accessible to professionals at every level. We believe
                  every CRE professional should have the tools and knowledge to make
                  data-driven decisions.
                </p>
              </Card>

              {/* Vision */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A commercial real estate industry where every professional—regardless of
                  firm size or technical background—can leverage the power of data to find
                  better deals, serve clients more effectively, and build more successful
                  businesses.
                </p>
              </Card>
            </div>

            {/* Values */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Practical First",
                    description: "Every course and tool is designed for real-world application, not academic theory."
                  },
                  {
                    title: "Industry Focused",
                    description: "Built specifically for CRE professionals, using industry data and examples."
                  },
                  {
                    title: "Accessible Learning",
                    description: "No coding experience required—we start from the basics and build up your skills."
                  }
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have questions about our courses,
            tools, or just want to discuss how data can transform your CRE business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}