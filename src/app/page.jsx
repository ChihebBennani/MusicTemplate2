import PageTitle from "./components/PageTitle";
import ActivationSection from "./components/sections/ActivationSection";
import HeroSection from "./components/sections/HeroSection";
import SocialMediaSection from "./components/sections/SocialMediaSection";

export default function Home() {
  return (
    <>
      <PageTitle title="Explore New Music" />
      <HeroSection />
      <SocialMediaSection />
      <ActivationSection />
    </>
  );
}
