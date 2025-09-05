"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight,ArrowDown } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";

const clientFocusedHeadings = [
  "Professional Video Editing That Elevates Your Brand",
  "Post-Production That Brings Your Vision to Life",
  "Trusted Video Editing for Creators & Businesses",
  "From Rough Cuts to Cinematic Stories",
  "Helping Creators Shine Through Seamless Editing"
];

const Direct = [
  "Professional Video Editor for Hire",
  "Cinematic Video Editing That Sells",
  "Your Vision, Seamlessly Edited",
  "Video Editing That Elevates Brands",
  "Hire a Video Editor Who Delivers"
];

const dynamicWords = [
  { word: "editing", color: "text-white" },
  { word: "visuals", color: "text-white" },
  { word: "stories", color: "text-white" },
  { word: "clients", color: "text-white" }
];

const scrollDown =() =>{
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}
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
    <div className="h-auto md:h-[40rem] min-h-screen w-full bg-black text-white flex flex-col md:flex-row rounded-md relative overflow-hidden mx-auto py-10  md:py-0">
      {/* Left Side */}
      <div className="w-full md:w-[65%] mt-10 flex pl-10 flex-col items-center justify-center p-6 relative z-10 text-center md:text-left">
        <Spotlight className="-top-40 left-0 md:-top-35 md:left-20" fill="white" />

        <motion.h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Vision, Seamlessly Edited
        </motion.h1>

        {/* Dynamic paragraph */}
        <div className="w-full space-y-6 ">
          <motion.p
            className="font-normal text-base md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mx-auto md:mx-0 max-w-[70%] mt-8 p-2 text-left tracking-wide leading-relaxed flex-wrap"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>
              I help brands and creators tell powerful stories through seamless video
              <motion.span
                key={dynamicWords[index].word}
                className={`  py-1.5 px-2 rounded-xl font-normal text-base md:text-xl tracking-wide ${dynamicWords[index].color}`}
                initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(6px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {displayedWord}
              </motion.span>
            </span>
          </motion.p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2  flex items-center justify-center">
        <div className="w-full h-64 md:h-auto"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 w-full transition-all duration-500 ease-in-out z-9">
  <div className="absolute inset-0 flex items-center justify-between h-full px-8 text-md transition-all duration-500 ease-in-out">

    {/* First Link */}
    <Link
      href="/videoeditor"
      className="flex text-white font-medium hover:underline cursor-pointer transition-all duration-300 ease-in-out"
    >
      Discover my latest edits
      <ArrowUpRight className=" transition-transform duration-300 ease-in-out hover:translate-x-1" />
    </Link>

    {/* Second Link */}
    <Link
      href="/videoeditor"
      className="flex items-center justify-center text-white font-medium hover:underline transition-all duration-300 ease-in-out"
    >
      By Vichi — Video Editor
      <ArrowUpRight className="  transition-transform duration-300 ease-in-out hover:translate-x-3" />
    </Link>

    {/* Buttons */}
    <div className="flex space-x-2">
      <button
      onClick={()=>{scrollDown()}}
      className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:cursor-pointer hover:bg-white/10 transition-all duration-300 ease-in-out">
        <ArrowDown className="transition-transform duration-300 ease-in-out hover:translate-y-1" />
      </button>
      <button
      onClick={()=>{scrollDown()}}
      className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:cursor-pointer hover:bg-white/10 transition-all duration-300 ease-in-out">
        <ArrowDown className="transition-transform duration-300 ease-in-out hover:translate-y-1" />
      </button> 
    </div>
  </div>
</div>


    </div>
  );
};

export default HeroSection;
