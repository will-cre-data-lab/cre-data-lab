import React from "react";
import Link from "next/link";
import { BarChart3, Search, TrendingUp } from "lucide-react";
import { Tool } from "@/types/tool";
import { truncate } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ToolCardProps {
  tool: Tool;
}

const iconMap = {
  BarChart3,
  Search,
  TrendingUp,
};

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <BarChart3 className="h-8 w-8" />;
  };

  return (
    <Card hoverable className="h-full">
      <div className="flex flex-col h-full">
        {/* Tool Icon and Header */}
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-brand-100 rounded-lg mr-4">
            <div className="text-brand-600">
              {getIcon(tool.icon)}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tool.title}
              </h3>
              <Badge variant="comingSoon">Coming Soon</Badge>
            </div>
            <p className="text-brand-600 font-medium">
              {tool.pricing}
            </p>
          </div>
        </div>

        {/* Tool Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-gray-600 mb-4">
              {truncate(tool.description, 120)}
            </p>

            {/* Features (first 3) */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Key features:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {tool.features.slice(0, 3).map((feature, index) => (
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
            <Link href={`/tools/${tool.slug}`}>
              <Button variant="outline" className="w-full">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { ToolCard };