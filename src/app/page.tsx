import HomePage from "@/app/componentes/HomePage"
import SixDivLayout from "./componentes/SixDivLayout";
import ContactForm from "./componentes/ContactForm";
import Slider from './componentes/Slider'
import About from "./componentes/About/About";
import VideoSection from "./componentes/VideoSection/VideoSection";
import Griddd from './componentes/girddd'
export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]"  >
      <HomePage />
      <SixDivLayout />



  <About />
<VideoSection />
<Slider />
{/* <LinkPreviewDemo /> */}

      {/* <div className="flex gap-6"> */}
      {/* <Griddd /> */}
<ContactForm />
      {/* </div> */}
    </main>
  );
}
