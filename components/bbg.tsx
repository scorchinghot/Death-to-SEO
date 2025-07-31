'use client'

import { useEffect, useState } from 'react'

export default function Bbg() {
  const [gradients, setGradients] = useState<string[][]>([])

  useEffect(() => {
    const generateRandomColor = () => {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    }

    const newGradients = Array(8).fill(null).map(() => {
      const color1 = generateRandomColor()
      const color2 = generateRandomColor()
      return [color1, color2]
    })

    setGradients(newGradients)
  }, [])

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="flex -space-x-32 mb-[-8rem]">
          {gradients.slice(0, 3).map((colors, index) => (
            <div
              key={index}
              className="w-64 h-64 rounded-full opacity-30 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
              }}
            />
          ))}
        </div>
        <div className="flex -space-x-40 mb-[-8rem] ml-8">
          {gradients.slice(3, 6).map((colors, index) => (
            <div
              key={index}
              className="w-64 h-64 rounded-full opacity-30 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
              }}
            />
          ))}
        </div>
        <div className="flex -space-x-32 ml-16">
          {gradients.slice(6, 8).map((colors, index) => (
            <div
              key={index}
              className="w-64 h-64 rounded-full opacity-30 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}