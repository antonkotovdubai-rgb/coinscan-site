import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,138,20,0.12)] bg-[#0a0804]">
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e4a825] to-[#8a5a08] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="#0e0b07" strokeWidth="1.5"/>
                  <text x="8" y="11.5" textAnchor="middle" fontSize="7" fill="#0e0b07" fontWeight="700">C</text>
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-[#e8dcc8]">CoinScan</span>
            </div>
            <p className="text-[#8a7d6a] text-sm max-w-xs leading-relaxed">
              AI-powered coin recognition for collectors and enthusiasts.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <Link href="/privacy" className="text-[#8a7d6a] hover:text-[#e4a825] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#8a7d6a] hover:text-[#e4a825] transition-colors">
              Terms of Use
            </Link>
            <Link href="/subscription-terms" className="text-[#8a7d6a] hover:text-[#e4a825] transition-colors">
              Subscription Terms
            </Link>
            <Link href="/support" className="text-[#8a7d6a] hover:text-[#e4a825] transition-colors">
              Support
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(201,138,20,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5a4e3e]">
          <p>© {new Date().getFullYear()} CoinScan. All rights reserved.</p>
          <p>Informational estimates only — not professional appraisal or financial advice.</p>
        </div>
      </div>
    </footer>
  )
}
