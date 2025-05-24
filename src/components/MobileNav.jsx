"use client"
import { motion } from 'framer-motion'
import { Home, Heart, Clock, Camera, Mic, Gift } from 'lucide-react'

export default function MobileNav({ currentSection, setSection, totalSections }) {
  const navItems = [
    { icon: Home, label: "Басты" },
    { icon: Heart, label: "Хат" },
    { icon: Clock, label: "Тарих" },
    { icon: Heart, label: "Естелік" },
    { icon: Camera, label: "Фото" },
    { icon: Mic, label: "Дауыс" },
    { icon: Gift, label: "Сұрау" },
  ]

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-romantic-pink/20 px-2 py-2 pb-safe-bottom z-50 md:hidden"
    >
      <div className="flex justify-between items-center">
        {navItems.slice(0, totalSections).map((item, index) => {
          const Icon = item.icon
          const isActive = currentSection === index
          
          return (
            <button
              key={index}
              onClick={() => setSection(index)}
              className={`flex-1 flex flex-col items-center p-2 rounded-lg transition-all ${
                isActive
                  ? 'text-romantic-rose bg-romantic-pink/10'
                  : 'text-gray-400'
              }`}
            >
              <Icon size={20} className={isActive ? 'animate-heartbeat' : ''} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}