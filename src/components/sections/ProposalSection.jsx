"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { Heart, Sparkles } from 'lucide-react'
import { loveData } from '@/data/content'
import useWindowSize from '@/hooks/useWindowSize'

export default function ProposalSection() {
  const [answer, setAnswer] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()

  const handleYes = () => {
    setAnswer('yes')
    setShowConfetti(true)
  }

  const handleNo = () => {
    setAnswer('no')
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-romantic-cream via-white to-romantic-lavender/20 flex items-center justify-center px-4 py-16"
    >
      {showConfetti && <Confetti width={width} height={height} />}
      
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Love Calculator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-romantic text-romantic-rose mb-4">
              Махаббат калькуляторы 💕
            </h3>
            <div className="text-6xl font-bold gradient-text mb-2">
              {loveData.loveCalculator.percentage}%
            </div>
            <p className="text-gray-700 font-elegant">
              {loveData.loveCalculator.message}
            </p>
          </div>
        </motion.div>

        {/* Proposal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Sparkles className="w-16 h-16 text-romantic-gold mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-special gradient-text mb-8">
            {loveData.mainMessage.proposal}
          </h2>

          {!answer && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="bg-gradient-to-r from-romantic-rose to-romantic-pink text-white px-8 py-4 text-xl rounded-full shadow-2xl transform transition-all flex items-center justify-center gap-2"
              >
                <Heart className="animate-heartbeat" /> Иә, болайын! 💕
              </motion.button>
              
              <motion.button
                whileHover={{ x: [0, -10, 10, -10, 10, 0] }}
                onClick={handleNo}
                className="border-2 border-romantic-rose text-romantic-rose px-8 py-4 text-xl rounded-full hover:bg-romantic-rose/10"
              >
                Ойланайын 🤔
              </motion.button>
            </div>
          )}

          <AnimatePresence>
            {answer === 'yes' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 space-y-4"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2 }}
                  className="inline-block"
                >
                  <Heart size={80} className="text-romantic-rose mx-auto" fill="currentColor" />
                </motion.div>
                
                <h3 className="text-3xl font-romantic text-romantic-gold">
                  Мен сені жақсы көремін! ❤️
                </h3>
                <p className="text-xl text-gray-700 font-elegant">
                  Бұл менің өмірімдегі ең бақытты сәт!<br />
                  Сенімен бірге болашақты құрамыз! 🌟
                </p>
                
                <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
                  <p className="text-lg font-elegant text-gray-700">
                    24.05.2025 - Біздің махаббат тарихының жаңа беті!<br />
                    Сені әрқашан бақытты етемін, сүйіктім! 💝
                  </p>
                </div>
              </motion.div>
            )}

            {answer === 'no' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
              >
                <p className="text-xl text-gray-700 font-elegant">
                  Мен сені күтемін... Жүрегім әрқашан сенікі 💝<br />
                  Ойланып, маған хабарлас 🥺
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  )
}