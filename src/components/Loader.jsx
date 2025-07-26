import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
  "Hello", "Hola", "Bonjour", "नमस्ते", "こんにちは",
  "안녕하세요", "Ciao", "Olá", "Hallo", "Привет", "سلام"
]

const Loader = ({ onComplete }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < greetings.length - 3) {
      const interval = setTimeout(() => {
        setIndex(prev => prev + 1)
      }, 350)
      return () => clearTimeout(interval)
    } else {
      // After last greeting, give a small pause before hiding loader
      const finish = setTimeout(() => {
        if (onComplete) onComplete()
      }, 350)
      return () => clearTimeout(finish)
    }
  }, [index])

  return (
    <div className="h-screen w-screen bg-[#1a1a1a] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={greetings[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-orange-300 text-8xl font-bold text-center"
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}

export default Loader
