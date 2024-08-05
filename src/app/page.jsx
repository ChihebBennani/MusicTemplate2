import PageTitle from "./components/PageTitle";
import ActivationSection from "./components/sections/ActivationSection";
import HeroSection from "./components/sections/HeroSection";
import ProductionSection from "./components/sections/ProductionSection";
import QuotesSection from "./components/sections/QuotesSection";
import SocialMediaSection from "./components/sections/SocialMediaSection";

export default function Home() {
  return (
    <>
      <PageTitle title="Explore New Music" />
      <HeroSection />
      <SocialMediaSection />
      <ActivationSection />
      <ProductionSection />
      <QuotesSection />
    </>
  );
}
