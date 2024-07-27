import PageTitle from "./components/PageTitle";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <PageTitle title="Explore New Music" />
      <HeroSection />
      <div className="bg-zinc-100 h-screen w-full"></div>
    </>
  );
}
