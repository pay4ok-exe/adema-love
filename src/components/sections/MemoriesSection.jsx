"use client"
import { motion } from 'framer-motion'
import MemoryCard from '@/components/MemoryCard'
import { loveData } from '@/data/content'
import { Heart, ArrowRight, Sparkles } from 'lucide-react'

export default function MemoriesSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-white to-romantic-cream py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <Sparkles className="w-12 h-12 text-romantic-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-special gradient-text mb-2">
            Ұмытылмас сәттер ✨
          </h2>
          <p className="text-gray-600 font-elegant">
            Әр сөзің, әр күлкің есімде
          </p>
        </motion.div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {loveData.memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} index={index} />
          ))}
        </div>

        {/* Special Qualities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-8"
        >
          <h3 className="text-2xl font-romantic text-romantic-rose text-center mb-4">
            Сенің ерекше қасиеттерің 💝
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {loveData.herQualities.map((quality, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                className="bg-gradient-to-r from-romantic-lavender to-romantic-pink text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {quality}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {loveData.funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg"
            >
              <div className="text-3xl mb-2">{fact.emoji}</div>
              <p className="text-sm text-gray-700 font-elegant">{fact.fact}</p>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="mx-auto flex items-center gap-2 bg-gradient-to-r from-romantic-rose to-romantic-pink text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Фотоларға өту <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.section>
  )
}