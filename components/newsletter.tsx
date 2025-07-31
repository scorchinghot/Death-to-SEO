import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="relative rounded-3xl mb-24 mx-auto max-w-6xl overflow-hidden px-4 py-24">
      <svg
        className="absolute left-0 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M400 0 A 400 400 0 0 1 0 400 H 0 V 0 Z"
          fill="#7C3AED"
        />
      </svg>

       <svg
        className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M0 0v300h300C300 134.315 165.685 0 0 0z"
          fill="#2DD4BF"
          transform="rotate(180 150 150)"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1600px] w-[1600px]"
        viewBox="0 0 800 800"
        fill="none"
      >
        <path
          d="M400 800 A 400 200 0 0 1 800 800"
          fill="#FCD34D"
        />
      </svg>








      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#1E1B4B] sm:text-5xl">
          Subscribe to Get Notified When New Posts Are Out!
        </h2>
        <p className="mb-10 text-lg text-gray-600">
          Don’t want to miss out on any of the cool content we’re posting? Subscribe to our newsletter and get updates delivered straight to your inbox. We’ll keep you in the loop on everything from coding basics to cutting-edge technology! Just pop in your email, and you’re all set.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
          <Input
            type="email"
            placeholder="Not available yet"
            className="h-12 flex-1 rounded-l-lg border-gray-200 px-4 sm:rounded-r-none text-center"
          />
          <Button className="hidden h-12 rounded-r-lg bg-[#7C3AED] px-8 font-medium text-white hover:bg-[#6D28D9] sm:rounded-l-none">
            Ok
          </Button>
        </div>
      </div>
    </section>
  )
}