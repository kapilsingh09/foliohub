"use client";

import { useState, useRef } from "react";
import { X, UserPlus, Play, Pause, Volume2, VolumeX, Heart, Share2, Download, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CopyEmailButton from "./ui/CopyEmailButton";
import { div } from "motion/react-client";
import Player from "./player/Player";

const videos = [
  {
    src: "/m3.mp4",
    title: "Cool Car Edits",
    description: "High-octane car edit with fast cuts and smooth transitions",
  },
  {
    src: "/brothers.mp4",
    title: "Brotherhood Ride",
    description: "Two brothers, one passion – cinematic storytelling on wheels",
  },
  {
    src: "/finalBMW.mp4",
    title: "BMW Showcase",
    description: "Luxury meets motion. Smooth transitions and cinematic vibes",
  },
];

const SixDivLayout = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [viewCount, setViewCount] = useState(1247);
  const constraintsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setViewCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="min-h-screen w-full p-8">
      {/* ================= TOP SECTION ================= */}
      <div className="flex gap-6 mb-6">
        {/* ---------- LEFT HERO ---------- */}
        <div className="relative h-[100vh] w-1/2 rounded-2xl shadow-lg overflow-hidden">
          <img src="/davinci-resolve-20-color (1).jpg"
          
          className="absolute inset-0 w-full h-full object-contain rounded-2xl"
          alt="" />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full p-7 
           bg-gradient-to-b from-transparent via-black/60 to-black 
           rounded-b-2xl overflow-hidden outline-none "
          >
            <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
              Dhruv&apos;s Editor
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm leading-relaxed text-neutral-300"
            >
              Hey, I&apos;m <span className="text-pink-400 font-semibold">Dhruv</span>.  
              I create cinematic Instagram edits—music, motion, and color that tell a story.  
              From high-energy car reels to moody travel montages, I blend rhythm, pacing, and vibrant color grading  
              to craft edits that grab attention and leave a lasting impression.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-[4px] mt-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-3 right-5 text-neutral-400 text-xs"
            >
              Scroll for more ↓
            </motion.div>
          </motion.div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="w-1/2 flex flex-col gap-4 ">
          {/* Card 1: Car */}
          <motion.div
            onClick={() => {
              setActiveVideo(videos[0]);
              setIsCardOpen(true);
            }}
            className="relative h-[50vh] rounded-2xl border border-black overflow-hidden shadow-lg hover:cursor-pointer group bg-gradient-to-b from-black via-black/80 to-black/60"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* <video
              src={videos[0].src}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loop
              autoPlay
              muted
              playsInline
            /> */}
            <img src="/img/BMW-img.png" className="" alt="" />
            <div className="absolute -bottom-2 left-0 w-full p-5 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
              <h2 className="text-2xl font-bold text-white">{videos[0].title}</h2>
              <p className="text-sm text-neutral-400">{videos[0].description}</p>
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 + 3 Row */}
          <div className="flex gap-6">
            {/* Brothers */}
            <motion.div
              onClick={() => {
                setActiveVideo(videos[1]);
                setIsCardOpen(true);
              }}
              className="h-[48vh] w-1/2 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <video src={videos[1].src} autoPlay loop muted playsInline />
              <div className="absolute -bottom-2 left-0 w-full p-5 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
                <h2 className="text-2xl font-bold text-white">{videos[1].title}</h2>
                <p className="text-sm text-neutral-400">{videos[1].description}</p>
              </div>
            </motion.div>

            {/* BMW */}
            <motion.div
              onClick={() => {
                setActiveVideo(videos[2]);
                setIsCardOpen(true);
              }}
              className="h-[48vh] w-1/2 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <video src={videos[2].src} autoPlay muted loop playsInline />
              <div className="absolute -bottom-2 left-0 w-full p-5 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
                <h2 className="text-2xl font-bold text-white">{videos[2].title}</h2>
                <p className="text-sm text-neutral-400">{videos[2].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= PLAYER MODAL ================= */}
      <AnimatePresence>
        {isCardOpen && activeVideo && (
          <Player video={activeVideo} close={() => setIsCardOpen(false)}  />
        )}
      </AnimatePresence>

      {/* ================= BOTTOM SECTION ================= */}

      <div className="flex gap-6">
        <motion.div
          className="h-[50vh] w-[30%] rounded-2xl shadow-lg border border-white/20 flex items-center justify-center relative overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex flex-col items-center justify-center gap-6 w-full p-6 relative z-10">
            <motion.div
              className="flex items-center justify-center p-4 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-400/30"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <UserPlus className="w-12 h-12 text-blue-400 drop-shadow-md" />
            </motion.div>
            <motion.p
              className="text-center text-xl font-semibold text-white leading-snug"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Do you want to start a project together?
            </motion.p>
            <CopyEmailButton />
          </div>
        </motion.div>

        <motion.div
          className="h-[50vh] w-[70%] bg-gradient-to-br from-pink-500 via-purple-500 to-violet-500 rounded-2xl shadow-lg flex items-center justify-center text-slate-900 text-xl font-bold relative overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 text-3xl text-white  text-center">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Portfolio Showcase
            </motion.div>
            <p className="text-base font-normal mt-2 text-neutral-300  opacity-80">
              More projects coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SixDivLayout;
