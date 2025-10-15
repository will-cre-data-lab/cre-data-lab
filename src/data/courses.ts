import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    slug: "find-better-deals",
    title: "Find Better Deals",
    description: "Learn Python and data analysis for commercial real estate",
    longDescription: "Master the fundamentals of Python programming and data analysis specifically tailored for commercial real estate professionals. This comprehensive course will teach you how to automate repetitive tasks, analyze market data, and build tools that give you a competitive edge in finding better deals.",
    price: 997,
    duration: "10 weeks",
    level: "beginner",
    thumbnail: "/images/courses/find-better-deals.jpg",
    featured: true,
    comingSoon: false,
    teachableUrl: process.env.NEXT_PUBLIC_COURSE_URL || "#",
    features: [
      "No coding experience required",
      "Live cohort format",
      "Build 10 working tools",
      "Lifetime access",
      "30-day guarantee"
    ],
    curriculum: [
      {
        id: "m1",
        title: "Python Fundamentals for CRE",
        description: "Learn the basics of Python programming with real estate examples",
        lessons: [
          { id: "l1", title: "Setting up your development environment", duration: "45 min" },
          { id: "l2", title: "Variables and data types", duration: "60 min" },
          { id: "l3", title: "Working with real estate data", duration: "75 min" }
        ]
      },
      {
        id: "m2",
        title: "Data Collection and APIs",
        description: "Gather market data from various sources",
        lessons: [
          { id: "l4", title: "Web scraping basics", duration: "90 min" },
          { id: "l5", title: "Working with real estate APIs", duration: "80 min" }
        ]
      },
      {
        id: "m3",
        title: "Market Analysis Tools",
        description: "Build tools to analyze market trends",
        lessons: [
          { id: "l6", title: "Comparable sales analysis", duration: "100 min" },
          { id: "l7", title: "Market trend visualization", duration: "85 min" }
        ]
      },
      {
        id: "m4",
        title: "Deal Screening Automation",
        description: "Automate the process of evaluating potential deals",
        lessons: [
          { id: "l8", title: "Cash flow calculations", duration: "95 min" },
          { id: "l9", title: "Risk assessment tools", duration: "75 min" }
        ]
      },
      {
        id: "m5",
        title: "Demographics and Location Analysis",
        description: "Analyze location factors that impact property values",
        lessons: [
          { id: "l10", title: "Census data analysis", duration: "80 min" },
          { id: "l11", title: "Walkability and amenity scoring", duration: "70 min" }
        ]
      },
      {
        id: "m6",
        title: "Financial Modeling",
        description: "Create sophisticated financial models",
        lessons: [
          { id: "l12", title: "DCF models in Python", duration: "110 min" },
          { id: "l13", title: "Sensitivity analysis", duration: "65 min" }
        ]
      },
      {
        id: "m7",
        title: "Portfolio Management Tools",
        description: "Track and optimize your real estate portfolio",
        lessons: [
          { id: "l14", title: "Portfolio tracking dashboard", duration: "90 min" },
          { id: "l15", title: "Performance metrics", duration: "55 min" }
        ]
      },
      {
        id: "m8",
        title: "Reporting and Visualization",
        description: "Create professional reports and presentations",
        lessons: [
          { id: "l16", title: "Automated report generation", duration: "85 min" },
          { id: "l17", title: "Interactive dashboards", duration: "95 min" }
        ]
      },
      {
        id: "m9",
        title: "Advanced Automation",
        description: "Set up automated workflows and alerts",
        lessons: [
          { id: "l18", title: "Email alerts and notifications", duration: "70 min" },
          { id: "l19", title: "Scheduled data updates", duration: "60 min" }
        ]
      },
      {
        id: "m10",
        title: "Capstone Project",
        description: "Build your own comprehensive analysis tool",
        lessons: [
          { id: "l20", title: "Project planning and setup", duration: "45 min" },
          { id: "l21", title: "Implementation and testing", duration: "120 min" },
          { id: "l22", title: "Presentation and peer review", duration: "90 min" }
        ]
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Sarah Johnson",
        role: "Commercial Broker",
        content: "This course completely transformed how I analyze deals. I'm finding opportunities my competitors miss and closing more profitable transactions."
      },
      {
        id: "t2",
        name: "Mike Chen",
        role: "Real Estate Investor",
        content: "The automation tools I learned to build save me 10+ hours per week. The ROI on this course was immediate."
      }
    ]
  },
  {
    id: "2",
    slug: "advanced-cre-analytics",
    title: "Advanced CRE Analytics",
    description: "Machine learning and predictive modeling for commercial real estate",
    longDescription: "Take your CRE analysis to the next level with advanced machine learning techniques and predictive modeling. Learn to forecast market trends, predict property values, and identify emerging opportunities using cutting-edge data science methods.",
    price: 1497,
    duration: "12 weeks",
    level: "advanced",
    thumbnail: "/images/courses/advanced-analytics.jpg",
    featured: false,
    comingSoon: true,
    teachableUrl: process.env.NEXT_PUBLIC_COURSE_URL || "#",
    features: [
      "Machine learning fundamentals",
      "Predictive modeling techniques",
      "Advanced data visualization",
      "Real estate specific algorithms",
      "Case studies and projects"
    ],
    curriculum: [
      {
        id: "am1",
        title: "Introduction to Machine Learning in CRE",
        description: "Overview of ML applications in commercial real estate",
        lessons: [
          { id: "al1", title: "ML fundamentals for real estate", duration: "60 min" },
          { id: "al2", title: "Data preparation and cleaning", duration: "90 min" }
        ]
      }
    ],
    testimonials: []
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured);
}