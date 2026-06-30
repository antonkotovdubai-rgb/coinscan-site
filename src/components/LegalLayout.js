import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="px-5 pb-20 pt-28">
        <article className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#7C9BFF]">CoinScan</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white">{title}</h1>
          {updated && <p className="mt-3 text-sm text-[#8793B8]">Last updated: {updated}</p>}
          <div className="legal-content mt-8">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  )
}
