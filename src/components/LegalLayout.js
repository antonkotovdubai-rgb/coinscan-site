import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 px-5">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#5a4e3e] mb-10">
            <Link href="/" className="hover:text-[#c98a14] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#8a7d6a]">{title}</span>
          </div>

          {/* Title */}
          <div className="mb-10 pb-8 border-b border-[rgba(201,138,20,0.12)]">
            <p className="text-[#c98a14] text-xs tracking-[0.2em] uppercase mb-3">CoinScan</p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[#e8dcc8] mb-4">{title}</h1>
            {lastUpdated && (
              <p className="text-[#5a4e3e] text-sm">Last updated: {lastUpdated}</p>
            )}
          </div>

          {/* Content */}
          <div className="legal-content">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
