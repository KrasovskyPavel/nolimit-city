import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { MostPopular } from "@/app/components/MostPopular";
import { SeoContent } from "@/app/components/SeoContent";
import { WelcomeBanner } from "@/app/components/WelcomeBanner";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nolimitcity.uk.com/#organization",
  name: "Nolimit City",
  url: "https://nolimitcity.uk.com//",
  logo: {
    "@type": "ImageObject",
    url: "https://nolimitcity.uk.com/logo.png",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@nolimitcity.uk.com",
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nolimitcity.uk.com/#website",
  url: "https://nolimitcity.uk.com/",
  name: "Nolimit City",
  description:
    "Official Nolimit City portal with a detailed guide to slots and innovative game mechanics.",
  inLanguage: "en",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://nolimitcity.uk.com/#faq",
  url: "https://nolimitcity.uk.com/",
  name: "Nolimit City FAQ",
  isPartOf: {
    "@id": "https://nolimitcity.uk.com/#website",
  },
  inLanguage: "en",
  description:
    "Frequently asked questions about Nolimit City slots, including demo play, RTP, mobile compatibility, and top casino sites.",
  mainEntity: [
    {
      "@type": "Question",
      "@id": "https://nolimitcity.uk.com/#q1",
      name: "Where to play Nolimit City slots?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://nolimitcity.uk.com/#a1",
        text: "Explore top Nolimit City online casinos and Nolimit City slot sites.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://nolimitcity.uk.com/#q2",
      name: "Can I try Nolimit City games for free?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://nolimitcity.uk.com/#a2",
        text: "Use Nolimit City demo slots or Nolimit City slots free play.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://nolimitcity.uk.com/#q3",
      name: "Are Nolimit City games mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://nolimitcity.uk.com/#a3",
        text: "Yes, all mobile Nolimit City casinos and games are optimized for smartphones.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://nolimitcity.uk.com/#q4",
      name: "What is Nolimit City RTP?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://nolimitcity.uk.com/#a4",
        text: "Each slot displays its Nolimit City RTP, ensuring fairness.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <WelcomeBanner />
        <main>
          <MostPopular />
          <SeoContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
