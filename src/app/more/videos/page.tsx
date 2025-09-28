"use client"

import React, { useState } from 'react'
import { PlayCircle, Clock, Calendar, Play } from 'lucide-react'
import Player from '@/app/componentes/player/Player'
import { motion } from 'motion/react'

// Define the type for video data (if not exported from Player)
type VideoData = {
  title: string
  duration: string
  date: string
  thumbnail: string
  src?: string
  description?: string
}

// Dummy data for the video grid (replace with your real video data)
const videoCatalogue: VideoData[] = [
  { 
    title: "Cinematic Reel 2024", 
    duration: "1:35", 
    date: "Jan 15, 2024", 
    thumbnail: "/path/to/cinematic_thumb.jpg",
    src: "/videos/brothers (1).mp4",
    description: "A fast-paced cinematic showcase of 2024 highlights."
  },
  { 
    title: "Vlog Editing Showcase", 
    duration: "4:00", 
    date: "Feb 28, 2024", 
    thumbnail: "/path/to/vlog_thumb.jpg",
    src: "/finalBMW.mp4",
    description: "A fun, energetic vlog edit with creative transitions."
  },
  { 
    title: "Motion Graphics Demo", 
    duration: "0:45", 
    date: "Mar 10, 2024", 
    thumbnail: "/path/to/motion_thumb.jpg",
    src: "/videos/OverlayThumb.mp4",
    description: "A quick demo of motion graphics and animation."
  },
  { 
    title: "Client Project - Ad", 
    duration: "0:30", 
    date: "Apr 05, 2024", 
    thumbnail: "/path/to/ad_thumb.jpg",
    src: "/videos/greenBMW.mp4",
    description: "A short, punchy ad for a client campaign."
  },
  { 
    title: "Client Project - Ad", 
    duration: "0:30", 
    date: "Apr 05, 2024", 
    thumbnail: "/path/to/ad_thumb.jpg",
    src: "/videos/Dhruv_Masterpiease.mp4",
    description: "A short, punchy ad for a client campaign."
  },
  // Add more videos here...
]

const VideoCatalogPage = () => {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<VideoData | null>(null)

  const handleVideoClick = (video: VideoData) => {
    setActiveVideo(video)
    setIsCardOpen(true)
  }

  return (
    <div className='min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8'>
      
      {/* Catalog Header */}
      <header className='max-w-7xl mt-10 mx-auto mb-10 text-center lg:text-left'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-violet-400 mb-2'>
          My Video Editing Portfolio
        </h1>
        <p className='text-lg text-gray-400'>
          A showcase of my recent work in cinematic editing, color grading, and motion graphics.
        </p>
      </header>

      {/* Main Content Area */}
      <main className='max-w-7xl mt-20 mx-auto'>
        
        {/* Featured Video Section (Responsive layout) */}
        {isCardOpen && activeVideo && (
          <Player video={activeVideo} close={() => setIsCardOpen(false)} />
        )}

        {/* Video Catalogue Grid Section */}
        <section>
          <h2 className='text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2'>
            More Projects
          </h2>

          {/* Use grid-cols-3 for normal, and don't show image if not present */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {videoCatalogue.map((video, index) => (
              <motion.div
                key={index}
                className='bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-violet-500/30 transition-shadow duration-300 cursor-pointer group hover:scale-[1.02]'
                onClick={() => handleVideoClick(video)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Thumbnail / Placeholder */}
                <div className='aspect-video bg-gray-700 relative flex items-center justify-center'>
                  {video.thumbnail ? (
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                    />
                  ) : null}
                  {/* Only show PlayCircle if no image */}
                  {!video.thumbnail && (
                    <PlayCircle size={32} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  )}
                  <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Video Info */}
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-white group-hover:text-violet-400 transition-colors truncate'>
                    {video.title}
                  </h3>
                  <div className='flex justify-between items-center text-xs text-gray-400 mt-2'>
                    <span className='flex items-center gap-1'>
                      <Clock className='w-3 h-3' />
                      {video.duration}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Calendar className='w-3 h-3' />
                      {video.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default VideoCatalogPage