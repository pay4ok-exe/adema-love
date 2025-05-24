"use client"
import { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

export default function CountdownTimer({ targetDate, onComplete }) {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-center"
        >
          <span className="text-4xl font-romantic text-romantic-gold">
            ✨ Уақыты келді! ✨
          </span>
        </motion.div>
      )
    } else {
      return (
        <div className="flex gap-4 justify-center">
          <div className="text-center">
            <div className="bg-romantic-rose/20 rounded-lg p-4">
              <span className="text-3xl font-bold text-romantic-rose">{hours}</span>
            </div>
            <span className="text-sm text-gray-600">сағат</span>
          </div>
          <div className="text-center">
            <div className="bg-romantic-rose/20 rounded-lg p-4">
              <span className="text-3xl font-bold text-romantic-rose">{minutes}</span>
            </div>
            <span className="text-sm text-gray-600">минут</span>
          </div>
          <div className="text-center">
            <div className="bg-romantic-rose/20 rounded-lg p-4">
              <span className="text-3xl font-bold text-romantic-rose">{seconds}</span>
            </div>
            <span className="text-sm text-gray-600">секунд</span>
          </div>
        </div>
      )
    }
  }

  return <Countdown date={targetDate} renderer={renderer} onComplete={onComplete} />
}