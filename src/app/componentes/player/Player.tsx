"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Share2, Eye, Play, Pause, Volume2, VolumeX, Settings, Monitor, Scissors, Palette, Zap } from "lucide-react";

interface VideoData {
  src: string;
  title: string;
  description: string;
  views: number | string;
  duration?: string;
  thumbnail?: string;
}

interface PlayerProps {
  close: () => void;
  video: VideoData;
}

const Player: React.FC<PlayerProps> = ({ close, video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();
  const lastTimeUpdateRef = useRef<number>(0);

  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Optimized controls auto-hide with debouncing
  const hideControlsWithDelay = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  }, [isPlaying]);

  // Show controls with debouncing
  const showControlsHandler = useCallback(() => {
    setShowControls(true);
    hideControlsWithDelay();
  }, [hideControlsWithDelay]);

  // Throttled mouse move handler to prevent excessive re-renders
  const handleVideoMouseMove = useCallback(() => {
    showControlsHandler();
  }, [showControlsHandler]);

  // Auto-hide controls when playing
  useEffect(() => {
    if (isPlaying) {
      hideControlsWithDelay();
    } else {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, hideControlsWithDelay]);

  // Auto-play on video load
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      }
    }
  }, [video]);

  const togglePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Play interrupted:", err);
          });
      }
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  }, [isMuted]);

  const toggleFullscreen = useCallback(() => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  }, []);

  // Format time function
  const formatTime = useCallback((seconds: number) => {
    if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  // Optimized video event handlers
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  }, []);

  // Ultra-fast throttled time update to prevent lag
  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const now = performance.now();
      
      // Throttle updates to every 200ms for smoother performance
      if (now - lastTimeUpdateRef.current > 200) {
        setCurrentTime(currentTime);
        lastTimeUpdateRef.current = now;
      }
    }
  }, []);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleWaiting = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handlePlaying = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Optimized video event listeners with minimal re-renders
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simple event handlers that only update necessary state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = (e: Event) => {
      console.error("Video error:", e);
      setIsLoading(false);
    };

    // Add event listeners
    video.addEventListener("play", handlePlay, { passive: true });
    video.addEventListener("pause", handlePause, { passive: true });
    video.addEventListener("loadedmetadata", handleLoadedMetadata, { passive: true });
    video.addEventListener("timeupdate", handleTimeUpdate, { passive: true });
    video.addEventListener("loadstart", handleLoadStart, { passive: true });
    video.addEventListener("canplay", handleCanPlay, { passive: true });
    video.addEventListener("waiting", handleWaiting, { passive: true });
    video.addEventListener("playing", handlePlaying, { passive: true });
    video.addEventListener("error", handleError, { passive: true });

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
    };
  }, [handleLoadedMetadata, handleTimeUpdate, handleLoadStart, handleCanPlay, handleWaiting, handlePlaying]);

  // Calculate progress percentage with safety check
  const progress = duration > 0 && isFinite(currentTime) ? Math.min((currentTime / duration) * 100, 100) : 0;

  const editingSoftware = [
    { name: "After Effects", icon: Zap },
    // { name: "Premiere Pro", icon: Scissors },
    { name: "DaVinci Resolve", icon: Palette }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: isPlaying 
          ? "rgba(0, 0, 0, 0.92)" 
          : "rgba(0, 0, 0, 0.85)"
      }}
    >
      {/* Optimized backdrop blur */}
      <div 
        className="absolute sm:overflow-y-hidden inset-0"
        style={{
          backdropFilter: isPlaying ? "blur(12px)" : "blur(6px)",
          transition: "backdrop-filter 0.3s ease",
          willChange: "backdrop-filter"
        }}
      />
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-4xl sm:overflow-y-hidden max-h-[85vh] bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10"
      >
        {/* Close Button */}
        <AnimatePresence>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={close}
            className="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          >
            <X size={18} />
          </motion.button>
        </AnimatePresence>

        <div className="flex h-full max-h-[85vh]">
          {/* Video Container */}
          <div
            className="relative flex-[2] min-h-0"
            ref={videoContainerRef}
            onMouseMove={handleVideoMouseMove}
            onMouseEnter={handleVideoMouseMove}
          >
            <video
              ref={videoRef}
              src={video.src}
              className="w-full h-full  rounded-l-2xl"
              preload="auto"
              playsInline
              webkit-playsinline="true"
              muted={false}
              style={{
                transform: "translateZ(0)", // Force hardware acceleration
                backfaceVisibility: "hidden",
                perspective: 1000,
              }}
            />

            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-l-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
                />
              </div>
            )}

            {/* Video Overlay Controls */}
            <AnimatePresence>
              {showControls && !isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 rounded-l-2xl"
                  style={{ willChange: "opacity" }}
                >
                  {/* Center Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={togglePlayPause}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-200"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </motion.button>
                  </div>

                  {/* Bottom Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlayPause}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMute}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </motion.button>

                      {/* Video Progress/Time */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/80">
                          {duration > 0 ? `${formatTime(currentTime)} / ${formatTime(duration)}` : (video.duration || "0:00")}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleFullscreen}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                      >
                        <Monitor size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Panel - Video Details */}
          <div className="flex-1 p-6 space-y-4 bg-gradient-to-b from-neutral-900/98 to-neutral-800/98 backdrop-blur-xl overflow-y-hidden">
            {/* Title and Description */}
            <div className="space-y-3 mt-3">
              <h2 className="text-xl font-bold text-white leading-tight">
                {video.title}
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {video.description}
              </p>
            </div>

            {/* View Count */}
            {/* <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span>Music Used:</span>
            </div> */}

            {/* Editing Software Used */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                <Monitor size={16} />
                Software Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {editingSoftware.map((software, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full px-3 py-2 text-xs text-neutral-200 backdrop-blur-sm shadow-lg hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <software.icon size={12} className="text-blue-400" />
                    <span className="font-medium">{software.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm shadow-lg ${
                  isLiked
                    ? "bg-gradient-to-r from-pink-500/30 to-red-500/30 text-pink-300 border border-pink-400/40 shadow-pink-500/20"
                    : "bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 text-white border border-white/20 hover:border-white/30"
                }`}
              >
                <Heart 
                  size={18} 
                  fill={isLiked ? "currentColor" : "none"}
                  className="transition-all duration-200"
                />
                <span>
                  {isLiked ? "Liked" : "Like"}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-blue-500/20"
              >
                <Share2 size={18} />
                <span>Share</span>
              </motion.button>
            </div>

            {/* Duration Info */}
            {(duration > 0 || video.duration) && (
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">
                    Duration: {duration > 0 ? formatTime(duration) : video.duration}
                  </span>
                  {duration > 0 && (
                    <span className="text-neutral-500">
                      {Math.round(progress)}% watched
                    </span>
                  )}
                </div>
                {/* Progress bar */}
                {duration > 0 && (
                  <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-200"
                      style={{ 
                        width: `${Math.min(progress, 100)}%`,
                        willChange: "width"
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Creator Info */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  D
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Dhruv</p>
                  <p className="text-neutral-400 text-xs">Video Editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Player;