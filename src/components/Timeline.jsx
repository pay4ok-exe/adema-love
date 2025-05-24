"use client"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Timeline({ events }) {
  return (
    <div className="relative px-4">
      {/* Vertical line - hidden on mobile, shown on desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-romantic-pink to-romantic-rose"></div>
      
      {/* Mobile timeline */}
      <div className="md:hidden space-y-4">
        {events.map((event, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          })

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-romantic-pink to-romantic-rose rounded-full flex items-center justify-center text-xl shadow-lg">
                  {event.icon}
                </div>
                <div className="flex-1 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-romantic-rose mb-1">{event.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Desktop timeline */}
      <div className="hidden md:block">
        {events.map((event, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          })

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-romantic-pink rounded-full flex items-center justify-center text-2xl animate-heartbeat shadow-lg">
                {event.icon}
              </div>
              <div className="w-1/2 px-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <h4 className="font-bold text-romantic-rose mb-2">{event.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}