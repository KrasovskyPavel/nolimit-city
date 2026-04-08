import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WelcomeBanner } from "./components/WelcomeBanner";
import { MostPopular } from "./components/MostPopular";
import { SeoContent } from "./components/SeoContent";
import { Footer } from "./components/Footer";

export default function App() {
  // Set SEO meta tags
  useEffect(() => {
    // Set page title
    document.title = "Nolimit City Slots — Demo & Discover Best Online Casino Games";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Looking for the best Nolimit City online slots? Discover high RTP games, new Nolimit City releases, and exclusive casino bonuses for UK players."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Looking for the best Nolimit City online slots? Discover high RTP games, new Nolimit City releases, and exclusive casino bonuses for UK players.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
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
  );
}
