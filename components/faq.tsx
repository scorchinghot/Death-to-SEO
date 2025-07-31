'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Search, Code, Brain, Database, Globe } from 'lucide-react'

const faqs = [
  {
    question: "What exactly is Computer Science?",
    answer: "Computer Science is the study of logic and how we use it to solve problems. It's about manipulating information to create solutions—whether it's building apps, analyzing data, or understanding how computers make decisions. It's not just about computers, but about the fundamental principles of information and computation.",
    icon: <Brain className="w-6 h-6 text-purple-500" />
  },
  {
    question: "How does Google Search work?",
    answer: "Google Search uses complex algorithms to organize and rank information. These algorithms are constantly evolving systems that improve over time by learning from user behavior. Understanding how search engines work is a great example of applying computer science principles to real-world problems.",
    icon: <Search className="w-6 h-6 text-purple-500" />
  },
  {
    question: "How do I get started in Computer Science?",
    answer: "Start by understanding the basics of logic and algorithmic thinking. Practice breaking down problems into smaller steps. Learn about data storage and processing. Then, explore specialized topics like AI, web development, or cybersecurity. Remember, it's about understanding the 'why' behind how things work.",
    icon: <Code className="w-6 h-6 text-purple-500" />
  },
  {
    question: "What is the purpose of Lindot?",
    answer: "Lindot aims to make computer science not just accessible, but truly understandable. It focuses on explaining the logic and reasoning behind how things work, helping you connect the dots between concepts. The goal is to provide clear explanations that make complex ideas click, without jargon or fluff.",
    icon: <Globe className="w-6 h-6 text-purple-500" />
  },
  {
    question: "What can I expect to learn from Lindot?",
    answer: "With Lindot, you can expect big picture overviews of core concepts, in-depth looks at key topics like algorithms and AI, and practical insights. Whether you're learning about binary, tackling algorithms, or exploring AI, you'll gain confidence and deeper understanding of how everything in computer science fits together.",
    icon: <Database className="w-6 h-6 text-purple-500" />
  }
]

export default function AdvancedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="h-fit max-w-6xl mx-auto rounded-3xl mb-24 bg-gradient-to-br from-teal-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Common Questions
        </motion.h2>
        
        <motion.div 
          className="mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border-2 border-purple-300 focus:outline-none focus:border-purple-500 transition duration-300"
          />
          <Search className="absolute right-3 top-2.5 text-purple-500" />
        </motion.div>

        <AnimatePresence>
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-gray-900 flex items-center">
                  {faq.icon}
                  <span className="ml-3">{faq.question}</span>
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-500" />
                )}
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-6 py-4 rounded-b-lg shadow-md mt-1"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredFaqs.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No matching questions found. Try a different search term.
          </motion.p>
        )}
      </div>
    </div>
  )
}