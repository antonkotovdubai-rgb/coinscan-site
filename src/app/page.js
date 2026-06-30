import Header from '@/components/Header'
import Footer from '@/components/Footer'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 8v4l3 3"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.3"/>
      </svg>
    ),
    title: 'Instant AI Recognition',
    desc: 'Photograph both sides of a coin and our AI identifies it in seconds — denomination, year, country, and more.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 9l4-4 4 4 4-4 4 4"/>
        <path d="M3 15l4-4 4 4 4-4 4 4"/>
      </svg>
    ),
    title: 'Obverse & Reverse Analysis',
    desc: 'Full description of both sides: design motifs, inscriptions, unique features, and minting characteristics.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M7 10h10M7 14h6"/>
      </svg>
    ),
    title: 'Rich Coin Data',
    desc: 'Country of origin, nominal value, minting year, material composition, historical context, and rarity grade.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
    title: 'Auction Value Estimate',
    desc: 'Get informational market value ranges based on current auction data — not professional appraisal, but a solid starting point.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    ),
    title: 'Scan History',
    desc: 'Every coin you scan is saved with full details. Browse your history anytime, offline.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
        <path d="M9 9h6M9 13h4"/>
        <circle cx="17" cy="17" r="3" fill="none"/>
        <path d="M15.5 15.5l1 1"/>
      </svg>
    ),
    title: 'Personal Collection',
    desc: 'Organize your scanned coins into a curated digital collection. Track what you own and what you seek.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Photograph the coin',
    desc: 'Place the coin on a flat surface with good lighting. Take a photo of the front (obverse) and back (reverse).',
  },
  {
    num: '02',
    title: 'AI processes the image',
    desc: 'Our recognition engine analyzes both sides simultaneously, cross-referencing millions of coin records.',
  },
  {
    num: '03',
    title: 'Get full details',
    desc: 'Within seconds receive country, denomination, year, material, historical notes, and estimated auction value.',
  },
]

const premiumFeatures = [
  'Unlimited scans per day',
  'Advanced rarity & grading notes',
  'Detailed auction price history',
  'Export collection to PDF',
  'Priority recognition speed',
  'Ad-free experience',
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-20 overflow-hidden hero-glow">
          {/* Background ambient circles */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(201,138,20,0.06)] blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[rgba(201,138,20,0.04)] blur-2xl pointer-events-none" />

          {/* Coin illustration */}
          <div className="relative mb-10 animate-float">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#f2d88a] via-[#c98a14] to-[#7a4e08] shadow-2xl shadow-[rgba(201,138,20,0.45)] flex items-center justify-center mx-auto">
              <div className="w-20 h-20 md:w-26 md:h-26 rounded-full bg-gradient-to-br from-[#e4a825] to-[#8a5a08] flex items-center justify-center border-4 border-[rgba(255,255,255,0.08)]">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="20" stroke="rgba(14,11,7,0.6)" strokeWidth="2"/>
                  <text x="26" y="33" textAnchor="middle" fontSize="22" fill="#0e0b07" fontWeight="700" fontFamily="serif">₵</text>
                </svg>
              </div>
            </div>
            {/* Scanning bracket */}
            <div className="absolute inset-[-14px] animate-glow">
              <svg width="100%" height="100%" viewBox="0 0 168 168" fill="none">
                <path d="M20 4 H4 V20" stroke="#e4a825" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M148 4 H164 V20" stroke="#e4a825" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 164 H4 V148" stroke="#e4a825" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M148 164 H164 V148" stroke="#e4a825" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <p className="text-[#c98a14] text-sm font-body tracking-[0.2em] uppercase mb-4">
            AI-Powered Coin Recognition
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-light text-[#e8dcc8] leading-tight mb-6 max-w-3xl">
            Every coin tells a{' '}
            <span className="text-gold-shimmer font-semibold">story.</span>
            <br />We read it for you.
          </h1>

          <p className="text-[#8a7d6a] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Photograph any coin — front and back — and CoinScan's AI instantly identifies it,
            reveals its history, and estimates its value.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="flex items-center gap-3 bg-[#161209] border border-[rgba(201,138,20,0.3)] rounded-xl px-6 py-3.5 hover:border-[#c98a14] hover:bg-[#1e1710] transition-all group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#e4a825]">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[#5a4e3e] text-[10px] uppercase tracking-wider">Coming Soon on</div>
                <div className="text-[#e8dcc8] text-sm font-medium">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-[#161209] border border-[rgba(201,138,20,0.3)] rounded-xl px-6 py-3.5 hover:border-[#c98a14] hover:bg-[#1e1710] transition-all group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#e4a825]">
                <path d="M3.18 23.76c.37.2.8.21 1.2.03l11.69-6.57-2.43-2.44-10.46 8.98zM20.67 9.84l-2.31-1.3-2.7 2.46 2.7 2.71 2.34-1.32c.67-.38.67-1.18-.03-1.55zM2.08.25C1.7.45 1.45.86 1.45 1.4v21.2c0 .54.26.93.63 1.15l.08.05 11.88-11.89-.08-.07L2.08.25zM14.07 12l-2.62 2.62-8.2-8.22 10.82 5.6z"/>
              </svg>
              <div className="text-left">
                <div className="text-[#5a4e3e] text-[10px] uppercase tracking-wider">Coming Soon on</div>
                <div className="text-[#e8dcc8] text-sm font-medium">Google Play</div>
              </div>
            </button>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────── */}
        <section id="features" className="py-24 px-5 bg-[#0a0804]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#c98a14] text-xs tracking-[0.25em] uppercase mb-3">What CoinScan does</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#e8dcc8]">
                Everything a collector <span className="italic">needs</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="card-glow bg-[#161209] rounded-2xl p-6"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="text-[#c98a14] mb-4">{f.icon}</div>
                  <h3 className="font-display text-xl font-medium text-[#e8dcc8] mb-2">{f.title}</h3>
                  <p className="text-[#7a6e5e] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────── */}
        <section id="how-it-works" className="py-24 px-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0b07] via-[#110d07] to-[#0e0b07] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#c98a14] text-xs tracking-[0.25em] uppercase mb-3">Simple process</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#e8dcc8]">
                Three steps to <span className="italic text-gold-shimmer">recognition</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#c98a14]/40 via-[#c98a14]/20 to-transparent hidden md:block" />

              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#161209] border border-[rgba(201,138,20,0.2)] flex items-center justify-center group-hover:border-[#c98a14] group-hover:shadow-lg group-hover:shadow-[rgba(201,138,20,0.15)] transition-all z-10">
                    <span className="font-display text-lg font-semibold text-[#c98a14]">{step.num}</span>
                  </div>
                  <div className="flex-1 bg-[#161209] border border-[rgba(201,138,20,0.1)] rounded-2xl p-6 group-hover:border-[rgba(201,138,20,0.3)] transition-all">
                    <h3 className="font-display text-xl font-medium text-[#e8dcc8] mb-2">{step.title}</h3>
                    <p className="text-[#7a6e5e] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PREMIUM ───────────────────────────────────────── */}
        <section id="premium" className="py-24 px-5 bg-[#0a0804]">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-[rgba(201,138,20,0.25)] bg-[#161209]">
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-[rgba(201,138,20,0.08)] to-transparent pointer-events-none" />

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <p className="text-[#c98a14] text-xs tracking-[0.25em] uppercase mb-3">Unlock everything</p>
                    <h2 className="font-display text-4xl md:text-5xl font-light text-[#e8dcc8] mb-4">
                      Go <span className="text-gold-shimmer font-semibold">Premium</span>
                    </h2>
                    <p className="text-[#7a6e5e] leading-relaxed mb-6 text-sm">
                      Serious collectors deserve serious tools. Premium removes all limits and gives
                      you deeper insights, auction data, and export options.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {premiumFeatures.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-[#b0a090]">
                          <div className="w-4 h-4 rounded-full bg-[rgba(201,138,20,0.2)] flex items-center justify-center flex-shrink-0">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1.5 4l2 2 3-3" stroke="#c98a14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price card */}
                  <div className="w-full md:w-56 flex-shrink-0 bg-[#0e0b07] border border-[rgba(201,138,20,0.2)] rounded-2xl p-6 text-center">
                    <p className="text-[#5a4e3e] text-xs uppercase tracking-wider mb-3">Monthly</p>
                    <p className="font-display text-5xl font-semibold text-[#e4a825] mb-1">$4<span className="text-2xl">.99</span></p>
                    <p className="text-[#5a4e3e] text-xs mb-6">per month</p>
                    <div className="w-full bg-gradient-to-r from-[#c98a14] to-[#e4a825] text-[#0e0b07] rounded-xl py-3 text-sm font-semibold">
                      Coming Soon
                    </div>
                    <p className="text-[#3a2e1e] text-[10px] mt-3 leading-relaxed">
                      Subscription auto-renews. Cancel anytime via App Store or Google Play.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ────────────────────────────────────── */}
        <section className="py-16 px-5 border-t border-[rgba(201,138,20,0.08)]">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="mx-auto mb-4 text-[#3a2e1e]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <h3 className="font-display text-2xl text-[#8a7d6a] mb-3 font-light">Disclaimer</h3>
            <p className="text-[#4a3e2e] text-sm leading-relaxed">
              CoinScan provides <strong className="text-[#6a5e4e] font-medium">informational estimates only</strong> and
              does not constitute professional coin appraisal, legal advice, or financial advice.
              Auction value estimates are for reference purposes and may not reflect actual market prices.
              Always consult a certified numismatist for professional valuation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
