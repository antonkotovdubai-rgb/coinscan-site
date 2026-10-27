'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = [
    ['Features', '#features'],
    ['How it works', '#how-it-works'],
    ['Premium', '#premium'],
    ['Support', '/support'],
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#060915]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="CoinScan logo" className="h-9 w-9 rounded-2xl shadow-lg shadow-[#7C9BFF]/25" />
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-wide text-white">CoinScan</div>
            <div className="hidden text-[11px] uppercase tracking-[0.18em] text-[#9DABCF] sm:block">Numismatic Identifier</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#B8C3E5] md:flex">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="transition-colors hover:text-white">{label}</a>
          ))}
        </nav>

        <a href="https://apps.apple.com/us/app/coinscan-numismatic-identifier/id6782162184" target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#7C9BFF]/40 bg-[#7C9BFF]/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7C9BFF]/20 md:inline-flex">
          Get on the App Store
        </a>

        <button
          className="rounded-xl border border-white/10 p-2 text-[#B8C3E5] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0B1020] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#B8C3E5]">
            {nav.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="hover:text-white">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
