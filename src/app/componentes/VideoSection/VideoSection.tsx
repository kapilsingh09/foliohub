"use client"
import RightSection from "./RightSection"
import { motion } from "motion/react"
import React, { useRef, useState } from "react"
import Image from "next/image"

const EditorShowcase = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null) 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({ x, y })
  }

  return (
    <div
      ref={containerRef}
      className="bg-black w-full text-white flex flex-col gap-8 px-6 py-8 md:px-12 relative"
    >
      {/* Independent Page Title */}
      <motion.h1
        className="text-3xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.8)] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Video Comparison Showcase
      </motion.h1>

      <section className="container mx-auto flex flex-col md:flex-row w-full items-start justify-between gap-8">
        {/* LEFT BOX */}
        <div className="w-full md:w-[60%] flex flex-col justify-between gap-8">
          {/* Top content (Before Editing) */}
          <motion.div className="relative flex flex-col items-start group ">
            <div
              className="relative z-10 w-full flex justify-start h-[30vh]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/img/RINTARO TSUMUGI AND KAORUKO WAGURI(1).jpeg"
                  alt="Before Editing"
                  width={400}
                  height={400}
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="relative z-10 mt-6 text-left w-2/3">
              <motion.h2
                className="text-3xl font-semibold font-sans text-white"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Before Editing
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg mt-3 leading-relaxed font-light"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Raw footage straight from the camera — unpolished, simple, and
                waiting to be transformed into something cinematic.
              </motion.p>
            </div>
          </motion.div>

          {/* Bottom content (After Editing) */}
          <motion.div className="flex flex-col items-end">
            <div
              className="w-full flex justify-end"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <Image
                  src="/img/RINTARO TSUMUGI AND KAORUKO WAGURI(1).jpeg"
                  alt="After Editing"
                  width={400}
                  height={400}
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div className="pl-5 p-3 text-left w-[62%] ">
              <h2 className="text-3xl font-semibold text-white">After Editing</h2>
              <p className="text-gray-300 text-lg mt-3 leading-relaxed font-light">
                Enhanced with color grading, smooth transitions, and creative
                effects that turn the raw clips into a professional visual story.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT BOX */}
        <div className="w-full md:w-[40%] xl:w-[50%]   sm:w-[60%]">
          <RightSection containerRef={containerRef as React.RefObject<HTMLDivElement>} />
        </div>
      </section>

      {/* Hover tooltip image */}
      {/* {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="absolute z-20 pointer-events-none"
          style={{
            top: coords.y + 150,
            left: coords.x,
          }}
        >
          <div className="backdrop-blur-md rounded-2xl">
            <Image
              src="/img/𝗆𝖺𝗍𝖼𝗁𝗂𝗇𝗀 ㅤㅤ𝗂𝖼𝗈𝗇𝗌  !! (2).jpeg"
              alt="hover-preview"
              width={160}
              height={160}
              className="rounded-xl"
            />
          </div>
        </motion.div>
      )} */}
    </div>
  )
}

export default EditorShowcase