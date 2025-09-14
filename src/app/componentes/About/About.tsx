import React from 'react'
import { SparklesCore } from '../ui/sparkles'
import { Video, Edit, Palette, Play, Award, Calendar, User } from 'lucide-react'

const skills = [
  { name: "Adobe Premiere Pro", icon: Video },
  { name: "After Effects", icon: Edit },
  { name: "DaVinci Resolve", icon: Play },
  { name: "Color Grading", icon: Palette },
  { name: "Cinematic Editing", icon: Video },
  { name: "Motion Graphics", icon: Edit }
]

const About = () => {
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
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            {/* <User className="w-8 h-8 text-pink-400" /> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              A Bit About Me
            </h2>
          </div>
        </div>

        <section className="flex flex-col lg:flex-row gap-8 lg:gap-6 max-w-6xl w-full">
          
          {/* Left - Image / Reel */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[45vh] lg:w-[45vh] rounded-full overflow-hidden shadow-2xl border-4 border-pink-400/20">
              <img
                src="/kaoruko pfp __.jpeg"
                alt="about-img"
                className="rounded-full h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            
            {/* Who Am I Section */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Video className="w-6 h-6 text-pink-400" />
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400">
                Who Am I?
              </h3>
            </div>
            
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              I&apos;m a passionate <span className="text-pink-400 font-semibold">Video Editor & Storyteller</span>
              {' '}who turns raw footage into captivating stories.
              With expertise in <span className="text-pink-400 font-semibold">cinematic editing, color grading, and motion graphics</span>,
              I craft videos that not only look stunning but also connect deeply with audiences.
            </p>

            {/* Animated Skills */}
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Edit className="w-5 h-5 text-pink-400" />
                <h4 className="text-lg font-semibold text-white">Skills & Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, i) => {
                  const IconComponent = skill.icon
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 text-sm bg-pink-500/20 text-pink-300 rounded-full border border-pink-400/40 hover:scale-105 hover:bg-pink-500/30 transition-all duration-200 cursor-default"
                    >
                      <IconComponent className="w-4 h-4" />
                      {skill.name}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Award className="w-5 h-5 text-pink-400" />
                  <p className="text-2xl sm:text-3xl font-bold text-pink-300">10+</p>
                </div>
                <p className="text-sm text-white/80">Projects Delivered</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  <p className="text-2xl sm:text-3xl font-bold text-pink-300">2+</p>
                </div>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default About