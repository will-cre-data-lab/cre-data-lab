import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact | CRE Data Lab",
  description: "Get in touch with CRE Data Lab. We respond to all inquiries within 24-48 hours. Have questions about our courses, tools, or how data can transform your CRE business?",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="heading-1 text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or tools? Want to discuss how data can
            transform your CRE business? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help with any questions about our courses, tools,
                or how to get started with data-driven CRE analysis.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Send us a message and we&apos;ll get back to you quickly.
                    </p>
                    <a
                      href="mailto:hello@credatalab.com"
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      hello@credatalab.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Response Time
                    </h3>
                    <p className="text-gray-600">
                      We respond to all inquiries within 24-48 hours.
                      For urgent questions, please mention it in your message.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Connect on LinkedIn
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Follow us for industry insights and updates.
                    </p>
                    <a
                      href="https://linkedin.com/company/credatalab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      linkedin.com/company/credatalab
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* What to Expect */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                What to Expect
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Personal response from our team
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Detailed answers to your questions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Recommendations tailored to your needs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Follow-up resources if helpful
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Do you offer custom training?",
                answer: "Yes! We offer custom training programs for teams and organizations. Contact us to discuss your specific needs."
              },
              {
                question: "Can you help with data strategy?",
                answer: "Absolutely. We provide consulting services to help CRE firms develop and implement data strategies."
              },
              {
                question: "Do you work with students?",
                answer: "We offer educational discounts for students and academic institutions. Reach out for special pricing."
              },
              {
                question: "What about partnerships?",
                answer: "We're always interested in partnerships with complementary businesses. Let's discuss opportunities."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}