"use client"

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const AnimatedGeometry = () => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1
    mesh.current.rotation.y += delta * 0.15
  })

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color="#6366f1" wireframe />
    </mesh>
  )
}

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 30] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedGeometry />
      </Canvas>
    </div>
  )
}

export default Background