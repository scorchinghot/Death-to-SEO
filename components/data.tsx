'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Plus, Minus, RotateCcw, ArrowRight } from 'lucide-react'

type Node<T> = {
  value: T
  next?: Node<T>
  prev?: Node<T>
}

type DataStructure = 'stack' | 'queue' | 'linkedList'

const DataStructureVisualizer: React.FC = () => {
  const [dataStructure, setDataStructure] = useState<DataStructure>('stack')
  const [nodes, setNodes] = useState<Node<number>[]>([])
  const [inputValue, setInputValue] = useState('')
  const [operation, setOperation] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const addNode = useCallback((value: number) => {
    setOperation('add')
    if (dataStructure === 'stack' || dataStructure === 'queue') {
      setNodes(prev => [...prev, { value }])
    } else if (dataStructure === 'linkedList') {
      setNodes(prev => {
        const newNode = { value }
        if (prev.length > 0) {
          newNode.prev = prev[prev.length - 1]
          prev[prev.length - 1].next = newNode
        }
        return [...prev, newNode]
      })
    }
    setTimeout(() => setOperation(null), 500)
  }, [dataStructure])

  const removeNode = useCallback(() => {
    setOperation('remove')
    if (nodes.length === 0) {
      setError('Cannot remove from an empty structure')
      setTimeout(() => setError(null), 2000)
      return
    }
    if (dataStructure === 'stack' || dataStructure === 'linkedList') {
      setNodes(prev => prev.slice(0, -1))
    } else if (dataStructure === 'queue') {
      setNodes(prev => prev.slice(1))
    }
    setTimeout(() => setOperation(null), 500)
  }, [dataStructure, nodes.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = parseInt(inputValue)
    if (isNaN(value)) {
      setError('Please enter a valid number')
      setTimeout(() => setError(null), 2000)
      return
    }
    addNode(value)
    setInputValue('')
  }

  const NodeComponent: React.FC<{ node: Node<number>, index: number }> = ({ node, index }) => (
    <motion.div
      className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg shadow-lg text-white font-bold text-lg flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      style={{
        width: '60px',
        height: '60px',
      }}
    >
      {node.value}
      {dataStructure === 'linkedList' && index < nodes.length - 1 && (
        <motion.div
          className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2"
          initial={{ width: 0 }}
          animate={{ width: '20px' }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <ArrowRight className="text-indigo-500" />
        </motion.div>
      )}
    </motion.div>
  )

  return (
    <div className="h-fit max-w-8xl text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Try Visualizing Data Structures 
      </h1>
      <div className="mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center space-x-4 mb-8">
            {(['stack', 'queue', 'linkedList'] as const).map((ds) => (
              <button
                key={ds}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  dataStructure === ds
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => setDataStructure(ds)}
              >
                {ds.charAt(0).toUpperCase() + ds.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex justify-center mb-8">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter a number"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors duration-200"
              >
                <Plus className="w-5 h-5" />
              </button>
            </form>
            <button
              onClick={removeNode}
              className="ml-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              <Minus className="w-5 h-5" />
            </button>
          </div>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-center mb-4"
            >
              {error}
            </motion.div>
          )}
          <div className="relative h-80 bg-gray-900 rounded-lg p-4 overflow-hidden">
            <AnimatePresence>
              {nodes.map((node, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={getInitialPosition(dataStructure, index, nodes.length)}
                  animate={getAnimatedPosition(dataStructure, index, nodes.length)}
                  exit={getExitPosition(dataStructure, index, nodes.length)}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <NodeComponent node={node} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="bg-gray-900 p-4">
          <h2 className="text-xl font-semibold mb-2">Operations:</h2>
          <ul className="list-disc list-inside">
            <li>Add: Inserts a new element</li>
            <li>Remove: {dataStructure === 'queue' ? 'Removes the first element' : 'Removes the last element'}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const getInitialPosition = (dataStructure: DataStructure, index: number, length: number) => {
  switch (dataStructure) {
    case 'stack':
      return { bottom: -60, left: '50%', x: '-50%' }
    case 'queue':
      return { left: -60, top: '50%', y: '-50%' }
    case 'linkedList':
      return { opacity: 0, left: `${(index / (length - 1)) * 100}%`, top: '50%', y: '-50%' }
    default:
      return {}
  }
}

const getAnimatedPosition = (dataStructure: DataStructure, index: number, length: number) => {
  switch (dataStructure) {
    case 'stack':
      return { bottom: `${index * 70}px`, left: '50%', x: '-50%' }
    case 'queue':
      return { left: `${index * 70}px`, top: '50%', y: '-50%' }
    case 'linkedList':
      return { opacity: 1, left: `${(index / (length - 1)) * 100}%`, top: '50%', y: '-50%' }
    default:
      return {}
  }
}

const getExitPosition = (dataStructure: DataStructure, index: number, length: number) => {
  switch (dataStructure) {
    case 'stack':
      return { bottom: `${(length + 1) * 70}px`, left: '50%', x: '-50%' }
    case 'queue':
      return { left: `${(length + 1) * 70}px`, top: '50%', y: '-50%' }
    case 'linkedList':
      return { opacity: 0 }
    default:
      return {}
  }
}

export default DataStructureVisualizer