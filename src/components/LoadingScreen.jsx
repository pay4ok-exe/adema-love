"use client"
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-romantic-cream to-romantic-lavender/30 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          <Heart size={60} className="text-romantic-rose" fill="currentColor" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-romantic text-romantic-rose"
        >
          Махаббат жүктелуде...
        </motion.p>
      </div>
    </motion.div>
  )
}