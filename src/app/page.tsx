import HeroSection from "@/app/componentes/HeroSection"
import FeaturedSection from "./componentes/FeaturedSection";
import Griddd from './componentes/girddd'
import HeroScroll from './componentes/HeroScroll'
import GridLayout from './componentes/LayoutGrid'

export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]"  >
      <HeroSection />
      <GridLayout />  
{/* <HeroScroll /> */}
      {/* <FeaturedSection /> */}
      {/* <WhyChooseUs /> */}

      <Griddd />
        
    </main>
  );
}
