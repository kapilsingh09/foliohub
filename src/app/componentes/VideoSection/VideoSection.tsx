"use client"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import Rightsection from './RightSection'

// Mock VideoSlider component - replace with your actual component
const VideoSlider = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => (
  <div className="h-full w-full bg-gray-800 rounded-xl flex items-center justify-center">
    <p className="text-white">Video Player Component</p>
  </div>
)

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
      className="bg-black min-h-screen h-full w-full text-white flex flex-col items-center justify-center gap-6 md:gap-12 px-4 py-5 md:px-12 relative overflow-hidden"
    >
      {/* Header - Responsive */}
      <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-6 text-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Video Editing Portfolio
        </motion.h1>
      </div>

      <section className="flex flex-col lg:flex-row h-full w-full flex-1 items-start lg:items-center justify-between gap-6 md:gap-8">
        {/* LEFT SECTION - Before/After Images */}
        <div className="h-full w-full lg:w-1/2 flex flex-col justify-between gap-6 md:gap-8">
          {/* Before Editing - Mobile stacked, Desktop side by side */}
          <motion.div className="relative flex flex-col lg:flex-row items-center lg:items-start group">
            <div
              className="relative z-10 w-full lg:w-auto flex justify-center lg:justify-start mb-4 lg:mb-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative overflow-hidden rounded-2xl w-full h-[30vh] md:h-[40vh] lg:h-[50vh] max-w-sm lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop&crop=center"
                  alt="Before Editing"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="relative z-10 text-center lg:text-left lg:ml-6 lg:mt-6 w-full lg:w-2/3">
              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl font-semibold font-sans text-white mb-2 lg:mb-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Before Editing
              </motion.h2>
              <motion.p
                className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light px-2 lg:px-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Raw footage straight from the camera — unpolished, simple, and
                waiting to be transformed into something cinematic.
              </motion.p>
            </div>
          </motion.div>

          {/* After Editing - Mobile stacked, Desktop side by side */}
          <motion.div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-end group">
            <div
              className="relative z-10 w-full lg:w-auto flex justify-center lg:justify-end mb-4 lg:mb-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative overflow-hidden rounded-2xl w-full h-[30vh] md:h-[40vh] lg:h-[50vh] max-w-sm lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center"
                  alt="After Editing"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="relative z-10 text-center lg:text-left lg:mr-6 lg:mb-6 w-full lg:w-2/3">
              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2 lg:mb-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                After Editing
              </motion.h2>
              <motion.p
                className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light px-2 lg:px-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Enhanced with color grading, smooth transitions, and creative
                effects that turn the raw clips into a professional visual story.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SECTION - Video Player */}
        <div className="h-full w-full lg:w-1/2 flex items-center justify-center">
          <Rightsection containerRef={containerRef as React.RefObject<HTMLDivElement>} />
        </div>
      </section>

      {/* Hover tooltip image - Hidden on mobile for better performance */}
      {isHovered && window.innerWidth >= 1024 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="absolute z-20 pointer-events-none hidden lg:block"
          style={{
            top: coords.y + 150,
            left: coords.x,
          }}
        >
          <div className="backdrop-blur-md rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=160&h=160&fit=crop&crop=center"
              alt="hover-preview"
              className="w-40 h-40 rounded-xl object-cover"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default EditorShowcase