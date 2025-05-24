"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingMessage({ messages }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length)
        setIsVisible(true)
      }, 500)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className="fixed bottom-20 sm:bottom-8 right-4 left-4 sm:left-auto sm:max-w-sm z-40"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <p className="text-romantic-rose font-romantic text-base sm:text-lg text-center sm:text-left">
              {messages[currentIndex]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}