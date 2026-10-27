import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050713]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="CoinScan logo" className="h-9 w-9 rounded-2xl" />
              <div>
                <div className="font-semibold text-white">CoinScan Numismatic Identifier</div>
                <div className="text-xs text-[#8793B8]">Official website</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#8793B8]">
              AI-assisted matching with coin information from CoinScan’s own daily-reviewed database and value estimates grounded in current comparable auction offers when available. Informational only — not a professional appraisal.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4">
            <Link href="/privacy" className="text-[#B8C3E5] hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-[#B8C3E5] hover:text-white">Terms of Use</Link>
            <Link href="/subscription-terms" className="text-[#B8C3E5] hover:text-white">Subscription Terms</Link>
            <Link href="/support" className="text-[#B8C3E5] hover:text-white">Support</Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-[#667192]">
          © {new Date().getFullYear()} CoinScan. All rights reserved. Support: coinscanidentifier@gmail.com
        </div>
      </div>
    </footer>
  )
}
