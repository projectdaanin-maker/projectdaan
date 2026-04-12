'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-[#e5e5e5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold" style={{ color: '#3C3489' }}>
            Project Daan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors text-sm">
              About
            </Link>
            <Link href="#impact" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors text-sm">
              Impact
            </Link>
            <Link href="#volunteer" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors text-sm">
              Volunteer
            </Link>
            <Link href="#contact" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors text-sm">
              Contact
            </Link>
            <button className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all" style={{ backgroundColor: '#3C3489' }}>
              Donate
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#about" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors">
              About
            </Link>
            <Link href="#impact" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors">
              Impact
            </Link>
            <Link href="#volunteer" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors">
              Volunteer
            </Link>
            <Link href="#contact" className="text-[#1a1a1a] hover:text-[#3C3489] transition-colors">
              Contact
            </Link>
            <button className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all w-full" style={{ backgroundColor: '#3C3489' }}>
              Donate
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
