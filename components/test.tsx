'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { Brain, ChevronRight, Code, Database, Globe, Lock } from "lucide-react"

export default function AdvancedQuizCTA() {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 }
    })
  }, [controls])

  const iconComponents = [Brain, Code, Database, Globe, Lock]

  return (
    <div className="mx-auto mb-36 max-w-6xl px-4">
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#98FFE0] to-[#79E0FF]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
          <div className="max-w-xl">
            <motion.div 
              className="mb-4 text-lg font-medium text-[#8B5CF6]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Challenge Yourself
            </motion.div>
            <motion.h2 
              className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Test Your Computer Science Knowledge
            </motion.h2>
            <motion.p 
              className="mb-6 text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Got the hang of computer science? Time to put your knowledge to the test! Try out our interactive quizzes and see how much you've learned. Whether you're just starting out or diving into more advanced topics, there's always room to grow. 
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {iconComponents.map((Icon, index) => (
                <motion.div 
                  key={index}
                  className="p-2 bg-white rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-[#8B5CF6]" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            animate={controls}
          >
            <Link href={'/quiz'}>
              <motion.button 
                className="rounded-full bg-[#8B5CF6] px-8 py-4 font-medium text-white transition-colors hover:bg-[#7C3AED] md:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                Quiz me! 
                <ChevronRight className="inline-block ml-2" />
              </motion.button>
            </Link>
            {isHovered && (
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              />
            )}
          </motion.div>
        </div>

        <div className="absolute left-0 top-0 h-full w-full">
          <div className="relative h-full w-full">
            <motion.svg
              viewBox="0 0 600 600"
              className="absolute h-[150%] w-[150%] -translate-x-1/4 -translate-y-1/4"
              preserveAspectRatio="xMidYMid slice"
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.path
                d="M416.1 96.3C502.2 149.8 546.4 266.7 507.7 360.3 469 453.9 347.4 524.2 237.4 507.7 127.4 491.1 29 387.7 27.4 285.1 25.7 182.5 120.8 80.7 220.3 42.6 319.9 4.6 423.9 30.2 416.1 96.3Z"
                fill="#8B5CF6"
                fillOpacity="0.85"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </div>
  )
}