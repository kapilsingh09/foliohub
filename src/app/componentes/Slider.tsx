"use client";

import { useState } from "react";
import { Edit3 } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    img: "https://images.unsplash.com/photo-1603415526960-f0b59f59b6f8?auto=format&fit=facearea&w=300&h=300&facepad=2",
    name: "Ava Martinez",
    comment:
      "Amazing work on my wedding photos! The color grading was perfect and made every moment look magical. Professional service with quick turnaround time. Highly recommended!",
  },
  {
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=facearea&w=300&h=300&facepad=2",
    name: "Liam Chen",
    comment:
      "Outstanding editing for my business headshots! They enhanced the lighting perfectly and made me look professional. The quality exceeded my expectations completely.",
  },
  {
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=facearea&w=300&h=300&facepad=2",
    name: "Sofia Patel",
    comment:
      "Best photo editor I've worked with! My product photos look stunning now and my sales have increased. Fast delivery and excellent communication throughout.",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=300&h=300&facepad=2",
    name: "Noah Kim",
    comment:
      "Incredible editing on my travel photos! They brought out colors I didn't even know were there. Made my memories look like magazine covers. Will use again!",
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=facearea&w=300&h=300&facepad=2",
    name: "Mia Johnson",
    comment:
      "Perfect for my social media content! My Instagram engagement doubled after using these edited photos. Great style and understands what works online.",
  },
  {
    img: "https://images.unsplash.com/photo-1573495612937-1e580eb56b72?auto=format&fit=facearea&w=300&h=300&facepad=2",
    name: "Ethan Smith",
    comment:
      "Excellent work on my real estate photos! Properties look amazing and professional. Helped sell my listings faster than ever. Top quality service!",
  },
];

export default function InfiniteSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useRef(0);
  const rerender = useState(0)[1]; // force rerender for React

  const cardWidth = 300; // 288px (w-72) + 24px (mx-3 total)
  const totalCards = clients.length;
  const totalWidth = cardWidth * totalCards;

  // Create multiple sets for seamless loop
  const cardSets = Array(4).fill(clients).flat();

  // Handler to pause/resume on card hover
  const handleCardMouseEnter = () => setIsPaused(true);
  const handleCardMouseLeave = () => setIsPaused(false);

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      x.current -= (50 * delta) / 1000; // 50 px/sec
      if (x.current <= -totalWidth) {
        x.current = 0;
      }
      rerender((v) => v + 1); // force rerender
    }
  });

  return (
    <div className="relative bg-black py-20 px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        What Clients Say About Me
      </h2>
      <p className="text-gray-400 text-center mb-16 text-lg">
        Real feedback from satisfied customers
      </p>

      <div className="overflow-hidden relative w-full">
        {/* Left white overlay with blur - 10% width */}
        <div className="absolute left-0 top-0 w-[15%] h-full z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-black via-black to-transparent "></div>
        </div>
        
        {/* Right white overlay with blur - 10% width */}
        <div className="absolute right-0 top-0 w-[15%] h-full z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-black via-black to-transparent "></div>
        </div>
        
        {/* Slider container - 80% width, centered */}
        <div className="w-[85%] mx-auto overflow-hidden">
          <motion.div
            className="flex transition-none will-change-transform"
            style={{
              x: x.current,
            }}
          >
            {cardSets.map((client, idx) => (
              <div
                key={idx}
                className="inline-block bg-gradient-to-br flex flex-col justify-between from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 mx-3 w-72 min-h-[180px] flex-shrink-0 border border-gray-700 transition-all duration-300 hover:shadow-indigo-500/20"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div>
                  <div className="flex items-center space-x-4 mb-3">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-base">
                        {client.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-normal text-sm">
                    {client.comment}
                  </p>
                </div>
               
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}