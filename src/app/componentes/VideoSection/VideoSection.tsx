"use client"
import RightSection from './RightSection'
import { motion } from "motion/react"
import React, { useState } from "react"
import Image from "next/image"

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({ x, y })
  }

  return (
    <div className=" bg-black  min-h-screen w-full text-white flex items-center justify-center flex-col gap-8 p-8 md:p-9">
      <section className="flex flex-nowrap h-full w-full flex-1 items-center justify-between gap-8">
        {/* LEFT BOX */}
        <div className="h-full w-[60%] flex flex-col justify-between gap-6 ">
          {/* Top content */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative flex flex-col items-start  backdrop-blur-sm overflow-hidden group p-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Animated border gradient */}
          
            
            <div className="relative z-10 w-full flex justify-start h-[30vh]  ">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/img/RINTARO TSUMUGI AND KAORUKO WAGURI(1).jpeg"
                  alt="icon"
                  width={350}
                  height={350}
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Video tag for future implementation */}
             
              {/* Your browser does not support the video tag. */}
              <div className="h-full w-full rounded-2xl ">
              {/* <video
              className="object-cover rounded-xl w-full h-full transition-transform duration-500 group-hover:scale-110 z-90"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src="m4final (1).mp4"
              >
              </video> */}
              </div>
                
                
                {/* Play button overlay */}
            
              </div>
            </div>
            
            <div className="relative z-10 mt-4 text-left w-2/3">
              <motion.h2 
                className="text-2xl font-bold comfortaa-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Creative Editing
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-base mt-2 leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Professional video editing with smooth transitions and creative effects that bring your vision to life.
              </motion.p>
            </div>

            {/* Hover tooltip */}
            {/* {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
                className="absolute z-20 pointer-events-none"
                style={{
                  top: coords.y - 100,
                  left: coords.x - 80,
                }}
              >
                <div className=" backdrop-blur-lg rounded-2xl shadow-2xl">
                  <Image
                    src="/img/𝗆𝖺𝗍𝖼𝗁𝗂𝗇𝗀 ㅤㅤ𝗂𝖼𝗈𝗇𝗌  !! (2).jpeg"
                    alt="hover-img"
                    width={160}
                    height={160}
                    className="rounded-xl shadow-lg"
                  />
          
                </div>
              </motion.div>
            )} */}
          </motion.div>

          {/* Bottom content */}
          <motion.div 
            className="flex flex-col items-end"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-full flex justify-end">
              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src="/img/RINTARO TSUMUGI AND KAORUKO WAGURI(2).jpeg"
                  alt="icon"
                  width={350}
                  height={350}
                  className="object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                
                {/* Video tag for future implementation */}
                {/* 
                <video
                  className="object-cover rounded-xl w-full h-full transition-all duration-500 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/your-video-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="mt-4 text-right w-1/2">
              <h2 className="text-2xl font-bold comfortaa-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Motion Graphics
              </h2>
              <p className="text-gray-300 text-base mt-2 leading-relaxed">
                Dynamic animations and motion graphics that captivate your audience with stunning visual storytelling.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT BOX */}
<RightSection />

      </section>
    </div>
  )
}

export default VideoSection