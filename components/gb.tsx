'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GalaxyBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    let width = window.innerWidth
    let height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(width, height)
    mountRef.current.appendChild(renderer.domElement)

    const params = {
      count: 100000,
      size: 0.01,
      radius: 5,
      branches: 3,
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: '#ff6030',
      outsideColor: '#1b3984'
    }

    let geometry: THREE.BufferGeometry | null = null
    let material: THREE.PointsMaterial | null = null
    let points: THREE.Points | null = null

    const generateGalaxy = () => {
      if (points !== null) {
        geometry?.dispose()
        material?.dispose()
        scene.remove(points)
      }

      geometry = new THREE.BufferGeometry()

      const positions = new Float32Array(params.count * 3)
      const colors = new Float32Array(params.count * 3)

      const colorInside = new THREE.Color(params.insideColor)
      const colorOutside = new THREE.Color(params.outsideColor)

      for (let i = 0; i < params.count; i++) {
        const radius = Math.random() * params.radius
        const spinAngle = radius * params.spin
        const branchAngle = ((i % params.branches) / params.branches) * Math.PI * 2

        const randomX = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomY = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomZ = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

        positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX
        positions[i * 3 + 1] = randomY
        positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

        const mixedColor = colorInside.clone()
        mixedColor.lerp(colorOutside, radius / params.radius)

        colors[i * 3] = mixedColor.r
        colors[i * 3 + 1] = mixedColor.g
        colors[i * 3 + 2] = mixedColor.b
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      material = new THREE.PointsMaterial({
        size: params.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      })

      points = new THREE.Points(geometry, material)
      scene.add(points)
    }

    generateGalaxy()

    camera.position.z = 6
    camera.position.y = 2
    camera.rotation.x = -Math.PI / 6

    const mouse = new THREE.Vector2()

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / width) * 2 - 1
      mouse.y = -(event.clientY / height) * 2 + 1
    }

    window.addEventListener('mousemove', onMouseMove)

    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      if (points) {
        points.rotation.y = elapsedTime * 0.05
      }

      camera.position.x = Math.sin(elapsedTime * 0.2) * 0.5
      camera.position.z = 6 + Math.cos(elapsedTime * 0.2) * 0.5

      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      geometry?.dispose()
      material?.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0" />
}

export default GalaxyBackground