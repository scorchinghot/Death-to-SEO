'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import Link from "next/link"

function FloatingCard({ children }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect()
    const centerX = card.left + card.width / 2
    const centerY = card.top + card.height / 2
    const rotateY = (e.clientX - centerX) / 20
    const rotateX = (centerY - e.clientY) / 20
    setRotation({ x: rotateX, y: rotateY })
  }

  return (
    <motion.div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="w-full h-full shadow-xl border-none bg-zinc-400">
        {children}
      </Card>
    </motion.div>
  )
}

const generateTopicLink = (topic) => {
  const words = topic.split(' ');
  const firstLetter = words[0][0].toLowerCase();  
  const secondLetter = words[1] ? words[1][0].toLowerCase() : '';
  return `/resources/${firstLetter}${secondLetter}`;
};

const InteractiveGrid = ({ topics }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {topics.map((topic, index) => (
        <motion.div
          key={index}
          className="aspect-square rounded-lg cursor-pointer border p-4"
          whileHover={{ scale: 1.05 }}
          animate={{
            scale: hoveredIndex === index ? 1.1 : 1,
            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.7,
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <Link href={generateTopicLink(topic)}>
            <Card className="w-full h-full flex items-center bg-zinc-400 justify-center p-4">
              <h3 className="sm:text-xl text-xs font-semibold">{topic}</h3>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

const Rcogeries = () => {
  const topics = [
    'Algorithms & Data Structures',
    'Operating Systems',
    'Database Systems',
    'Computer Networks',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Cybersecurity',
    'Quantum Computing'
  ]

  return (
    <div className="min-h-screen text-foreground overflow-hidden">
      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="mb-12">
          <FloatingCard>
            <div className="p-8 flex justify-center items-center">
              <h2 className="text-3xl font-bold mb-4">Beginner Guides & Tutorials
                <Link href={"/resources/bg"}><button className='bg-zinc-300 hover:bg-[#ffffff00] border-black border-2 rounded-lg h-10 w-16 m-4 content-center'>&#x2192;</button></Link>
              </h2>
            </div>
          </FloatingCard>
        </section>

        <section className="mb-24">
          <InteractiveGrid topics={topics} />
        </section>
      </main>
    </div>
  )
}

export default Rcogeries
