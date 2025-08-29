"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GridLayout() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // range value
  const constraintsRef = useRef(null)
 
 
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
      <div className="flex h-84 gap-10">
        {/* Card with video preview */}
        <div
          onClick={() => setIsCardOpen(true)}
          className="w-1/2 relative rounded-2xl cursor-pointer flex items-center justify-center text-white overflow-hidden"
        >
          <video
            src="/m3.mp4"
            className="w-full h-full object-cover rounded-2xl"
            loop
            autoPlay
            muted
            playsInline
          />

          {/*  overlay  */}
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
          className="w-1/2 rounded-2xl relative flex items-center justify-center text-white text-2xl font-bold overflow-hidden   border-white/30"
          style={{
            boxShadow:
              "0 4px 16px rgba(0,0,0,0.25), 0 0 8px rgba(59,130,246,0.15),0 0 8px rgba(59,130,246,0.15)",
          }}
        >
          <img
            src="/bmwcomp.jpeg"
            className="w-full h-full object-cover object-center"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
            <h2 className="text-2xl font-bold">Cool Car Edits</h2>
            <p className="text-sm text-neutral-400"> Hight-octane car edit with fast cuts and smooth transitions</p>
          </div>
        </div>


        <AnimatePresence>
          {isCardOpen && (
            <motion.div
            ref={constraintsRef}
              className="fixed inset-0 bg-black/70 backdrop-blur-2xl flex items-center justify-center z-50 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
              //  drag whileDrag={{ scale: 1.1,  }}
              //  dragConstraints={constraintsRef}
              className="bg-zinc-900 p-6 rounded-2xl w-[40vw] h-[70vh] relative flex flex-col shadow-xl">
               
                {/* Close button */}
                <button
                  onClick={() => setIsCardOpen(false)}
                  className="absolute top-3 right-3 text-white hover:text-red-500 border border-white/20 rounded-full p-1 hover:cursor-pointer"
                >
                  <X size={24} />
                </button>

                {/* Video slider section */}
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <h2 className="text-white text-lg mb-2 font-semibold">
                    {currentVideo.label}
                  </h2>

                  <div className="relative w-full h-full flex flex-col items-center">
                    <motion.video
                      key={currentVideo.src} // re-render when video changes
                      src={currentVideo.src}
                      className="w-full h-[50vh] object-cover rounded-xl"
                      muted
                      autoPlay
                      loop
                      // initial={{ opacity: 0 }}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1,r:10, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }} // 👈 blur out on exit
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      playsInline
                      whileInView={{ opacity: 1 }}
                    />

                    {/* Slider Control */}
                    <motion.div className="bg-slate-900 rounded-2xl m-2 h-12 w-[50%] flex items-center justify-center ">

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-2/3 bg-black accent-white cursor-pointer"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Second Row: 25% / 75% */}
      <div className="grid grid-cols-4 h-84 gap-6">
        <div className="relative col-span-1 rounded-2xl flex items-end justify-center overflow-hidden">
          <img
            src="/kaoruko pfp __.jpeg"
            className="rounded-2xl object-cover object-center w-full h-full"
            alt="Profile"
          />
          <div className="absolute bottom-[-2px] left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
            <h1 className="text-xl font-semibold text-white">Personalized Edits</h1>
            <p className="text-xs text-neutral-300 mt-1">
              Unique, story-driven edits tailored to your vision. Stand out with custom effects and style.
            </p>
          </div>
        </div>

        <div className="col-span-3 relative rounded-2xl flex items-end justify-center overflow-hidden">
          <img
            src="/BMW M5 Competition.jpeg"
            className="rounded-2xl  object-cover   w-full h-full"
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
      <div className="grid grid-cols-2 h-60 gap-2">
        <div className="bg-yellow-500 rounded-2xl flex items-center justify-center text-white">
          50%
        </div>
        <div className="bg-pink-500 rounded-2xl flex items-center justify-center text-white">
          50%
        </div>
      </div>
    </div>
  );
}
