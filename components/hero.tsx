import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 mx-auto max-w-6xl rounded-3xl mt-5 px-6 py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex gap-1">
            <div className="h-8 w-8 rounded-sm bg-rose-400" />
            <div className="h-8 w-8 rounded-sm bg-rose-300" />
          </div>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 font-serif text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              Big Picture of CS, learn How Stuff Works with Emphasis on Why It Works
              <span className="ml-4 inline-block">
                <svg
                  className="h-12 w-12 rotate-180 transform text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </h1>
            
            <p className="mb-8 max-w-2xl text-lg text-gray-300">
              Computer science combines logic and mathematics to solve problems and create applications. It’s the deep reasoning behind how computers process information, and once you get the logic, it becomes intuitive.
            </p>
            
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Explore
            </Button>
          </div>

          
        </div>

        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4">
          <div className="relative h-[400px] w-[400px]">
            <div className="absolute right-0 top-0 h-full w-full rounded-full bg-gradient-to-br from-indigo-600 via-purple-500 to-orange-400 opacity-80 blur-2xl" />
            <div className="absolute right-8 top-8 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-400 to-purple-300 opacity-90" />
            <div className="absolute right-16 top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-300 to-purple-200 opacity-90" />
            <div className="absolute right-24 top-24 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-200 to-white opacity-90" />
          </div>
        </div>
      </div>
    </div>
  )
}