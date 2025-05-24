"use client"
import { useState, useRef } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VoiceMessage({ audioSrc, title, date }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime
    const duration = audioRef.current.duration
    setProgress((currentTime / duration) * 100)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
    >
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-14 h-14 bg-romantic-rose rounded-full flex items-center justify-center text-white hover:bg-romantic-pink transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{date}</p>
          
          <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-romantic-rose h-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
        
        <Volume2 className="text-romantic-rose" size={20} />
      </div>
    </motion.div>
  )
}