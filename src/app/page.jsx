import PageTitle from "./components/PageTitle";
import HeroSection from "./components/sections/HeroSection";
import SocialMediaSection from "./components/sections/SocialMediaSection";

export default function Home() {
  return (
    <>
      <PageTitle title="Explore New Music" />
      <HeroSection />
      <SocialMediaSection />
    </>
  );
}
