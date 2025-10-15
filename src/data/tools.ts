import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "1",
    slug: "demographics-analyzer",
    title: "Demographics Analyzer",
    description: "Analyze population demographics and economic indicators for any location",
    longDescription: "Get comprehensive demographic and economic analysis for any location to make informed investment decisions. This tool aggregates data from multiple sources including Census data, economic indicators, and local market trends to provide actionable insights for commercial real estate professionals.",
    pricing: "$49/month",
    icon: "BarChart3",
    comingSoon: true,
    features: [
      "Population growth analysis",
      "Income and employment data",
      "Age and education demographics",
      "Economic trend forecasting",
      "Competitive market analysis",
      "Custom report generation",
      "Geographic heat maps",
      "Data export capabilities"
    ],
    screenshots: [
      "/images/tools/demographics-dashboard.jpg",
      "/images/tools/demographics-reports.jpg"
    ]
  },
  {
    id: "2",
    slug: "deal-screener",
    title: "Deal Screener",
    description: "Automatically screen and rank investment opportunities",
    longDescription: "Streamline your deal evaluation process with automated screening and ranking of investment opportunities. Input your criteria and let our algorithm analyze hundreds of properties to identify the most promising deals based on your specific investment strategy.",
    pricing: "$79/month",
    icon: "Search",
    comingSoon: true,
    features: [
      "Automated deal sourcing",
      "Custom screening criteria",
      "ROI and cash flow calculations",
      "Risk assessment scoring",
      "Market comparison analysis",
      "Deal pipeline management",
      "Alert notifications",
      "Integration with MLS systems"
    ],
    screenshots: [
      "/images/tools/deal-screener-dashboard.jpg",
      "/images/tools/deal-screener-results.jpg"
    ]
  },
  {
    id: "3",
    slug: "comp-analyzer",
    title: "Comp Analyzer",
    description: "Advanced comparable sales analysis with AI-powered insights",
    longDescription: "Leverage AI-powered comparable sales analysis to get more accurate property valuations. Our advanced algorithm considers multiple factors including location, property characteristics, market conditions, and timing to provide the most reliable comps for your valuations.",
    pricing: "$59/month",
    icon: "TrendingUp",
    comingSoon: true,
    features: [
      "AI-powered comp selection",
      "Advanced property matching",
      "Market condition adjustments",
      "Visual property comparisons",
      "Valuation confidence scoring",
      "Historical trend analysis",
      "Professional appraisal reports",
      "API access for integrations"
    ],
    screenshots: [
      "/images/tools/comp-analyzer-interface.jpg",
      "/images/tools/comp-analyzer-reports.jpg"
    ]
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}