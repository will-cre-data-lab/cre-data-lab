import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About | CRE Data Lab',
  description: 'Learn about our mission to empower CRE professionals with data analysis skills',
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-display text-neutral-900 mb-8 text-center">
          About CRE Data Lab
        </h1>

        <div className="space-y-8 text-body-lg text-neutral-600">
          <p>
            CRE Data Lab was founded with a simple mission: to give commercial real estate 
            professionals a decisive competitive edge through advanced data analysis skills.
          </p>

          <p>
            In today's market, everyone has access to data – but those who can truly analyze it, visualize 
            it, and extract actionable insights are the ones who win deals, spot opportunities first, and 
            outperform their competition. That's the advantage we deliver.
          </p>
          
          <p>
            While others are still making gut-based decisions, our graduates are leveraging data to 
            negotiate better terms, identify emerging markets before they peak, and provide clients 
            with insights their competitors simply can't match. In a crowded marketplace, data fluency 
            isn't just useful – it's what separates top performers from everyone else.
          </p>

          <h2 className="text-heading-2 text-neutral-900 mt-12 mb-6">
            Our Approach
          </h2>

          <p>
            We believe in hands-on, practical learning. Our courses are designed by industry
            professionals who understand the unique challenges of commercial real estate. Every
            lesson is built around real-world scenarios and data sets you'll actually encounter
            in your work.
          </p>

          <h2 className="text-heading-2 text-neutral-900 mt-12 mb-6">
            Who We Serve
          </h2>

          <p>
            No matter your role in commercial real estate – whether you're client-facing, analytical, 
            investment-focused, or anywhere in between – our courses equip you with capabilities your 
            competition simply doesn't have.
          </p>

          <p>
            By completing this program, you'll join an elite group of CRE professionals who can do what 
            most can't: transform raw data into strategic advantage. 
          </p>

          <p>  
            You'll bring a skill set to your team that's genuinely scarce in the industry – the ability to 
            speak the language of both real estate and data. While your competitors rely on intuition and 
            lagging indicators, you'll be the one at the table with quantifiable insights, predictive analysis, 
            and a perspective that commands attention.
          </p>

          <p>
            This isn't just upskilling – it's repositioning yourself as an indispensable asset with a rare 
            combination of domain expertise and technical capability that the modern CRE market desperately 
            needs but rarely finds.
          </p>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
