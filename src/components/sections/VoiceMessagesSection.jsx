// src/components/sections/VoiceMessagesSection.jsx
"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'  // ADD THIS IMPORT!
import VoiceMessage from '@/components/VoiceMessage'
import { loveData } from '@/data/content'
import { Mic, ArrowRight } from 'lucide-react'

export default function VoiceMessagesSection({ onNext }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-romantic-cream to-white py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <Mic className="w-12 h-12 text-romantic-rose mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-special gradient-text mb-2">
            Дауыстық хаттар 🎙️
          </h2>
          <p className="text-gray-600 font-elegant">
            Саған арналған сөздерім
          </p>
        </motion.div>

        {/* Voice Messages */}
        <div className="space-y-4 mb-8">
          {loveData.voiceMessages && loveData.voiceMessages.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <VoiceMessage
                audioSrc={voice.src}
                title={voice.title}
                date={voice.date}
              />
            </motion.div>
          ))}
        </div>

        {/* Chat Screenshots */}
        {loveData.chatScreenshots && loveData.chatScreenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-8"
          >
            <h3 className="text-xl font-romantic text-romantic-rose text-center mb-4">
              Біздің чаттан 💬
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {loveData.chatScreenshots.slice(0, 4).map((screenshot, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden shadow-lg relative aspect-[9/16]"
                >
                  <Image
                    src={screenshot}
                    alt={`Chat ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-romantic-rose to-romantic-pink text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Соңғы сөз <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.section>
  )
}