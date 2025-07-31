'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AmpersandIcon as And, OrbitIcon as Or, XIcon as Xor, ToggleLeft, AlertTriangle, Plus, Trash2 } from 'lucide-react'

type GateType = 'AND' | 'OR' | 'XOR' | 'NOT'

interface Gate {
  id: string
  type: GateType
  inputs: boolean[]
  output: boolean
}

const LogicGatesSimulator: React.FC = () => {
  const [gates, setGates] = useState<Gate[]>([])
  const [draggingGate, setDraggingGate] = useState<GateType | null>(null)

  const calculateOutput = useCallback((gate: Gate) => {
    switch (gate.type) {
      case 'AND':
        return gate.inputs.every(input => input)
      case 'OR':
        return gate.inputs.some(input => input)
      case 'XOR':
        return gate.inputs.filter(input => input).length % 2 !== 0
      case 'NOT':
        return !gate.inputs[0]
      default:
        return false
    }
  }, [])

  const updateGateOutput = useCallback((gateId: string) => {
    setGates(prevGates =>
      prevGates.map(gate =>
        gate.id === gateId
          ? { ...gate, output: calculateOutput(gate) }
          : gate
      )
    )
  }, [calculateOutput])

  const addGate = (type: GateType) => {
    const newGate: Gate = {
      id: `gate-${Date.now()}`,
      type,
      inputs: type === 'NOT' ? [false] : [false, false],
      output: false
    }
    setGates(prevGates => [...prevGates, newGate])
    updateGateOutput(newGate.id)
  }

  const removeGate = (id: string) => {
    setGates(prevGates => prevGates.filter(gate => gate.id !== id))
  }

  const toggleInput = (gateId: string, inputIndex: number) => {
    setGates(prevGates =>
      prevGates.map(gate =>
        gate.id === gateId
          ? {
              ...gate,
              inputs: gate.inputs.map((input, index) =>
                index === inputIndex ? !input : input
              )
            }
          : gate
      )
    )
    updateGateOutput(gateId)
  }

  const GateComponent: React.FC<{ gate: Gate }> = ({ gate }) => {
    const GateIcon = {
      AND: And,
      OR: Or,
      XOR: Xor,
      NOT: AlertTriangle
    }[gate.type]

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
      >
        <div className="text-lg font-semibold mb-2">{gate.type}</div>
        <GateIcon className="w-12 h-12 mb-4" />
        <div className="flex space-x-2 mb-2">
          {gate.inputs.map((input, index) => (
            <button
              key={index}
              onClick={() => toggleInput(gate.id, index)}
              className={`w-8 h-8 rounded-full ${
                input ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Output:</span>
          <div
            className={`w-8 h-8 rounded-full ${
              gate.output ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
        </div>
        <button
          onClick={() => removeGate(gate.id)}
          className="mt-2 text-red-500 hover:text-red-600"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </motion.div>
    )
  }

  return (
    <div className="p-8 max-w-8xl mx-auto rounded-3xl text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Learn by doing it try out this Logic Gates Simulator
      </motion.h1>
      <div className="mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex justify-center space-x-4 mb-8">
            {(['AND', 'OR', 'XOR', 'NOT'] as GateType[]).map(gateType => (
              <motion.button
                key={gateType}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseDown={() => setDraggingGate(gateType)}
                onMouseUp={() => {
                  if (draggingGate) {
                    addGate(draggingGate)
                    setDraggingGate(null)
                  }
                }}
                className="px-4 py-2 bg-purple-600 rounded-full text-white font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                {gateType}
              </motion.button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {gates.map(gate => (
                <GateComponent key={gate.id} gate={gate} />
              ))}
            </AnimatePresence>
          </div>
          {gates.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 mt-8"
            >
              Drag and drop logic gates here to start building your circuit!
            </motion.p>
          )}
        </div>
      </div>
      <motion.div
        className="bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-semibold mb-2">How to use:</h2>
        <ol className="list-decimal list-inside text-sm">
          <li>Click on a gate type to add it to the simulator</li>
          <li>Click on the input circles to toggle their state</li>
          <li>Observe how the output changes based on the inputs</li>
          <li>Click the trash icon to remove a gate</li>
        </ol>
      </motion.div>
    </div>
  )
}

export default LogicGatesSimulator