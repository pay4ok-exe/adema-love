"use client"
import { motion } from 'framer-motion'
import { loveData } from '@/data/content'
import LoveQuotes from '@/components/LoveQuotes'
import { Heart, ArrowRight } from 'lucide-react'

export default function ConfessionSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-white to-romantic-peach/20 flex flex-col justify-center px-4 py-16"
    >
      <div className="w-full max-w-2xl mx-auto">
        {/* Letter Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-romantic-rose mx-auto mb-4 animate-heartbeat" />
            <h2 className="text-3xl sm:text-4xl font-special gradient-text">
              Менің махаббат хатым
            </h2>
          </div>

          {/* Letter Content */}
          <div className="space-y-4 mb-8">
            {loveData.mainMessage.confession.split('\n').map((line, i) => (
              line.trim() && (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 }}
                  className="text-gray-700 leading-relaxed text-center font-elegant text-base sm:text-lg"
                >
                  {line.trim()}
                </motion.p>
              )
            ))}
          </div>

          {/* Love Quotes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mb-8"
          >
            <LoveQuotes />
          </motion.div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-romantic-pink to-romantic-rose text-white px-6 py-3 rounded-full font-medium shadow-lg"
          >
            Жалғастыру <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}