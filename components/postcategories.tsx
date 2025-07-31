'use client'

import { createClient } from "@/prismicio"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Sparkles } from 'lucide-react'

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
const MotionButton = motion(Button)

export default function PostCategories() {
  const client = createClient()
  const [allTags, setAllTags] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pages = await client.getAllByType("post")
        const tags = Array.from(new Set(pages.flatMap((post) => post.tags)))
        setAllTags(tags)
        if (tags.length > 0) {
          setSelectedTag(tags[0])
          const initialPosts = pages.filter((post) => post.tags.includes(tags[0]))
          setPosts(initialPosts)
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching posts:", error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (selectedTag) {
      const fetchPostsByTag = async () => {
        const pages = await client.getAllByType("post")
        const filteredPosts = pages.filter((post) => post.tags.includes(selectedTag))
        setPosts(filteredPosts)
      }
      fetchPostsByTag()
    }
  }, [selectedTag, client])

  const closePopup = () => setPopupVisible(false)

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    setPopupVisible(true)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            borderRadius: ["25%", "50%", "50%", "25%", "25%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-red-400"
        />
      </div>
    )
  }

  return (
    <div className="lg:absolute lg:top-[40%] right-4 z-50" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <motion.div 
          className="absolute inset-[-20px] bg-blue-500 opacity-50 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        ></motion.div>
        <MotionCard 
          className="w-64 overflow-hidden bg-gradient-to-br from-fuchsia-500/80 via-violet-600/80 via-40% to-red-400/80 to-100% backdrop-blur-md border-none relative z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <CardContent className="p-4">
            <ScrollArea className="h-[50vh]">
              <div className="space-y-2">
                {allTags.length > 0 ? (
                  allTags.map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: 0 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <MotionButton
                        variant="ghost"
                        className="w-full justify-start text-left text-white hover:text-black hover:bg-white/30 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-lg"
                        onClick={() => handleTagClick(tag)}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        {tag}
                      </MotionButton>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-white">No tags available.</p>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </MotionCard>
      </motion.div>

      <AnimatePresence>
        {isPopupVisible && selectedTag && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div 
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.div 
                className="absolute inset-[-20px] bg-blue-500 opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                }}
              ></motion.div>
              <MotionCard 
                className="w-full max-h-[90vh] overflow-hidden bg-gradient-to-br from-fuchsia-500 via-violet-600 via-40% to-red-400 to-100% backdrop-blur-md border-none relative z-10"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <motion.h3 
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Posts with tag: {selectedTag}
                    </motion.h3>
                    <MotionButton 
                      variant="ghost" 
                      size="icon" 
                      onClick={closePopup} 
                      className="text-white hover:bg-white/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="h-6 w-6" />
                    </MotionButton>
                  </div>
                  <ScrollArea className="h-[70vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {posts.length > 0 ? (
                        posts.map((post, index) => {
                          const formattedDate = post.first_publication_date
                            ? new Date(post.first_publication_date).toLocaleDateString()
                            : "No date available"
                          return (
                            <motion.div
                              key={post.id}
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <MotionCard 
                                className="h-full flex flex-col bg-white/10 backdrop-blur-md border-none overflow-hidden"
                                whileHover={{ 
                                  scale: 1.05, 
                                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                                  transition: { duration: 0.2 } 
                                }}
                              >
                                <CardContent className="p-6 flex-grow">
                                  <motion.h4 
                                    className="text-xl font-bold mb-2 text-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                  >
                                    {getTitleText(post)}
                                  </motion.h4>
                                  <motion.p 
                                    className="text-sm text-white/80 mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                  >
                                    {getSubtitleText(post)}
                                  </motion.p>
                                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white">{formattedDate}</Badge>
                                  <Link href={`/explore/${post.uid}`} passHref>
                                    <MotionButton 
                                      variant="secondary" 
                                      className="mt-auto w-full bg-white/20 text-white hover:bg-white/40 transition-all duration-300"
                                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Read more
                                    </MotionButton>
                                  </Link>
                                </CardContent>
                              </MotionCard>
                            </motion.div>
                          )
                        })
                      ) : (
                        <p className="text-white col-span-full">No posts available for this tag.</p>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </MotionCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}