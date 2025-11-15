import type { Metadata } from "next";
import { HeroNew } from "@/components/marketing/HeroNew";
import { VideoShowcase } from "@/components/marketing/VideoShowcase";
import { SocialProof } from "@/components/marketing/SocialProof";
import { FAQ } from "@/components/marketing/FAQ";
import { CTA } from "@/components/marketing/CTA";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { ProblemAgitate } from "@/components/marketing/ProblemAgitate";
import { HowItWorksSimple } from "@/components/marketing/HowItWorksSimple";
import { PriceComparison } from "@/components/marketing/PriceComparison";

export const metadata: Metadata = {
  title: "Stop Wasting Money on Ads That Don't Work | PropertySimple Video Ads",
  description: "$147 gets you professional video ads + AI assistant + 7 days of ad spend. 48-hour money-back guarantee. Join 30,000+ agents getting more leads with less work.",
  keywords: "real estate video ads, AI real estate marketing, Instagram ads for realtors, Facebook ads for real estate, listing videos, real estate ISA, AI inside sales agent",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stop Wasting Money on Ads That Don't Work | PropertySimple Video Ads",
    description: "$147 gets you professional video ads + AI assistant + 7 days of ad spend. 48-hour money-back guarantee. Join 30,000+ agents getting more leads with less work.",
    url: "/",
    siteName: "PropertySimple",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PropertySimple - AI-Powered Real Estate Video Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Wasting Money on Ads That Don't Work | PropertySimple",
    description: "$147 gets you professional video ads + AI assistant + 7 days of ad spend. 48-hour money-back guarantee.",
    images: ["/og-image.png"],
    site: "@PropertySimple",
    creator: "@PropertySimple",
  },
};

export default function MarketingPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PropertySimple",
    "url": "https://www.propertysimple.com",
    "logo": "https://www.propertysimple.com/og-image.png",
    "description": "AI-powered real estate video ads and marketing automation for real estate agents.",
    "foundingDate": "2016",
    "sameAs": [
      "https://twitter.com/PropertySimple",
      "https://www.facebook.com/PropertySimple",
      "https://www.linkedin.com/company/propertysimple"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@propertysimple.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "name": "PropertySimple Video Ads",
      "price": "147",
      "priceCurrency": "USD",
      "description": "Professional video ads + AI assistant + 7 days of ad spend"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="min-h-screen bg-background grain-texture">
        <MarketingNav />
        <HeroNew />
        <ProblemAgitate />
        <VideoShowcase />
        <HowItWorksSimple />
        <PriceComparison />
        <SocialProof />
        <FAQ />
        <CTA />
        <MarketingFooter />
      </main>
    </>
  );
}
