"use client"

import { Search, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchBar from "./search"

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="mx-auto max-w-7xl flex h-[72px] items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <h1 className="text-2xl font-script text-[#0d0c22]">Lindot</h1>
          </Link>
          <div className="relative lg:hidden">
            <SearchBar placeholder="Search" />
          </div>
        </div>

        <div className="hidden flex-1 items-center lg:flex lg:max-w-2xl mr-4">
          <div className="relative flex w-full max-w-2xl items-center">
            <SearchBar placeholder="What would you like to know?" />
          </div>
        </div>

        <nav className="hidden items-center space-x-6 lg:flex">
          <DropdownMenu>
            <Link href={"/explore"}>
              <Button
                variant="ghost"
                className="h-auto p-0 text-sm font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"
              >
                Explore
              </Button>
            </Link>
          </DropdownMenu>

          <DropdownMenu open={open} onOpenChange={setOpen}>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <DropdownMenuTrigger asChild>
                <Link href={'/resources'}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"
                  >
                    Resources
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Button>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={'/resources'}><DropdownMenuItem>All</DropdownMenuItem></Link>
                <Link href={'/resources/bg'}><DropdownMenuItem>Beginner Stuff</DropdownMenuItem></Link>
                <Link href={'/resources/qc'}><DropdownMenuItem>Quantum Computing</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <Link href={'/about'}>
            <Button
              variant="ghost"
              className="h-auto p-0 text-sm font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"
            >
              About
            </Button>
          </Link>

          <Link href={'/contact'}>
            <Button
              variant="ghost"
              className="h-auto p-0 text-sm font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"
            >
              Contact
            </Button>
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="lg:hidden"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href={'/explore'}>
              <Button variant="ghost" className="justify-start">
                Explore
              </Button>
            </Link>
            <Link href={'/resources'}>
              <Button variant="ghost" className="justify-start">
                Resources
              </Button>
            </Link>
            <Link href={'/about'}>
              <Button variant="ghost" className="justify-start">
                About
              </Button>
              </Link>
            <Link href={'/contact'}>
              <Button variant="ghost" className="justify-start">
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}