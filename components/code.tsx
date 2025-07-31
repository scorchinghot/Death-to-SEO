'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, RefreshCw, Copy, Check, Terminal } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeExecutionPlayground: React.FC = () => {
  const [code, setCode] = useState<string>('// Write your JavaScript code here\nconsole.log("Hello, World!");')
  const [output, setOutput] = useState<string>('')
  const [isExecuting, setIsExecuting] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  const executeCode = () => {
    setIsExecuting(true)
    setError(null)
    setOutput('')

    const originalConsoleLog = console.log
    const logs: string[] = []

    console.log = (...args) => {
      logs.push(args.map(arg => JSON.stringify(arg)).join(' '))
    }

    try {
      // do not use eval in production code
      new Function(code)()
      setOutput(logs.join('\n'))
    } catch (err) {
      setError(err.toString())
    } finally {
      console.log = originalConsoleLog
      setIsExecuting(false)
    }
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const resetCode = () => {
    setCode('// Write your JavaScript code here\nconsole.log("Hello, World!");')
    setOutput('')
    setError(null)
  }

  return (
    <div className="h-fit max-w-8xl mx-auto rounded-3xl text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Play around with simple code
      </motion.h1>
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-yellow-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
              />
            </div>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyCode}
                className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm flex items-center"
              >
                {isCopied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                {isCopied ? 'Copied!' : 'Copy'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetCode}
                className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Reset
              </motion.button>
            </div>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{
              padding: '20px',
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          >
            {code}
          </SyntaxHighlighter>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 bg-gray-900 text-white p-4 rounded-md mt-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
            spellCheck="false"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={executeCode}
            disabled={isExecuting}
            className={`mt-4 bg-purple-600 text-white px-6 py-2 rounded-md flex items-center justify-center ${
              isExecuting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
            }`}
          >
            {isExecuting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <RefreshCw className="w-5 h-5 mr-2" />
              </motion.div>
            ) : (
              <Play className="w-5 h-5 mr-2" />
            )}
            {isExecuting ? 'Executing...' : 'Run Code'}
          </motion.button>
        </div>
        <div className="bg-gray-900 p-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Terminal className="w-5 h-5 mr-2" />
            Output
          </h2>
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 mb-2"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
          <div
            ref={outputRef}
            className="bg-black rounded-md p-4 h-40 overflow-y-auto font-mono text-sm whitespace-pre-wrap"
          >
            {output}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeExecutionPlayground