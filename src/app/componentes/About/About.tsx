import React from 'react'
import { BackgroundRippleEffect } from '../ui/background-ripple-effect'
import { SparklesCore } from '../ui/sparkles'

const skills = ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Cinematic Editing", "Motion Graphics"]

const About = () => {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      {/* Sparkles Background - positioned absolutely within the container bug of h-[40rem] */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content Container - positioned relative to overlay on sparkles */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-10 tracking-wide">
         Bit About Me
        </h2>

        <section className="flex gap-6 max-w-6xl w-full px-4">
          
          {/* Left - Image / Reel */}
          <div className="rounded-2xl h-[50vh] w-1/2 flex items-center justify-center">
            <div className="h-[45vh] w-[45vh] rounded-full overflow-hidden shadow-lg">
              <img 
                src="/kaoruko pfp __.jpeg" 
                alt="about-img" 
                className="rounded-full h-full w-full object-cover" 
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="rounded-2xl h-[50vh] w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-left mb-4 text-pink-400">
              Who Am I?
            </h3>
            <p className="text-white text-lg text-left leading-relaxed mb-6">
              I&apos;m a passionate <span className="text-pink-400 font-semibold">Video Editor & Storyteller</span> 
              who turns raw footage into captivating stories. 
              With expertise in <span className="text-pink-400 font-semibold">cinematic editing, color grading, and motion graphics</span>, 
              I craft videos that not only look stunning but also connect deeply with audiences. 
              
            </p>

            {/* Animated Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full border border-pink-400/40 hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 text-pink-300 font-semibold">
              <div>
                <p className="text-3xl">10+</p>
                <p className="text-sm text-white/80">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl">2+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
              {/* <div>
                <p className="text-3xl">100%</p>
                <p className="text-sm text-white/80">Client Satisfaction</p>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
