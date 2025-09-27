import React from 'react'
import { PlayCircle, Clock, Calendar } from 'lucide-react'

// Dummy data for the video grid (you'll replace this with your video data)
const videoCatalogue = [
  { title: "Cinematic Reel 2024", duration: "1:35", date: "Jan 15, 2024", thumbnail: "/path/to/cinematic_thumb.jpg" },
  { title: "Vlog Editing Showcase", duration: "4:00", date: "Feb 28, 2024", thumbnail: "/path/to/vlog_thumb.jpg" },
  { title: "Motion Graphics Demo", duration: "0:45", date: "Mar 10, 2024", thumbnail: "/path/to/motion_thumb.jpg" },
  { title: "Client Project - Ad", duration: "0:30", date: "Apr 05, 2024", thumbnail: "/path/to/ad_thumb.jpg" },
  // Add more videos here...
]

const VideoCatalogPage = () => {
  return (
    <div className='min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8'>
      
      {/* Catalog Header */}
      <header className='max-w-7xl mx-auto mb-10 text-center lg:text-left'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-violet-400 mb-2'>
          My Video Editing Portfolio
        </h1>
        <p className='text-lg text-gray-400'>
          A showcase of my recent work in cinematic editing, color grading, and motion graphics.
        </p>
      </header>

      {/* Main Content Area */}
      <main className='max-w-7xl mx-auto'>
        
        {/* Featured Video Section (Responsive layout) */}
        <section className='flex flex-col lg:flex-row gap-8 mb-16'>
          
          {/* Video Player Placeholder - Left Side */}
          <div className='w-full lg:w-3/5 aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl relative group'>
            {/* Replace this div with your actual video component (e.g., iframe, next/video, etc.) */}
            <div className='w-full h-full flex items-center justify-center text-gray-500'>
              <PlayCircle size={64} className="opacity-70 group-hover:opacity-100 transition duration-300" />
            </div>
            {/* Example of an overlay title */}
            <div className='absolute bottom-0 left-0 bg-black/50 p-4 w-full'>
                <h3 className='text-lg font-bold text-white'>Featured Work: My Best Of Reel</h3>
            </div>
          </div>

          {/* Video Details/Description - Right Side */}
          <div className='w-full lg:w-2/5 flex flex-col justify-center'>
            <h2 className='text-3xl font-bold text-white mb-4 border-b border-violet-400/30 pb-2'>
              The Power of Storytelling
            </h2>
            <p className='text-gray-300 leading-relaxed mb-6'>
              This reel represents my core skills, focusing on sharp transitions, impactful color grading, and precise audio synchronization. Every frame is designed to elicit an emotional response.
            </p>
            
            {/* Meta Data / Stats */}
            <div className='flex flex-wrap gap-4 text-sm text-gray-400'>
              <span className='flex items-center gap-2 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/30'>
                <Clock className='w-4 h-4 text-violet-300' />
                Total Duration: 2:15
              </span>
              <span className='flex items-center gap-2 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/30'>
                <Calendar className='w-4 h-4 text-violet-300' />
                Published: Sep 2024
              </span>
            </div>
          </div>
        </section>

        {/* Video Catalogue Grid Section */}
        <section>
          <h2 className='text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2'>
            More Projects
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {videoCatalogue.map((video, index) => (
              <div 
                key={index} 
                className='bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-violet-500/30 transition-shadow duration-300 cursor-pointer group hover:scale-[1.02]'
              >
                {/* Thumbnail / Placeholder */}
                <div className='aspect-video bg-gray-700 relative flex items-center justify-center'>
                  <PlayCircle size={32} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  {/* <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" /> */}
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
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default VideoCatalogPage