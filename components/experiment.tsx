'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -200])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    let animationFrameId: number
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    // particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 500
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10

      velocities[i] = (Math.random() - 0.5) * 0.01
      velocities[i + 1] = (Math.random() - 0.5) * 0.01
      velocities[i + 2] = (Math.random() - 0.5) * 0.01
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    // lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
    })

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 3,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.1,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // line container
    const linesGeometry = new THREE.BufferGeometry()
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lines)
    scene.background = new THREE.Color(0x000000);

    camera.position.z = 5

    const handleResize = () => {
      const container = containerRef.current
      if (!container) return

      const width = container.clientWidth
      const height = container.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    const animate = () => {
      const positions = particlesGeometry.attributes.position.array as Float32Array
      const linePositions: number[] = []

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        if (Math.abs(positions[i]) > 5) velocities[i] *= -1
        if (Math.abs(positions[i + 1]) > 5) velocities[i + 1] *= -1
        if (Math.abs(positions[i + 2]) > 5) velocities[i + 2] *= -1

        // lines between nearby particles
        for (let j = i + 3; j < positions.length; j += 3) {
          const dx = positions[i] - positions[j]
          const dy = positions[i + 1] - positions[j + 1]
          const dz = positions[i + 2] - positions[j + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 2) {
            linePositions.push(positions[i], positions[i + 1], positions[i + 2])
            linePositions.push(positions[j], positions[j + 1], positions[j + 2])
          }
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true
      linesGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      )

      particles.rotation.x += (mousePosition.y * 0.0002 - particles.rotation.x) * 0.05
      particles.rotation.y += (mousePosition.x * 0.0002 - particles.rotation.y) * 0.05
      lines.rotation.copy(particles.rotation)

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2,
    })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 transform bg-blue-500/30 blur-[120px] z-50" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] transform bg-blue-500/10 blur-[120px] z-50"></div>
      <div className='absolute left-0 bottom-0 h-[300px] w-[300px] transform bg-yellow-500/10 blur-[120px] z-50'></div>
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 transform bg-yellow-500/30 blur-[120px] z-50" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <motion.div
        style={{ y }}
        className="relative z-50 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-black sm:text-6xl md:text-7xl pt-36">
            Linking the Dots
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl">
            Explore the Big Picture of Computer Science—Learn How Stuff Works with Emphasis on Why It Works
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={"/explore"}>
                <Button
                className="relative overflow-hidden border-black text-white transition-all hover:scale-105 hover:bg-black/10"
                size="lg"
                >
                Get Started
                </Button>
            </Link>
            <Link href={"/about"}>
                <Button
                variant="outline"
                className="relative overflow-hidden border-white text-black transition-all hover:scale-105 hover:bg-white/10"
                size="lg"
                >
                Learn More
                </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}