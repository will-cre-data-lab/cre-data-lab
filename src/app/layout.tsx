import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://credatalab.com"),
  title: "CRE Data Lab - Data-Driven Tools for Commercial Real Estate",
  description: "Professional training and tools for commercial real estate professionals. Learn Python, data analysis, and automation to find better deals and make smarter investments.",
  keywords: ["commercial real estate", "CRE", "data analysis", "python", "training", "courses", "tools", "real estate technology"],
  authors: [{ name: "CRE Data Lab" }],
  openGraph: {
    title: "CRE Data Lab - Data-Driven Tools for Commercial Real Estate",
    description: "Professional training and tools for commercial real estate professionals. Learn Python, data analysis, and automation to find better deals and make smarter investments.",
    url: "https://credatalab.com",
    siteName: "CRE Data Lab",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRE Data Lab - Data-Driven Tools for Commercial Real Estate",
    description: "Professional training and tools for commercial real estate professionals. Learn Python, data analysis, and automation to find better deals and make smarter investments.",
    site: "@credatalab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
