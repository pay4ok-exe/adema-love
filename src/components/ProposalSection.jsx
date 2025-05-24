"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Confetti from 'react-confetti'
import { Heart } from 'lucide-react'

export default function ProposalSection({ message }) {
  const [answer, setAnswer] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleYes = () => {
    setAnswer('yes')
    setShowConfetti(true)
  }

  const handleNo = () => {
    setAnswer('no')
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {showConfetti && <Confetti />}
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center max-w-2xl mx-auto p-8"
      >
        <h2 className="text-4xl md:text-6xl font-romantic text-romantic-rose mb-8">
          {message}
        </h2>

        {!answer && (
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleYes}
              className="bg-romantic-rose hover:bg-romantic-pink text-white px-8 py-6 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all"
            >
              <Heart className="mr-2" /> Иә, болайын! 💕
            </Button>
            <Button
              onClick={handleNo}
              variant="outline"
              className="border-romantic-rose text-romantic-rose hover:bg-romantic-rose/10 px-8 py-6 text-xl rounded-full"
            >
              Ойланайын 🤔
            </Button>
          </div>
        )}

        <AnimatePresence>
          {answer === 'yes' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <h3 className="text-3xl font-romantic text-romantic-gold mb-4">
                Мен сені жақсы көремін! ❤️
              </h3>
              <p className="text-xl text-gray-700">
                Бұл менің өмірімдегі ең бақытты сәт! 
                Сенімен бірге болашақты құрамыз! 🌟
              </p>
            </motion.div>
          )}

          {answer === 'no' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <p className="text-xl text-gray-700">
                Мен сені күтемін... Жүрегім әрқашан сенікі 💝 Мен сендікпін
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}