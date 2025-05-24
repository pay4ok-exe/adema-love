"use client"
import { motion } from 'framer-motion'
import HeartAnimation from '@/components/HeartAnimation'
import CountdownTimer from '@/components/CountdownTimer'
import Nicknames from '@/components/Nicknames'
import { loveData } from '@/data/content'
import { ChevronDown } from 'lucide-react'

export default function WelcomeSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-romantic-cream via-white to-romantic-lavender/20 px-4 py-safe-top"
    >
      <HeartAnimation />
      
      <div className="w-full max-w-lg mx-auto text-center z-10 space-y-6">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-special gradient-text mb-2">
            {loveData.mainMessage.title}
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl text-gray-700 font-elegant">
            {loveData.mainMessage.subtitle}
          </p>
        </motion.div>

        {/* Nicknames */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Nicknames />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
        >
          <p className="text-base sm:text-lg mb-4 text-gray-600 font-elegant">
            Гүлдер келгенше:
          </p>
          <CountdownTimer 
            targetDate={loveData.flowerDeliveryTime}
            onComplete={() => {}}
          />
        </motion.div>

        {/* Start Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-gradient-to-r from-romantic-rose to-romantic-pink text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
        >
          Оқуды бастау 💌
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-romantic-rose/50" size={32} />
      </motion.div>
    </motion.section>
  )
}