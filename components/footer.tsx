import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <nav className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
            <Link href="/resources/bg" className="text-gray-600 hover:text-gray-900">
              Beginner Stuff
            </Link>
            <Link href="/code" className="text-gray-600 hover:text-gray-900">
              Code Playground
            </Link>
            <Link href="/algorithm" className="text-gray-600 hover:text-gray-900">
              Algorithm
            </Link>
            <Link href="/data" className="text-gray-600 hover:text-gray-900">
              Data Structures
            </Link>
            <Link href="/logic" className="text-gray-600 hover:text-gray-900">
              Logic
            </Link>
            <Link href="/ml" className="text-gray-600 hover:text-gray-900">
              ML
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="/social"
              className="text-gray-400 transition-colors hover:text-[#1DA1F2]"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="/social"
              className="text-gray-400 transition-colors hover:text-[#4267B2]"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="/social"
              className="text-gray-400 transition-colors hover:text-[#E4405F]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="/social"
              className="text-gray-400 transition-colors hover:text-[#E60023]"
              aria-label="Pinterest"
            >
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 text-sm lg:flex-row">
          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-500">
            <span>© 2024 Lindot</span>
            <Link href="/terms" className="hover:text-gray-900">
              Terms
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/explore" className="hover:text-gray-900">
              Explore
            </Link>
            <Link href="/resources" className="hover:text-gray-900">
              Resources
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}