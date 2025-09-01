import HeroSection from "@/app/componentes/HeroSection"
import SixDivLayout from "./componentes/SixDivLayout";
import ContactForm from "./componentes/ContactForm";

export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]"  >
      <HeroSection />
      <SixDivLayout />

      {/* <Griddd /> */}
      <div className="flex gap-6">

<ContactForm />
      </div>
    </main>
  );
}
