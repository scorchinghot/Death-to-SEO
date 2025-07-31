'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Code, Binary, GitBranch, Brain, ChevronRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const categories = [
  {
    title: "Intro to Coding",
    description: "Discover the fundamentals of programming and start your journey into the world of software development.",
    icon: Code,
    color: "#FF6B6B"
  },
  {
    title: "Binary Basics",
    description: "Unravel the mysteries of binary, the language that powers all digital systems and computations.",
    icon: Binary,
    color: "#4ECDC4"
  },
  {
    title: "Algorithmic Thinking",
    description: "Learn to solve complex problems efficiently by mastering the art of algorithmic design and analysis.",
    icon: GitBranch,
    color: "#45B7D1"
  },
  {
    title: "AI Foundations",
    description: "Explore the cutting-edge field of artificial intelligence and its transformative impact on technology.",
    icon: Brain,
    color: "#F7B731"
  }
]

const CategoryCard = ({ category, index, isSelected, onClick }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-lg p-6 cursor-pointer transition-all duration-300 ${
        isSelected ? 'bg-gray-800 shadow-lg scale-105' : 'bg-gray-900 hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br"
        style={{ background: `linear-gradient(135deg, ${category.color}22, ${category.color}00)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <category.icon className="w-12 h-12 mb-4" style={{ color: category.color }} />
        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
        <p className="text-gray-400">{category.description}</p>
      </div>
      <motion.div
        className="absolute bottom-2 right-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronRight className="w-6 h-6" style={{ color: category.color }} />
      </motion.div>
    </motion.div>
  )
}

const InteractiveSVG = () => {
  const svgRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (svgRef.current) {
        const { left, top, width, height } = svgRef.current.getBoundingClientRect()
        const x = (event.clientX - left) / width
        const y = (event.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.circle
        cx={mousePosition.x * 100}
        cy={mousePosition.y * 100}
        r="20"
        fill="url(#gradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default function AdvancedInteractiveCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const controls = useAnimation()
  const { theme } = useTheme()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <div className="relative h-fit max-w-6xl mx-auto rounded-3xl mb-24 bg-gray-900 text-white overflow-hidden">
      <InteractiveSVG />
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Popular Categories
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 text-gray-400"
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Perfect for starting out and diving into advance stuff
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              index={index}
              isSelected={selectedCategory === index}
              onClick={() => setSelectedCategory(index)}
            />
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href={'explore'}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
              Start Learning Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}