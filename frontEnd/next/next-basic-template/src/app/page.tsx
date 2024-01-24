import HeroSection from "./sections/hero/HeroSection";
import ColorsGeneratorSection from "./sections/colorsGenerator/ColorsGeneratorSection";
import NavBragSection from "./sections/nav/NavBragSection";
import ParallaxSection from "./sections/parallax/ParallaxSection";

export default function Home() {
  return (
    <main className="mt-nav">
      <HeroSection />
      <NavBragSection />
      <ColorsGeneratorSection />
      <ParallaxSection />
    </main>
  );
}
