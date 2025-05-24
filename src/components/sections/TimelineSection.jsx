"use client"
import { motion } from 'framer-motion'
import Timeline from '@/components/Timeline'
import { loveData } from '@/data/content'
import { Clock, ArrowRight } from 'lucide-react'

export default function TimelineSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-romantic-lavender/20 to-white py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <Clock className="w-12 h-12 text-romantic-rose mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-special gradient-text">
            Біздің тарихымыз 📖
          </h2>
          <p className="text-gray-600 mt-2 font-elegant">
            Әр сәт - ерекше, әр күн - есте қалады
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-12">
          <Timeline events={loveData.timeline} />
        </div>

        {/* Next Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="mx-auto flex items-center gap-2 bg-gradient-to-r from-romantic-rose to-romantic-pink text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Келесі бөлім <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.section>
  )
}