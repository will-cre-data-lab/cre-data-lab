import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, Search, TrendingUp, Check, Image as ImageIcon } from "lucide-react";
import { getToolBySlug, tools } from "@/data/tools";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

interface ToolDetailPageProps {
  params: {
    slug: string;
  };
}

const iconMap = {
  BarChart3,
  Search,
  TrendingUp,
};

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | CRE Data Lab",
    };
  }

  return {
    title: `${tool.title} | CRE Data Lab`,
    description: tool.longDescription,
    openGraph: {
      title: `${tool.title} | CRE Data Lab`,
      description: tool.longDescription,
    },
  };
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-16 w-16" /> : <BarChart3 className="h-16 w-16" />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tool Icon */}
            <div className="flex items-center justify-center w-24 h-24 bg-brand-100 rounded-lg mx-auto mb-6">
              <div className="text-brand-600">
                {getIcon(tool.icon)}
              </div>
            </div>

            {/* Coming Soon Banner */}
            <div className="mb-6">
              <Badge variant="comingSoon" className="text-lg px-4 py-2">
                Coming Soon
              </Badge>
            </div>

            <h1 className="heading-1 text-gray-900 mb-4">
              {tool.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {tool.longDescription}
            </p>

            <div className="text-2xl font-bold text-brand-600">
              {tool.pricing}
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              What It Does
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-gray-900 mb-8">
              Pricing
            </h2>
            <Card className="p-8 max-w-md mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <div className="text-4xl font-bold text-brand-600 mb-4">
                  {tool.pricing}
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for CRE professionals who want to {tool.title.toLowerCase().includes('analyzer') ? 'analyze' : tool.title.toLowerCase().includes('screener') ? 'screen' : 'optimize'} their workflow
                </p>
                <div className="text-sm text-gray-500 space-y-1">
                  <div>✅ Unlimited usage</div>
                  <div>✅ Regular updates</div>
                  <div>✅ Email support</div>
                  <div>✅ 30-day free trial</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Commercial Brokers",
                  description: "Quickly analyze markets and properties to provide better service to clients and close more deals."
                },
                {
                  title: "Real Estate Investors",
                  description: "Screen opportunities faster and make data-driven investment decisions with confidence."
                },
                {
                  title: "Property Managers",
                  description: "Optimize operations and identify opportunities to increase property values and NOI."
                }
              ].map((useCase, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Screenshots & Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((index) => (
                <Card key={index} className="p-8">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">
                        Coming Soon
                      </p>
                      <p className="text-sm text-gray-400">
                        Screenshots will be available when the tool launches
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-2 text-gray-900 mb-4">
                Be the First to Know
              </h2>
              <p className="text-xl text-gray-600">
                Join the waitlist to get early access and special launch pricing for {tool.title}.
              </p>
            </div>

            <Card className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Join the {tool.title} Waitlist
                </h3>
                <p className="text-gray-600">
                  Get notified when we launch and receive exclusive early-bird pricing.
                </p>
              </div>

              <WaitlistForm
                productType="tool"
                productSlug={tool.slug}
                source="tool-detail-page"
              />

              <div className="mt-6 text-center">
                <div className="text-sm text-gray-500 space-y-1">
                  <div>✅ Early access notification</div>
                  <div>✅ Special launch pricing</div>
                  <div>✅ Free setup consultation</div>
                  <div>✅ No spam, unsubscribe anytime</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "When will this tool be available?",
                  answer: "We're actively developing this tool and expect to launch in early 2025. Join the waitlist to be notified of our exact launch date."
                },
                {
                  question: "Will there be a free trial?",
                  answer: "Yes! We'll offer a 30-day free trial so you can test the tool with your own data before committing."
                },
                {
                  question: "What kind of support will be available?",
                  answer: "All subscribers get email support, access to training materials, and live onboarding sessions to help you get the most from the tool."
                },
                {
                  question: "Can I integrate this with other tools?",
                  answer: "Yes, we're building APIs and integrations with popular CRE software platforms. Let us know what integrations you need!"
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
    </div>
  );
}