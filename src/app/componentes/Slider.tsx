"use client";

import { useState, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

// These are the pre-defined gradients for the client initials
const backgroundGradients = [
  "bg-gradient-to-br from-indigo-500 to-purple-600",
  "bg-gradient-to-br from-green-500 to-teal-600",
  "bg-gradient-to-br from-orange-500 to-rose-600",
  "bg-gradient-to-br from-cyan-500 to-blue-600",
  "bg-gradient-to-br from-fuchsia-500 to-pink-600",
  "bg-gradient-to-br from-lime-500 to-emerald-600",
];

// Function to get a unique gradient from a name
// It creates a simple hash from the name to pick a consistent gradient
const getGradientFromName = (name) => {
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

export default function InfiniteSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useRef(0);
  const rerender = useState(0)[1];

  const cardWidth = 336;
  const totalCards = clients.length;
  const totalWidth = cardWidth * totalCards;

  // Create multiple sets for a seamless loop
  const cardSets = Array(4).fill(clients).flat();

  const handleCardMouseEnter = () => setIsPaused(true);
  const handleCardMouseLeave = () => setIsPaused(false);

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      x.current -= (30 * delta) / 1000; // Slower speed for better readability
      if (x.current <= -totalWidth) {
        x.current = 0;
      }
      rerender((v) => v + 1);
    }
  });

  return (
    <div className="relative overflow-hidden py-20 px-4  text-white font-inter">
      {/* Subtle radial gradient background */}
      {/* <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-gray-950 opacity-50"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto ">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-4 leading-tight tracking-tighter">
          What Clients Say About Me
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg max-w-3xl mx-auto">
          Real feedback from satisfied customers who love the quality and professionalism of our work.
        </p>

        <div className="relative w-full flex justify-center  items-center">
          {/* Fading gradient overlays */}
          <div className="absolute left-0 top-0 w-[15%] h-full z-10 pointer-events-none bg-gradient-to-l from-transparent via-black"></div>
          <div className="absolute right-0 top-0 w-[15%] h-full z-10 pointer-events-none bg-gradient-to-l from-transparent via-black "></div>

          <div className="w-[85%] mx-auto h-[43vh] flex items-center justify-center overflow-hidden">
            <motion.div
              className="flex transition-none will-change-transform items-center justify-center gap-8"
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
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 40px -15px rgba(102,51,153,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
