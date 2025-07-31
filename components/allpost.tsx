'use client'

import { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Rocket, ArrowRight, ArrowLeft } from 'lucide-react'

type AllPostsProps = {
  posts: { uid: string; slug: string; subtitle: any }[]
}

const handleSubtitle = (subtitle: any): string => {
  if (typeof subtitle === "string") return subtitle
  if (Array.isArray(subtitle)) return subtitle.map((item: any) => item.text).join(" ")
  if (typeof subtitle === "object" && subtitle.text) return subtitle.text
  return "No subtitle available"
}

function formatSlug(slug) {
  return slug
    .replace(/-/g, ' ') 
    .replace(/\b\w/g, char => char.toUpperCase()); 
}


const MotionCard = motion(Card)

export default function AllPosts({ posts }: AllPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextPost = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  const prevPost = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <div ref={containerRef} className="relative min-h-screen py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-indigo-900/20 backdrop-blur-3xl rounded-3xl"></div>
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          backgroundSize: '200% 200%',
        }}
      />

      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-white relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        All Post
      </motion.h1>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPost}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPost}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <MotionCard
            className="bg-white/10 backdrop-blur-md border-none overflow-hidden hover:shadow-[0_0_30px_rgba(19,38,211,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Link href={`/explore/${posts[currentIndex].uid}`}>
              <CardContent className="p-6 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold text-white mb-2 flex items-center">
                    {formatSlug(posts[currentIndex].slug)}
                    <Sparkles className="w-5 h-5 ml-2 text-yellow-400" />
                  </h2>
                  <p className="text-gray-200">{handleSubtitle(posts[currentIndex].subtitle)}</p>
                  <motion.div
                    className="mt-4 flex items-center text-blue-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore
                  </motion.div>
                </div>
              </CardContent>
            </Link>
          </MotionCard>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 gap-4 mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate={controls}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.uid}
              variants={variants}
              custom={index}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer ${index === currentIndex ? 'ring-2 ring-blue-500 rounded-xl' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium text-white truncate">{formatSlug(post.slug)}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}