"use client";

import { useState, useRef } from "react";
import { motion, useAnimationFrame, AnimatePresence } from "motion/react";

// These are the pre-defined gradients for the client initials
const backgroundGradients = [
  "bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300",
  "bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-300",
  "bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400",
  "bg-gradient-to-br from-orange-400 via-amber-500 to-lime-300",
  "bg-gradient-to-br from-fuchsia-500 via-pink-400 to-rose-300",
  "bg-gradient-to-br from-teal-500 via-green-400 to-lime-200",
  "bg-gradient-to-br from-violet-500 via-purple-400 to-pink-300",
  "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
];

const getGradientFromName = (name: string) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  const index = sum % backgroundGradients.length;
  return backgroundGradients[index];
};

const clients = [
  {
    name: "Ava Martinez",
    comment:
      "Absolutely blown away by the video edit for my wedding! The transitions, color grading, and music sync made our special day feel like a movie. Super professional and delivered ahead of schedule. Highly recommend for any event video!",
  },
  {
    name: "Liam Chen",
    comment:
      "The promo video for my business was next-level. The editing style was modern, with smooth cuts and dynamic effects that made my brand stand out. Communication was great and revisions were handled quickly. Will be back for more projects!",
  },
  {
    name: "Sofia Patel",
    comment:
      "I needed a cinematic travel vlog and got exactly that! The editor brought my footage to life with creative pacing, beautiful color work, and perfect music choices. My YouTube audience loved it. Best video editing experience I've had.",
  },
  {
    name: "Noah Kim",
    comment:
      "Incredible job on my short film edit. The storytelling through visuals and sound design was spot on. Every scene flowed perfectly and the attention to detail was impressive. Professional, creative, and reliable video editor.",
  },
  {
    name: "Mia Johnson",
    comment:
      "Social media reels and TikToks have never looked better! The edits were trendy, engaging, and helped boost my views and followers. Fast turnaround and always open to feedback. Highly skilled in video content for online platforms.",
  },
  {
    name: "Ethan Smith",
    comment:
      "Real estate walkthrough videos were edited to perfection. The pacing, color correction, and added graphics made my listings stand out and attract more buyers. Great communication and top-notch quality every time.",
  },
];

const cardWidth = 336;
const totalCards = clients.length;
const totalWidth = cardWidth * totalCards;

// Create multiple sets for a seamless loop
const cardSets = Array(4).fill(clients).flat();

// const cardVariants = {
//   initial: { opacity: 0, y: 40, scale: 0.95 },
//   animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   exit: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
// };

export default function InfiniteSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useRef(0);
  const rerender = useState(0)[1];

  // For manual sliding
  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
    setTimeout(() => setIsPaused(false), 1200);
  };
  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % clients.length);
    setTimeout(() => setIsPaused(false), 1200);
  };

  // For infinite auto sliding
  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      x.current -= (30 * delta) / 1000; // Slower speed for better readability
      if (x.current <= -totalWidth) {
        x.current = 0;
      }
      rerender((v) => v + 1);
    }
  });

  // For mobile/small screens, show one card at a time with framer-motion slide
  // For desktop, show the infinite slider as before

  return (
    <div className="relative overflow-hidden py-20 px-4 text-white font-inter">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-gray-950 opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-4 leading-tight tracking-tighter">
          What <span className="underline underline-offset-1 decoration-green-400 decoration-3   leading-relaxed tracking-wide">Clients</span> Say About Me
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg max-w-3xl mx-auto">
          Real feedback from satisfied customers who love the quality and professionalism of our work.
        </p>

        <div className="relative w-full flex justify-center items-center">
          {/* Fading gradient overlays */}
          <div className="absolute left-0 top-0 w-[15%] h-full z-10 pointer-events-none bg-gradient-to-l from-transparent via-black"></div>
          <div className="absolute right-0 top-0 w-[15%] h-full z-10 pointer-events-none bg-gradient-to-l from-transparent via-black "></div>

          {/* Responsive: show slider or single card with framer-motion slide */}
          <div className="w-[85%] mx-auto h-[43vh] flex items-center justify-center overflow-hidden">
            {/* Mobile/Tablet: Animate single card with slide */}
            <div className="block md:hidden w-full h-full  items-center justify-center relative">
              <button
                aria-label="Previous"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 rounded-full p-2"
                onClick={handlePrev}
              >
                <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                aria-label="Next"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 rounded-full p-2"
                onClick={handleNext}
              >
                <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="w-full flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeIndex}
                    className="inline-block relative z-10 p-6 w-80 min-h-[16rem] flex-shrink-0
                      rounded-3xl border border-gray-700
                      bg-gradient-to-br from-zinc-800 to-zinc-900
                    "
               
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex items-center space-x-4 mb-5">
                      {/* Client Initials with dynamic gradient background */}
                      <div className={`h-14 w-14 rounded-full flex items-center justify-center shadow-lg ${getGradientFromName(clients[activeIndex].name)}`}>
                        <h2 className="text-white font-bold text-xl tracking-wide select-none">
                          {clients[activeIndex].name.split(' ').map((n: string) => n[0]).join('')}
                        </h2>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                          {clients[activeIndex].name}
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        </h3>
                        <span className="text-gray-400 text-sm">Satisfied Client</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {clients[activeIndex].comment}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* Desktop: Infinite framer-motion sliding */}
            <motion.div
              className="hidden md:flex transition-none will-change-transform items-center justify-center gap-8"
              style={{
                x: x.current,
              }}
            >
              {cardSets.map((client, idx) => (
                <motion.div
                  key={idx}
                  className="inline-block relative z-10 p-6 w-80 min-h-[16rem] flex-shrink-0
                    rounded-3xl border border-gray-700
                    bg-gradient-to-br from-zinc-800 to-zinc-900
                  "
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 40px -15px rgba(102,51,153,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                >
                  <div className="flex items-center space-x-4 mb-5">
                    {/* Client Initials with dynamic gradient background */}
                    <div className={`h-14 w-14 rounded-full flex items-center justify-center shadow-lg ${getGradientFromName(client.name)}`}>
                      <h2 className="text-white font-bold text-xl tracking-wide select-none">
                        {client.name.split(' ').map((n: string) => n[0]).join('')}
                      </h2>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                        {client.name}
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      </h3>
                      <span className="text-gray-400 text-sm">Satisfied Client</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {client.comment}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
