'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, ChevronDown } from 'lucide-react'

type AlgorithmType = 'bubbleSort' | 'quickSort' | 'binarySearch'

interface AlgorithmInfo {
  name: string
  description: string
  timeComplexity: string
  spaceComplexity: string
}

const algorithmInfo: Record<AlgorithmType, AlgorithmInfo> = {
  bubbleSort: {
    name: 'Bubble Sort',
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
  },
  quickSort: {
    name: 'Quick Sort',
    description: 'An efficient, recursive divide-and-conquer approach to sorting an array. Picks a pivot element and partitions the array around it.',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(log n)',
  },
  binarySearch: {
    name: 'Binary Search',
    description: 'An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
  },
}

const AlgorithmVisualizer: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('bubbleSort')
  const [array, setArray] = useState<number[]>([])
  const [sortedIndices, setSortedIndices] = useState<number[]>([])
  const [currentIndices, setCurrentIndices] = useState<number[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(50)
  const [searchValue, setSearchValue] = useState<number | null>(null)
  const [searchResult, setSearchResult] = useState<number | null>(null)

  const animationRef = useRef<number | null>(null)
  const algorithmRef = useRef<(() => void) | null>(null)

  const generateRandomArray = useCallback((length: number = 20) => {
    const newArray = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1)
    setArray(newArray)
    setSortedIndices([])
    setCurrentIndices([])
    setSearchResult(null)
  }, [])

  useEffect(() => {
    generateRandomArray()
  }, [generateRandomArray])

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const bubbleSort = async () => {
    const arr = [...array]
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isRunning) return
        setCurrentIndices([j, j + 1])
        await sleep(100 - speed)
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          setArray([...arr])
        }
      }
      setSortedIndices(prev => [...prev, n - i - 1])
    }
    setSortedIndices([...Array(n).keys()])
    setCurrentIndices([])
  }

  const partition = async (arr: number[], low: number, high: number): Promise<number> => {
    const pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
      if (!isRunning) return -1
      setCurrentIndices([j, high])
      await sleep(100 - speed)
      if (arr[j] < pivot) {
        i++
        [arr[i], arr[j]] = [arr[j], arr[i]]
        setArray([...arr])
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    setArray([...arr])
    return i + 1
  }

  const quickSortHelper = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pi = await partition(arr, low, high)
      if (pi === -1) return
      setSortedIndices(prev => [...prev, pi])
      await quickSortHelper(arr, low, pi - 1)
      await quickSortHelper(arr, pi + 1, high)
    }
  }

  const quickSort = async () => {
    const arr = [...array]
    await quickSortHelper(arr, 0, arr.length - 1)
    setSortedIndices([...Array(arr.length).keys()])
    setCurrentIndices([])
  }

  const binarySearch = async () => {
    if (searchValue === null) return
    const arr = [...array].sort((a, b) => a - b)
    setArray(arr)
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      if (!isRunning) return
      const mid = Math.floor((left + right) / 2)
      setCurrentIndices([mid])
      await sleep(100 - speed)

      if (arr[mid] === searchValue) {
        setSearchResult(mid)
        return
      }

      if (arr[mid] < searchValue) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    setSearchResult(-1)
  }

  const runAlgorithm = useCallback(async () => {
    setIsRunning(true)
    setSortedIndices([])
    setCurrentIndices([])
    setSearchResult(null)

    let algorithmFunction: () => Promise<void>;

    switch (algorithm) {
      case 'bubbleSort':
        algorithmFunction = bubbleSort
        break
      case 'quickSort':
        algorithmFunction = quickSort
        break
      case 'binarySearch':
        algorithmFunction = binarySearch
        break
      default:
        setIsRunning(false)
        return
    }

    algorithmRef.current = algorithmFunction

    const runStep = async () => {
      if (isRunning && algorithmRef.current) {
        await algorithmRef.current()
        setIsRunning(false)
      }
    }

    runStep()
  }, [algorithm, isRunning, bubbleSort, quickSort, binarySearch])

  useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(() => runAlgorithm())
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, runAlgorithm])

  const stopAlgorithm = () => {
    setIsRunning(false)
  }

  return (
    <div className="h-fit max-w-8xl mx-auto rounded-3xl text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Algorithm Too
      </motion.h1>
      <div className="mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              {(Object.keys(algorithmInfo) as AlgorithmType[]).map((algo) => (
                <motion.button
                  key={algo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAlgorithm(algo)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    algorithm === algo
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {algorithmInfo[algo].name}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm">Speed:</label>
              <input
                type="range"
                min="1"
                max="99"
                value={speed}
                onChange={(e) => setSpeed(parseInt(e.target.value))}
                className="w-32"
              />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{algorithmInfo[algorithm].name}</h2>
            <p className="text-gray-400 mb-2">{algorithmInfo[algorithm].description}</p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span>Time Complexity: {algorithmInfo[algorithm].timeComplexity}</span>
              <span>Space Complexity: {algorithmInfo[algorithm].spaceComplexity}</span>
            </div>
          </div>
          <div className="relative h-64 bg-gray-900 rounded-lg p-4 mb-6">
            <AnimatePresence>
              {array.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: `${(value / Math.max(...array)) * 100}%`,
                    backgroundColor: sortedIndices.includes(index)
                      ? '#10B981'
                      : currentIndices.includes(index)
                      ? '#F59E0B'
                      : '#6366F1',
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: `${(index / array.length) * 100}%`,
                    width: `${100 / array.length}%`,
                  }}
                  className="rounded-t"
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRunning(true)}
                disabled={isRunning}
                className={`px-6 py-2 rounded-md flex items-center ${
                  isRunning ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                <Play className="w-5 h-5 mr-2" />
                Run
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={stopAlgorithm}
                disabled={!isRunning}
                className={`px-6 py-2 rounded-md flex items-center ${
                  !isRunning ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                <Pause className="w-5 h-5 mr-2" />
                Stop
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => generateRandomArray()}
                className="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 flex items-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </motion.button>
            </div>
            {algorithm === 'binarySearch' && (
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={searchValue || ''}
                  onChange={(e) => setSearchValue(parseInt(e.target.value) || null)}
                  placeholder="Search value"
                  className="px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {searchResult !== null && (
                  <span className="text-sm">
                    {searchResult === -1
                      ? 'Not found'
                      : `Found at index ${searchResult}`}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmVisualizer