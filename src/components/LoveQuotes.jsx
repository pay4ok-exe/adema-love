"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const quotes = [
  "Айттыңба айт, Айтпадыңба айтпа",
  "Тисең ти, тимесең тиме",
  "Жазба десең жазалы, Жаз десең жазбайды",
  "Бастадыңба аяқта, Аяқтамасаң бастама",
  "Понимай не понимай, Все ровно поймешь",
]

export default function LoveQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-32 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Quote className="w-8 h-8 text-romantic-rose/30 mx-auto mb-2" />
          <p className="text-xl font-elegant text-gray-700 italic">
            "{quotes[currentQuote]}"
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}