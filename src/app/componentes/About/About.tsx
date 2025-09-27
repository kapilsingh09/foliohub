import React, { useRef } from 'react'
import Image from 'next/image'
import { SparklesCore } from '../ui/sparkles'
import { Video, Edit, Palette, Play, Award, Calendar } from 'lucide-react'
import { motion, useInView } from "motion/react"

// Assign different colors for each skill
const skills = [
  { name: "Adobe Premiere Pro", icon: Video, color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/40 hover:bg-yellow-500/30" },
  { name: "After Effects", icon: Edit, color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40 hover:bg-indigo-500/30" },
  { name: "DaVinci Resolve", icon: Play, color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 hover:bg-cyan-500/30" },
  { name: "Color Grading", icon: Palette, color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40 hover:bg-emerald-500/30" },
  { name: "Cinematic Editing", icon: Video, color: "bg-pink-500/20 text-pink-300 border-pink-400/40 hover:bg-pink-500/30" },
  { name: "Motion Graphics", icon: Edit, color: "bg-orange-500/20 text-orange-300 border-orange-400/40 hover:bg-orange-500/30" }
]

const About = () => {
  // Refs for scroll animation
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const skillsRef = useRef(null)
  const statsRef = useRef(null)

  // InView hooks
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" })
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" })
  const textInView = useInView(textRef, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen lg:h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-8 lg:py-0">
      
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#a78bfa" // violet-400 hex
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              A Bit About Me
            </h2>
          </div>
        </motion.div>

        <section className="flex flex-col lg:flex-row gap-8 lg:gap-6 max-w-6xl w-full">
          
          {/* Left - Image / Reel */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.85, x: -60 }}
            animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[45vh] lg:w-[45vh] rounded-full overflow-hidden shadow-2xl border-4 border-violet-400/20">
              <Image
                src="/kaoruko pfp __ (1).jpeg"
                alt="about-img"
                className="rounded-full h-full w-full object-cover hover:scale-102 transition-transform duration-300"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            
            {/* Who Am I Section */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, y: 40 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Video className="w-6 h-6 text-violet-400" />
              <h3 className="text-2xl sm:text-3xl font-bold text-violet-400">
                Who Am I? <span className="text-neutral-300 font-semibold ">— I&apos;m Dhruv</span>
              </h3>
            </motion.div>
            
            <motion.p
              ref={textRef}
              initial={{ opacity: 0, y: 40 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="text-white text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              I&apos;m a passionate <span className="text-violet-400 font-semibold">Video Editor & Storyteller</span>
              {' '}who turns raw footage into captivating stories.
              With expertise in <span className="text-violet-400 font-semibold">cinematic editing, color grading, and motion graphics</span>,
              I craft videos that not only look stunning but also connect deeply with audiences.
            </motion.p>

            {/* Animated Skills */}
            <motion.div
              ref={skillsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Edit className="w-5 h-5 text-violet-400" />
                <h4 className="text-lg font-semibold text-white">Skills & Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, i) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-full border hover:scale-105 transition-all duration-200 cursor-default ${skill.color}`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {skill.name}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Award className="w-5 h-5 text-violet-400" />
                  <p className="text-2xl sm:text-3xl font-bold text-violet-300">10+</p>
                </div>
                <p className="text-sm text-white/80">Projects Delivered</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-violet-400" />
                  <p className="text-2xl sm:text-3xl font-bold text-violet-300">2+</p>
                </div>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </motion.div>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
