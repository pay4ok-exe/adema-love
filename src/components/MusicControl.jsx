"use client"
import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicControl({ src }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio

    // Auto-play attempt after user interaction
    const playAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true)
          setShowToast(true)
          setTimeout(() => setShowToast(false), 3000)
        })
        .catch(() => {
          setIsPlaying(false)
        })
      
      // Remove listener after first interaction
      document.removeEventListener('click', playAudio)
    }

    // Wait for user interaction
    document.addEventListener('click', playAudio)

    return () => {
      document.removeEventListener('click', playAudio)
      audio.pause()
      audio.src = ''
    }
  }, [src])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  return (
    <>
      {/* Fixed Music Button - Top Right */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-romantic-rose" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        )}
      </motion.button>

      {/* Toast Notification - Fixed for Mobile */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex items-center justify-center gap-2">
              <Volume2 className="w-4 h-4 text-romantic-rose" />
              <span className="text-sm font-medium text-gray-700">
                Музыка ойнатылуда 🎵
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}