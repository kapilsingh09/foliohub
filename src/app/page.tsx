import { main } from "motion/react-client";
import HeroSection from "@/app/componentes/HeroSection"
export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]"  >

      <HeroSection />
    </main>
  );
}
