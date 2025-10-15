import type { Metadata } from "next";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tools/ToolCard";

export const metadata: Metadata = {
  title: "Tools | CRE Data Lab",
  description: "Powerful data-driven tools for commercial real estate professionals. Automate analysis, screen deals, and make smarter investment decisions with our suite of CRE tools.",
};

export default function ToolsPage() {
  return (
    <div className="section">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="heading-1 text-gray-900 mb-4">
            Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, data-driven tools designed specifically for commercial real estate professionals.
            Automate your analysis, screen deals faster, and make smarter investment decisions.
          </p>

          {/* Coming Soon Notice */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">
              🚀 Coming Soon!
            </h2>
            <p className="text-yellow-700">
              Our tools are currently in development. Join the waitlist to be notified
              when they launch and get early access with special pricing.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Want to be first in line?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our waitlist to get early access to these powerful tools, plus special launch
            pricing and exclusive training materials.
          </p>
          <div className="text-sm text-gray-500">
            ✅ Early access &nbsp;&nbsp; ✅ Launch discounts &nbsp;&nbsp; ✅ Free training
          </div>
        </div>
      </div>
    </div>
  );
}