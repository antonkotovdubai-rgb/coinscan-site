'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0b07]/80 backdrop-blur-md border-b border-[rgba(201,138,20,0.12)]">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e4a825] to-[#8a5a08] flex items-center justify-center shadow-lg shadow-[rgba(201,138,20,0.3)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="#0e0b07" strokeWidth="1.5"/>
              <text x="8" y="11.5" textAnchor="middle" fontSize="7" fill="#0e0b07" fontWeight="700">C</text>
            </svg>
          </div>
          <span className="font-display text-xl font-semibold text-[#e8dcc8] tracking-wide group-hover:text-[#e4a825] transition-colors">
            CoinScan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-body text-[#8a7d6a]">
          <a href="#features" className="hover:text-[#e4a825] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#e4a825] transition-colors">How It Works</a>
          <a href="#premium" className="hover:text-[#e4a825] transition-colors">Premium</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8a7d6a] hover:text-[#e4a825] transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161209] border-t border-[rgba(201,138,20,0.12)] px-5 py-4 flex flex-col gap-4 text-sm text-[#8a7d6a]">
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-[#e4a825] transition-colors">Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-[#e4a825] transition-colors">How It Works</a>
          <a href="#premium" onClick={() => setMenuOpen(false)} className="hover:text-[#e4a825] transition-colors">Premium</a>
        </div>
      )}
    </header>
  )
}
