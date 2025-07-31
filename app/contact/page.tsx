'use client'

import React, { useEffect, useRef, useState, Suspense } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ErrorBoundary } from 'react-error-boundary'
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link'


const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: { x: number; y: number; radius: number; speed: number }[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1
      })
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      
      particles.forEach(particle => {
        ctx!.beginPath()
        ctx!.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(99, 102, 241, 0.5)'
        ctx!.fill()

        particle.y -= particle.speed
        if (particle.y + particle.radius < 0) {
          particle.y = canvas!.height + particle.radius
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

const AnimatedSVG = () => {
  return (
    <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-10" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#4f46e5" strokeWidth="2">
        <animate attributeName="r" from="0" to="45" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div 
      ref={cursorRef} 
      className="fixed w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}

const ContactForm = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    setShowForm(true);
  }, []); 
  const formSpring = useSpring({
    opacity: showForm ? 1 : 0, 
    transform: showForm ? 'translateY(0px)' : 'translateY(50px)', 
    from: { opacity: 0, transform: 'translateY(50px)' },
  })

  const buttonSpring = useSpring({
    scale: isHovered ? 1.05 : 1,
    boxShadow: isHovered ? '0 0 15px 5px rgba(99, 102, 241, 0.4)' : '0 0 0px 0px rgba(99, 102, 241, 0)',
  })

  const [state, handleSubmit] = useForm("mrbgkodj");

  if (state.succeeded) {
      return <h1 className='bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center font-extrabold text-3xl'>Success!</h1>;
  }

  return (
    <animated.div style={formSpring}>
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <Card className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 shadow-xl rounded-xl overflow-hidden">
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Your Name</Label>
            <Input 
              id="name" 
              name="name"
              placeholder="So we can address you properly!" 
              className="bg-white/20 border-white/30 text-white placeholder-white/50 focus:ring-primary"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Your Email</Label>
            <Input 
              id="email" 
              name='email'
              type="email" 
              placeholder="We'll keep it private and only use it to respond" 
              className="bg-white/20 border-white/30 text-white placeholder-white/50 focus:ring-primary"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Your Message</Label>
            <Textarea 
              id="message"
              name='message' 
              placeholder="Tell us what's on your mind or how we can help!" 
              className="bg-white/20 border-white/30 text-white placeholder-white/50 focus:ring-primary"
              rows={5}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <animated.div style={buttonSpring}>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              type='submit'
            >
              Send Message
            </Button>
          </animated.div>
        </form>
      </Card>
    </animated.div>
  )
}

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  return (
    <div className="text-center p-4 bg-red-100 border border-red-400 rounded">
      <h2 className="text-xl font-bold text-red-800 mb-2">Oops! Something went wrong.</h2>
      <p className="text-red-600 mb-4">{error.message}</p>
      <Button onClick={resetErrorBoundary} className="bg-red-500 hover:bg-red-600 text-white">
        Try again
      </Button>
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <AnimatedSVG />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <ContactForm />
          </Suspense>
        </ErrorBoundary>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Get in Touch</h2>
          <p className="mb-2">Email us at: <a href="mailto:contactlindot@gmail.com" className="text-blue-600 hover:underline">contactlindot@gmail.com</a></p>
          <p className="text-sm mt-8">
            We respect your privacy. Your personal information is safe with us and will only be used to respond to your inquiries. 
            For more details, check out our <Link href={'/terms'} className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}