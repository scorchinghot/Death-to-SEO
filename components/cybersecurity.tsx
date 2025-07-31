'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Lock, Unlock, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react'

interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  type: 'SQL Injection' | 'XSS' | 'Password Cracking' | 'Network Scanning'
  prompt: string
  solution: string | ((input: string) => boolean)
  hint: string
}

const challenges: Challenge[] = [
  {
    id: 'sql-1',
    title: 'Basic SQL Injection',
    description: 'Exploit a simple SQL injection vulnerability to bypass login.',
    difficulty: 'Easy',
    type: 'SQL Injection',
    prompt: 'Enter a username that will log you in as admin:',
    solution: (input: string) => input.toLowerCase().includes("' or '1'='1"),
    hint: "Try using a condition that's always true."
  },
  {
    id: 'xss-1',
    title: 'Reflected XSS',
    description: 'Inject a script that will alert "XSS" when the page loads.',
    difficulty: 'Medium',
    type: 'XSS',
    prompt: 'Enter a payload that will execute an alert:',
    solution: (input: string) => input.includes('<script>alert("XSS")</script>'),
    hint: "Use a <script> tag with an alert function."
  },
  {
    id: 'pwd-1',
    title: 'Simple Password Cracking',
    description: 'Crack a simple hashed password.',
    difficulty: 'Medium',
    type: 'Password Cracking',
    prompt: 'The hash is 5f4dcc3b5aa765d61d8327deb882cf99. What\'s the password?',
    solution: 'password',
    hint: "It's a very common password. Try looking up the hash online."
  },
  {
    id: 'net-1',
    title: 'Port Scanning Simulation',
    description: 'Identify open ports on a simulated network.',
    difficulty: 'Hard',
    type: 'Network Scanning',
    prompt: 'Enter the open ports (comma-separated) for IP 192.168.1.1:',
    solution: '22,80,443',
    hint: "Common web and SSH ports are often open."
  }
]

const CybersecurityChallenge: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge>(challenges[0])
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttempts(attempts + 1)

    const isCorrect = typeof currentChallenge.solution === 'function'
      ? currentChallenge.solution(userInput)
      : userInput.trim().toLowerCase() === currentChallenge.solution.toLowerCase()

    if (isCorrect) {
      setScore(score + 1)
      setFeedback('Correct! Moving to the next challenge...')
      setTimeout(() => {
        const nextIndex = challenges.findIndex(c => c.id === currentChallenge.id) + 1
        if (nextIndex < challenges.length) {
          setCurrentChallenge(challenges[nextIndex])
          setUserInput('')
          setFeedback('')
          setShowHint(false)
        } else {
          setIsCompleted(true)
        }
      }, 2000)
    } else {
      setFeedback('Incorrect. Try again or use the hint.')
    }
  }

  const resetChallenge = () => {
    setCurrentChallenge(challenges[0])
    setUserInput('')
    setFeedback('')
    setScore(0)
    setAttempts(0)
    setShowHint(false)
    setIsCompleted(false)
  }

  const terminalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="h-fit max-w-8xl mx-auto rounded-3xl text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Cybersecurity Challenge
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={terminalVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="bg-gray-900 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm font-mono">Ethical Hacking Terminal</div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={resetChallenge}
                className="text-gray-400 hover:text-white"
              >
                <RefreshCw className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          <div className="p-6">
            {!isCompleted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">{currentChallenge.title}</h2>
                <p className="text-gray-400 mb-4">{currentChallenge.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    currentChallenge.difficulty === 'Easy' ? 'bg-green-600' :
                    currentChallenge.difficulty === 'Medium' ? 'bg-yellow-600' : 'bg-red-600'
                  }`}>
                    {currentChallenge.difficulty}
                  </span>
                  <span className="px-2 py-1 rounded bg-blue-600 text-xs font-semibold">
                    {currentChallenge.type}
                  </span>
                </div>
                <p className="font-mono mb-4">{currentChallenge.prompt}</p>
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-grow bg-transparent border-b border-gray-700 focus:outline-none focus:border-purple-500 font-mono"
                      placeholder="Enter your solution..."
                    />
                  </div>
                </form>
                {feedback && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mb-4 ${feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {feedback}
                  </motion.p>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowHint(!showHint)}
                  className="text-purple-400 hover:text-purple-300 text-sm"
                >
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </motion.button>
                <AnimatePresence>
                  {showHint && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-yellow-500 mt-2 text-sm"
                    >
                      Hint: {currentChallenge.hint}
                    </motion.p>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="text-gray-400 mb-4">You've completed all the challenges.</p>
                <p className="text-xl mb-4">Final Score: {score}/{challenges.length}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetChallenge}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
                >
                  Start Over
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-between items-center text-gray-400"
        >
          <div>Score: {score}/{challenges.length}</div>
          <div>Attempts: {attempts}</div>
        </motion.div>
      </div>
    </div>
  )
}

export default CybersecurityChallenge