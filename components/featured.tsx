'use client'

import { createClient } from "@/prismicio"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Rocket, SpaceIcon as Planet } from 'lucide-react'

const getSubtitleText = (post: any) => {
  if (!post.data || !post.data.slices || post.data.slices.length === 0) {
    return "No subtitle available"
  }
  const slice = post.data.slices[0]
  const subtitle = slice.primary?.subtitle?.[0]?.text
  return subtitle || "No subtitle available"
}

const getTitleText = (post: any) => {
  if (!post.data || !post.data.slices || post.data.slices.length === 0) {
    return "No title available"
  }
  const slice = post.data.slices[0]
  const title = slice.primary?.title
  return title || "No title available"
}

const MotionCard = motion(Card)

const Featured = () => {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const controls = useAnimation()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      const client = createClient()
      const pages = await client.getAllByType("post")
      const filtered = pages.filter((page) => page.tags.includes("Featured"))
      setFeaturedPosts(filtered)
      setLoading(false)
      controls.start({ opacity: 1, y: 0 })
    }

    fetchFeaturedPosts()
  }, [controls])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Rocket className="w-12 h-12 text-blue-500" />
        </motion.div>
      </div>
    )
  }

  if (featuredPosts.length === 0) {
    return <p className="text-center text-gray-500">No featured posts available.</p>
  }

  return (
    <motion.div 
      className="relative overflow-hidden py-10 px-4"
      initial={{ opacity: 1, y: 50 }}
      animate={controls}
      style={{ y }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-indigo-900/20 backdrop-blur-3xl rounded-3xl z-0"></div>
      <motion.div 
        className="absolute inset-0 opacity-50"
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
      <h2 className="text-3xl font-bold text-center mb-8 text-white relative z-10">Featured Posts</h2>
      <div className="overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-max gap-6 pb-4 relative z-10]">
          {featuredPosts.map((post, index) => {
            const formattedDate = post.first_publication_date
              ? new Date(post.first_publication_date).toLocaleDateString()
              : "No date available"

            return (
              <Link key={post.id} href={`/explore/${post.uid}`} passHref>
                <MotionCard 
                  className="h-[50vh] w-[40vh] bg-white/10 backdrop-blur-md border-none overflow-hidden hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(19, 51, 234, 0.5)",
                  }}
                  initial={{ opacity: 1, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-blue-500 text-white">
                        Featured
                      </Badge>
                      <Star className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {getTitleText(post)}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 flex-grow">
                      {getSubtitleText(post)}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-xs text-gray-400">Published: {formattedDate}</p>
                      <Planet className="w-5 h-5 text-indigo-400" />
                    </div>
                  </CardContent>
                </MotionCard>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Featured