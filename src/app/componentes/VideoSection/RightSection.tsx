"use client"
import { motion } from "motion/react"
import { useRef, useState } from "react"
import { Pause, Play, Volume2, VolumeX, Maximize } from "lucide-react"

const VideoSlider = () => {
  const [videoIndex, setVideoIndex] = useState(0)
  const [ismuted, setIsmuted] = useState(false)
  const [isplay, setIsplay] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = [
    "/brothers.mp4", // second video
    "/cc1 (1).mp4", // first video
  ]

  const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setVideoIndex(value < 50 ? 0 : 1)
  }

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsplay(true)
      } else {
        videoRef.current.pause()
        setIsplay(false)
      }
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      const value = !videoRef.current.muted
      videoRef.current.muted = value
      setIsmuted(value)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <motion.div
      className="h-[100vh] border-white/30 border-2 relative flex flex-col justify-center items-center bg-black rounded-2xl w-1/2 overflow-hidden group cursor-pointer shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Video container */}
      <div className="h-[50vh] p-6 backdrop-blur-xl shadow-xl rounded-2xl w-full relative">
        <div className="relative w-full h-full">
          <video
            key={videoIndex}
            ref={videoRef}
            src={videos[videoIndex]}
            className="w-full h-full object-cover rounded-xl"
            playsInline
            preload="auto"
            onPlay={() => setIsplay(true)}
            onPause={() => setIsplay(false)}
          />
        </div>
      </div>

      {/* Controls bar */}
      <div className="max-w-full w-[90%] h-12 flex items-center justify-between px-2 py-1 bg-white/10 backdrop-blur-md mt-2 rounded-lg">
        <div className="flex items-center gap-2">
          {/* Play / Pause */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePlay}
            className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white transition-all"
            style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {isplay ? <Pause size={16} /> : <Play size={16} />}
          </motion.button>

          {/* Mute / Unmute */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleMute}
            className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white transition-all"
            style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {ismuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </motion.button>
        </div>


        <div>
        <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePlay}
            className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white transition-all"
            style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
         duration
          </motion.div>

        </div>
        {/* Fullscreen */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleFullscreen}
          className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white transition-all"
          style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Maximize size={16} />
        </motion.button>
      </div>

      {/* Slider control */}
      <div className="w-1/2 mt-6">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          onChange={handleVideo}
          className="w-full accent-pink-500 cursor-pointer"
        />
      </div>

      {/* Fake Mac-style window buttons */}
      <div className="absolute top-4 left-4 flex items-center justify-center gap-2 z-50">
        <button className="h-3.5 w-3.5 bg-red-500 rounded-full border border-red-700 shadow-inner" />
        <button className="h-3.5 w-3.5 bg-yellow-400 rounded-full border border-yellow-500 shadow-inner" />
        <button className="h-3.5 w-3.5 bg-green-500 rounded-full border border-green-700 shadow-inner" />
      </div>
    </motion.div>
  )
}

export default VideoSlider
