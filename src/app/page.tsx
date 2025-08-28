import { main } from "motion/react-client";
import HeroSection from "@/app/componentes/HeroSection"
import FeaturedSection from "./componentes/FeaturedSection";
export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]"  >

      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
