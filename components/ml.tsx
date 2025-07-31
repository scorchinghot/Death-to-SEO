'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RefreshCw, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react'
import * as tf from '@tensorflow/tfjs'
import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const MLModelTrainer: React.FC = () => {
  const [dataset, setDataset] = useState<{ x: number; y: number }[]>([])
  const [model, setModel] = useState<tf.Sequential | null>(null)
  const [isTraining, setIsTraining] = useState(false)
  const [epoch, setEpoch] = useState(0)
  const [loss, setLoss] = useState<number[]>([])
  const [prediction, setPrediction] = useState<number | null>(null)
  const [userInput, setUserInput] = useState('')
  const [showInstructions, setShowInstructions] = useState(true)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    generateDataset()
    createModel()
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        drawDataset(ctx)
      }
    }
  }, [dataset])

  const generateDataset = () => {
    const newDataset = Array.from({ length: 100 }, () => {
      const x = Math.random() * 10
      const y = 2 * x + 1 + (Math.random() - 0.5)
      return { x, y }
    })
    setDataset(newDataset)
  }

  const createModel = () => {
    const newModel = tf.sequential()
    newModel.add(tf.layers.dense({ units: 1, inputShape: [1] }))
    newModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' })
    setModel(newModel)
  }

  const trainModel = async () => {
    if (!model) return

    setIsTraining(true)
    setLoss([])
    setEpoch(0)

    const xs = tf.tensor2d(dataset.map(d => [d.x]))
    const ys = tf.tensor2d(dataset.map(d => [d.y]))

    await model.fit(xs, ys, {
      epochs: 50,
      callbacks: {
        onEpochEnd: (epoch: number, logs: { loss: number }) => {
          setEpoch(epoch + 1)
          if (logs?.loss) {
            setLoss(prevLoss => [...prevLoss, logs.loss])
          }
        }
      }
    })

    setIsTraining(false)
    xs.dispose()
    ys.dispose()
  }

  const predict = () => {
    if (!model) return

    const inputValue = parseFloat(userInput)
    if (isNaN(inputValue)) {
      alert('Please enter a valid number')
      return
    }

    const inputTensor = tf.tensor2d([[inputValue]])
    const predictionTensor = model.predict(inputTensor) as tf.Tensor
    const predictionValue = predictionTensor.dataSync()[0]
    setPrediction(predictionValue)

    inputTensor.dispose()
    predictionTensor.dispose()
  }

  const drawDataset = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = 'rgba(0, 119, 255, 0.6)'
    dataset.forEach(point => {
      ctx.beginPath()
      ctx.arc(point.x * 40, 400 - point.y * 40, 5, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  return (
    <div className="h-fit max-w-8xl mx-auto rounded-3xl text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Train this Machine Learning Model
      </motion.h1>
      <div className="mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center text-purple-400 hover:text-purple-300"
            >
              {showInstructions ? 'Hide' : 'Show'} Instructions
              {showInstructions ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateDataset}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Generate New Dataset
            </motion.button>
          </div>
          <AnimatePresence>
            {showInstructions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-700 rounded-md p-4 mb-6"
              >
                <h2 className="text-xl font-semibold mb-2">How to use:</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>The scatter plot shows a randomly generated dataset.</li>
                  <li>Click &quot;Train Model&quot; to start training a linear regression model.</li>
                  <li>Watch the loss graph to see how the model improves over time.</li>
                  <li>Once training is complete, enter a number in the input field and click &quot;Predict&quot; to test the model.</li>
                  <li>You can generate a new dataset and retrain the model at any time.</li>
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Dataset</h2>
              <canvas ref={canvasRef} width="400" height="400" className="bg-gray-900 rounded-md" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Training Progress</h2>
              <Chart
                type="line"
                data={{
                  labels: loss.map((_, i) => i + 1),
                  datasets: [
                    {
                      label: 'Loss',
                      data: loss,
                      borderColor: 'rgb(75, 192, 192)',
                      tension: 0.1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={trainModel}
                disabled={isTraining}
                className={`px-6 py-2 rounded-md flex items-center ${
                  isTraining ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isTraining ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isTraining ? 'Training...' : 'Train Model'}
              </motion.button>
              {isTraining && (
                <span className="ml-4">
                  Epoch: {epoch} / 50
                </span>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter a number"
                className="px-4 py-2 bg-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={predict}
                className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors duration-200"
              >
                Predict
              </motion.button>
            </div>
          </div>
          {prediction !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Prediction Result:</h3>
              <p className="text-2xl text-purple-400">{prediction.toFixed(2)}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MLModelTrainer