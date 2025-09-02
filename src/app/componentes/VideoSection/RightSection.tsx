"use client"
import { motion } from "motion/react"
import { useRef, useState, useEffect } from "react"
import { Pause, Play, Volume2, VolumeX, Maximize } from "lucide-react"

const VideoSlider = () => {
  const [videoIndex, setVideoIndex] = useState(0)
  const [ismuted, setIsmuted] = useState(false)
  const [isplay, setIsplay] = useState(false)
  const [durations, setDurations] = useState<number[]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = [
    "/brothers.mp4",
    "/cc1 (1).mp4",
  ]

  // Switch videos with range slider
  const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setVideoIndex(value < 50 ? 0 : 1)
  }

  // Get video duration
  const handleMetadata = (e: React.SyntheticEvent<HTMLVideoElement>, index: number) => {
    const duration = e.currentTarget.duration
    setDurations((prev) => {
      const updated = [...prev]
      updated[index] = duration
      return updated
    })
  }

  // Track current time
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    video.addEventListener("timeupdate", updateTime)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
    }
  }, [videoIndex])

  // Reset time when video changes
  useEffect(() => {
    setCurrentTime(0)
    setIsplay(false)
  }, [videoIndex])

  // Play / Pause toggle
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

  // Mute / Unmute toggle
  const handleMute = () => {
    if (videoRef.current) {
      const value = !videoRef.current.muted
      videoRef.current.muted = value
      setIsmuted(value)
    }
  }

  // Fullscreen
  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  // Format seconds → mm:ss
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00"
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`
  }

  const progressPercent = durations[videoIndex]
    ? (currentTime / durations[videoIndex]) * 100
    : 0

  return (
    <motion.div
      className="h-[100vh] border-white/30 border-2 relative flex flex-col justify-center items-center bg-black rounded-2xl w-[40%] overflow-hidden group cursor-pointer shadow-2xl"
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
            onLoadedMetadata={(e) => handleMetadata(e, videoIndex)}
            className="w-full h-full object-cover rounded-xl"
            playsInline
            preload="auto"
            muted={ismuted}
            onPlay={() => setIsplay(true)}
            onPause={() => setIsplay(false)}
          />
        </div>
      </div>

      {/* Controls bar with seeker */}
      <div className="max-w-full w-[93%] flex flex-col gap-2 px-2 py-1 bg-white/10 backdrop-blur-md mt-2 rounded-lg">
        {/* seeker bar */}
      

        {/* buttons row */}
        <div className="w-full h-10 flex items-center justify-between">
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

          {/* Time display */}
          <div className="w-full flex flex-col items-center justify-center ">
  <div
          className="w-[60%] bg-white/10 rounded-full h-1 relative"
          onClick={(e) => {
            if (!videoRef.current || !durations[videoIndex]) return
            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
            const clickX = e.clientX - rect.left
            const percent = (clickX / rect.width) * 100
            const newTime = (percent / 100) * durations[videoIndex]
            videoRef.current.currentTime = newTime
            setCurrentTime(newTime)
          }}
        > 

          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-200"
            style={{
              width: `${Math.min(progressPercent, 100)}%`,
              willChange: "width"
            }}
          />
          duration
          {/* <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md cursor-pointer"
            style={{ left: `calc(${Math.min(progressPercent, 100)}% - 6px)` }}
            draggable
            onDrag={(e) => {
              if (!durations[videoIndex] || !videoRef.current) return
              const rect = (e.currentTarget.parentElement as HTMLDivElement).getBoundingClientRect()
              const percent = ((e.clientX - rect.left) / rect.width) * 100
              if (percent >= 0 && percent <= 100) {
                const newTime = (percent / 100) * durations[videoIndex]
                videoRef.current.currentTime = newTime
                setCurrentTime(newTime)
              }
            }}
          /> */}
        </div>
          <div className="text-white text-xs">
            {formatTime(currentTime)} / {durations[videoIndex] ? formatTime(durations[videoIndex]) : "0:00"}
          </div>

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
      </div>

      {/* Video switch slider */}
      <div className="w-1/2 mt-4">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          onChange={handleVideo}
          className="w-full accent-blue-500 cursor-pointer"
        />
      </div>

      {/* Fake Mac-style window buttons */}
      <div className="absolute top-2 left-4 right-4 flex items-center justify-between z-50">
        <div className="flex gap-2">
          <button className="h-3.5 w-3.5 bg-red-500 rounded-full border border-red-700 shadow-inner" />
          <button className="h-3.5 w-3.5 bg-yellow-400 rounded-full border border-yellow-500 shadow-inner" />
          <button className="h-3.5 w-3.5 bg-green-500 rounded-full border border-green-700 shadow-inner" />
        </div>
        <div className="flex items-center">
          <p className="text-white text-sm">Transformation videos</p>
        </div>
        <button className="h-5 w-5 bg-gray-400 rounded-full border border-green-700 shadow-inner flex items-center justify-center text-white text-xs font-bold">
          i
        </button>
      </div>
    </motion.div>
  )
}

export default VideoSlider
