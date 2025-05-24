"use client"
import { motion } from 'framer-motion'

const nicknames = [
  "Адема", "Ато", "Ақкөке", "Бато", 
  "Тато", "Атуу", "Таатууу", "Баатуу", "Әтәәу"
]

export default function Nicknames() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {nicknames.map((name, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 0] }}
          className="bg-gradient-to-r from-romantic-pink to-romantic-rose text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
        >
          {name} 💕
        </motion.span>
      ))}
    </div>
  )
}