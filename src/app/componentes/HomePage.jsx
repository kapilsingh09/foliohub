"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";

const dynamicWords = [
  { word: "editing", color: "text-white" },
  { word: "visuals", color: "text-white" },
  { word: "stories", color: "text-white" },
  { word: "clients", color: "text-white" },
];

const scrollDown = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");

  // cycle through words every 3s
  useEffect(() => {
    const cycle = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  // typing effect for current word
  useEffect(() => {
    setDisplayedWord("");
    let i = 0;
    const word = dynamicWords[index].word;
    const typing = setInterval(() => {
      if (i < word.length) {
        setDisplayedWord(word.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 220);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden py-10">
      <Spotlight className="absolute -top-40 left-1/2 -translate-x-1/2 md:-top-36" fill="white" />
      <motion.h1
        className="text-center text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your Vision, Seamlessly Edited
      </motion.h1>
      <motion.p
        className="font-normal text-base sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mx-auto max-w-2xl mt-8 p-2 text-center tracking-wide leading-relaxed flex-wrap z-10"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>
          I help brands and creators tell powerful stories through seamless video{" "}
          <motion.span
            key={dynamicWords[index].word}
            className={`py-1.5 px-2 rounded-xl font-normal text-base sm:text-xl md:text-2xl tracking-wide ${dynamicWords[index].color} bg-white/10`}
            initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {displayedWord}
          </motion.span>
        </span>
      </motion.p>

      {/* Buttons at the bottom center */}
      <div className="absolute bottom-7 left-0 right-0 w-full transition-all duration-500 ease-in-out z-9">
        <div className="absolute inset-0 flex items-center justify-between h-full px-4 sm:px-6 md:px-8 text-sm sm:text-md transition-all duration-500 ease-in-out z-[9999]">
          {/* First Link */}
          <Link
            href="/videoeditor"
            className="flex items-center text-white font-medium hover:underline cursor-pointer transition-all duration-300 ease-in-out text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-white/10"
          >
            <span className="hidden sm:inline">Discover my latest edits</span>
            <span className="sm:hidden">Latest edits</span>
            <ArrowDown className="ml-1 h-4 w-3 sm:h-6 sm:w-4 transition-transform duration-300 ease-in-out hover:translate-x-1" />
          </Link>

          {/* Second Link */}
          <Link
            href="/more/videos"
            className="flex items-center text-white font-medium hover:underline transition-all duration-300 ease-in-out text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-white/10"
          >
            <span className="hidden sm:inline">Discover my more video</span>
            <span className="sm:hidden">More video</span>
            <ArrowUpRight className="transition-transform duration-300 ease-in-out hover:translate-x-3 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>

          {/* Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={scrollDown}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-white/30 flex items-center justify-center hover:cursor-pointer hover:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ease-in-out hover:translate-y-1" />
            </button>
            <button
              onClick={scrollDown}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-white/30 flex items-center justify-center hover:cursor-pointer hover:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ease-in-out hover:translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;