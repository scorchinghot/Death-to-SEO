'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronDown, Brain, Lightbulb, Compass, Code, Database, Cpu,  Book } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const BackgroundParticles = ({ count = 50 }) => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          width: Math.random() * 1 + 2,
          height: Math.random() * 1 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
)

export default function About() {
  const [activeSection, setActiveSection] = useState(0)
  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    animateShapes()
  }, [])

  const sections = [
    { title: "The Purpose of Lindot", icon: Brain },
    { title: "Why Do This", icon: Lightbulb },
    { title: "What You Can Expect", icon: Compass },
  ]

  const animateShapes = async () => {
    await controls.start(i => ({
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: { duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }
    }))
  }

  const learningPaths = [
    { title: "Fundamentals", icon: Code },
    { title: "Algorithms", icon: Cpu },
    { title: "Data Structures", icon: Database },
    { title: "AI & ML", icon: Brain },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BackgroundParticles />
        <div className="z-10 text-center px-4">
          <motion.h1
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Lindot
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where computer science is not just accessible but truly understandable. Whether you're just starting to explore a particular CS topic or ready to dive deep into complex ideas, Lindot's goal is to help you connect the dots between how things work and why they work the way they do. No jargon, no fluff—just clear explanations designed to make the concepts of computer science click.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ChevronDown className="w-12 h-12 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 relative">
        <BackgroundParticles count={30} />
        <div className="max-w-4xl mx-auto relative z-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => setActiveSection(index)}
              >
                <section.icon className="w-8 h-8 mr-4" />
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              {activeSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 pl-12 border-l-2 border-white"
                >
                  <span className="text-lg">
                    {index === 0 && "Computer science is all about understanding the logic and reasoning behind how things work, and how we can apply that knowledge to solve real-world problems. At its core, it's like math built on a set of assumptions (or axioms) that allows us to predict and understand outcomes under specific conditions. Or in simpler terms, it's a framework for discovering the why and the how behind the systems we interact with every day. The world of computer science can seem overwhelming at first, but once you break it down into clear, manageable pieces, it becomes much easier to understand. By focusing on the foundational concepts that drive everything from algorithms to the apps you use every day, you'll build a solid understanding. It’s like solving a puzzle: when you understand how the pieces fit together, everything else falls into place. This approach is based on the belief that once you understand the fundamentals, everything else just clicks into place. Think of it like solving a puzzle: each piece fits together when you understand how they all work as a whole."}
                    {index === 1 && "So, why? Oftentimes, people can solve problems without really understanding how or why their solution works. It’s not just about following a formula—it’s about navigating through the complexities of the problem. Think of it like solving a maze: once you see the whole layout from above, the path becomes much clearer. All you need is a methodical plan (an algorithm) that tells you when to turn and when to move forward. The real challenge comes when you know what to do but aren't sure how to express it correctly. That’s where the approach of computer science comes in. It’s about learning to express solutions in the right way—whether that’s through code, logic, or problem-solving strategies. But that is something anyone can help you with, Lindot is here to give you the tools, the mindset, and the resources you need to become a true problem solver. It’s not about memorizing formulas or rote learning; it’s about understanding concepts deeply and seeing the logic that connects everything."}
                    {index === 2 && (
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Big Picture Overviews: Clear, simple explanations of core concepts to help you see how everything fits together.</li>
                        <li>In-Depth Looks at Key Topics: Deep dives into algorithms, artificial intelligence, data structures, and more.</li>
                        <li>Practical Insights: Whether you're learning about binary, tackling algorithms, or exploring AI, you'll gain confidence and deeper understanding.</li>
                      </ul>
                    )}
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/10 backdrop-blur-lg relative overflow-hidden">
        <BackgroundParticles count={20} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lindot's Approach
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Break down complex concepts into clear, manageable pieces, making computer science accessible and enjoyable for everyone.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Simplify', 'Visualize', 'Apply'].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{approach}</h3>
                    <p>We {approach.toLowerCase()} complex CS concepts to make learning intuitive and engaging.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        {['circle', 'square', 'triangle'].map((shape, i) => (
          <motion.div
            key={shape}
            className={`absolute ${shape === 'circle' ? 'rounded-full' : shape === 'square' ? 'rounded-lg' : ''} bg-white/30`}
            style={{
              width: 100,
              height: 100,
              left: `${25 * (i + 1)}%`,
              top: `${Math.random() * 80}%`,
            }}
            custom={i}
            animate={controls}
          />
        ))}
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 relative">
        <BackgroundParticles count={40} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learning Pathways
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore different paths to mastering computer science concepts.
          </motion.p>
          <div className="relative h-[400px] flex flex-wrap gap-4 justify-center items-center">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                className="lg:absolute bg-white/20 backdrop-blur-sm rounded-lg p-4 w-48"
                style={{
                  left: `${(index % 2) * 80}%`,
                  top: `${Math.floor(index / 2) * 40}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <path.icon className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-lg font-bold">{path.title}</h3>
                <p className="text-sm">Explore {path.title.toLowerCase()} in computer science</p>
              </motion.div>
            ))}
            <svg className="absolute inset-0 left-[18%] w-full h-full" style={{ zIndex: -1 }}>
              <motion.path
                d="M 100 50 Q 200 100, 300 50 T 500 50"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </svg>
            <svg className="absolute inset-0 top-48 left-[18%] w-full h-full" style={{ zIndex: -1 }}>
              <motion.path
                d="M 100 50 Q 200 100, 300 50 T 500 50"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/10 backdrop-blur-lg relative overflow-hidden">
        <BackgroundParticles count={25} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learn at Your Own Pace
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're just starting out or looking for a beginner's guide to algorithms, our simple and accessible content will help you learn computer science at your own pace. Lindot might just be the thing you're looking for. The aim is simple: make learning CS enjoyable, approachable, and something you can feel confident in.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Resources", icon: Book, description: "Dive into a wide range of hands-on materials that make it easy to understand and apply computer science concepts." },
              { title: "Explore", icon: Compass, description: "Broaden your knowledge and curiosity from coding exercises to exploring the latest in AI or algorithms, there’s always something new to discover." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 rounded-t-full mt-36 lg:px-16 bg-gradient-to-b from-[#0c0f1a] via-[#1b2a43] to-[#3e537a] relative" style={{  boxShadow: "0 0 60px 30px rgba(70, 130, 180, 0.6), 0 0 80px 40px rgba(138, 43, 226, 0.6)"}} >
        <BackgroundParticles count={35} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join the Journey
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Keep exploring, keep asking questions, and most importantly—keep thinking about why things work the way they do.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          > 
            <Link href={"/explore"}>
              <Button
                variant="secondary"
                size="lg"
                className="text-purple-700 px-8 py-3 rounded-full text-xl font-bold"
              >
                Start Learning Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}