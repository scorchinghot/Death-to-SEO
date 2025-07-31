import React from 'react'
import Bbg from '@/components/bbg'
import Link from 'next/link'
import { ArrowBigLeft } from 'lucide-react'
import Footer from '@/components/footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Bbg />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <Link href="/">
          <button className="bg-white ml-5 flex rounded-full items-center p-2">
            <ArrowBigLeft className="mr-2" />
            </button>
        </Link>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}