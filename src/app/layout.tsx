import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CRE Data Lab - Data Analysis Courses for Commercial Real Estate',
  description: 'Master commercial real estate data analysis with expert-led courses. Learn Python, data visualization, and predictive modeling for CRE professionals.',
  keywords: ['commercial real estate', 'data analysis', 'CRE courses', 'real estate analytics'],
  authors: [{ name: 'CRE Data Lab' }],
  openGraph: {
    title: 'CRE Data Lab - Data Analysis Courses',
    description: 'Professional training for commercial real estate data analysis',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'CRE Data Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRE Data Lab',
    description: 'Data analysis courses for commercial real estate professionals',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
