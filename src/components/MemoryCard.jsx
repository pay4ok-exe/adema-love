"use client"
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function MemoryCard({ memory, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card className="p-6 h-full bg-gradient-to-br from-romantic-cream to-white border-romantic-pink/20 shadow-lg hover:shadow-xl transition-shadow">
        <p className="text-center text-gray-700 italic font-elegant">
          "{memory}"
        </p>
      </Card>
    </motion.div>
  )
}