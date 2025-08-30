"use client";
import { useState, useRef } from "react";
import { X } from "lucide-react";
import { UserPlus, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import CopyEmailButton from "./ui/CopyEmailButton";

export default function GridLayout() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const constraintsRef = useRef(null);

  // Array of videos
  const videos = [
    {
      src: "/car-3.mp4",
      label: "Raw Footage",
    },
    {
      src: "/m3.mp4",
      label: "Edited Reel",
    },
  ];

  // Pick which video to show
  const currentVideo = sliderValue < 50 ? videos[0] : videos[1];

  return (
    <div className="grid gap-6 relative p-10">
      {/* First Row: 75% / 25% */}
      <div className="flex gap-10" style={{ height: "350px" }}>
        {/* Card with video preview */}
        <div
          style={{
            boxShadow:
              "0 4px 16px rgba(0,0,0,0.25), 0 0 8px rgba(59,130,246,0.15),0 0 8px rgba(59,130,246,0.15)",
            height: "100%",
          }}
          className="w-1/2 relative rounded-2xl cursor-pointer flex items-center justify-center text-white overflow-hidden"
        >
          <img
            src="/bmwcomp.jpeg"
            className="w-full h-full object-cover object-center"
            alt=""
          />

          {/* overlay */}
          <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
            <h1 className="text-2xl font-bold">Social Media Reels</h1>
            <p className="text-sm text-neutral-400">
              Dynamic edit with cinematic color grading, high-energy reel with
              trendy transitions.
            </p>
          </div>
        </div>

        {/* Another card */}
        <div
          onClick={() => setIsCardOpen(true)}
          style={{ height: "100%" }}
          className="w-1/2 rounded-2xl relative flex items-center justify-center text-white text-2xl font-bold overflow-hidden border-white/30"
        >
          <video
            src="/m3.mp4"
            className="w-full h-full object-cover rounded-2xl"
            loop
            autoPlay
            muted
            playsInline
          />

          <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
            <h2 className="text-2xl font-bold">Cool Car Edits</h2>
            <p className="text-sm text-neutral-400">
              High-octane car edit with fast cuts and smooth transitions
            </p>
          </div>
        </div>

     
      </div>

      {/* Second Row: 25% / 75% */}
      <div className="grid grid-cols-4 gap-6" style={{ height: "300px" }} data-scroll data-scroll-speed="0.6">
        {/* copy clickboard email */}
        <div
          data-scroll
          data-scroll-speed="0.2"
          style={{ height: "100%" }}
          className="relative col-span-1 rounded-2xl flex flex-col items-center justify-between overflow-hidden 
                 bg-gradient-to-br from-zinc-800 via-slate-800 to-neutral-900 shadow-xl border border-white/10 
                 p-6 min-h-[22rem] transition-transform hover:scale-[1.02] hover:shadow-2xl"
        >
          {/* Top Section */}
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <div className="flex items-center justify-center p-3 rounded-full bg-primary/10">
              <UserPlus className="w-12 h-12 text-primary drop-shadow-md" />
            </div>

            <p className="text-center flex items-center text-xl font-semibold text-white leading-snug">
              Do you want to start a project together?
            </p>

            <CopyEmailButton />
          </div>

          {/* Bottom Label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-neutral-400 text-sm">
            <Mail className="w-4 h-4" />
            <span className="tracking-wide">Let&apos;s connect!</span>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.4"
          style={{ height: "100%" }}
          className="col-span-3 relative rounded-2xl flex items-end justify-center overflow-hidden"
        >
          <img
            src="/BMW M5 Competition.jpeg"
            className="rounded-2xl object-cover w-full h-full"
            alt="BMW M3"
          />
          <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
            <h1 className="text-2xl font-bold text-white">Automotive Showcases</h1>
            <p className="text-sm text-neutral-300 mt-1">
              High-impact car edits with smooth transitions, energetic pacing, and cinematic flair for enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Third Row: 50% / 50% */}
      <div className="grid grid-cols-2 gap-2" style={{ height: "180px" }} data-scroll data-scroll-speed="0.7">
        <div
          data-scroll
          data-scroll-speed="0.3"
          style={{ height: "100%" }}
          className="bg-yellow-500 rounded-2xl flex items-center justify-center text-white"
        >
          50%
        </div>
        <div
          data-scroll
          data-scroll-speed="0.5"
          style={{ height: "100%" }}
          className="bg-pink-500 rounded-2xl flex items-center justify-center text-white"
        >
          50%
        </div>
      </div>
    </div>
  );
}
