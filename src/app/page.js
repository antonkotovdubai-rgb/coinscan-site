import Header from '@/components/Header'
import Footer from '@/components/Footer'

const features = [
  ['Two-sided AI identification', 'Take photos of the obverse and reverse. CoinScan analyzes both sides to identify the country, denomination, year, and material.'],
  ['Detailed coin explanation', 'Get clear notes about inscriptions, design elements, unique features, and why the coin was identified this way.'],
  ['Auction value estimate', 'View an informational market range based on auction-style data, with median and price range where available.'],
  ['History and collection', 'Save scans, browse previous results, organize your collection, search, sort, and mark favorites.'],
  ['Statistics', 'Track countries, denominations, materials, collection value estimates, and top items in one clean dashboard.'],
  ['Backup and restore', 'Keep a local backup of your scan history, saved coin images, and collection data.'],
]

const steps = [
  ['01', 'Photograph the coin', 'Use good light and take one photo of each side of the coin.'],
  ['02', 'Let AI analyze it', 'CoinScan reads visual details and prepares a structured numismatic result.'],
  ['03', 'Save and compare', 'Review the result, value estimate, history, and add the coin to your collection.'],
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7C9BFF]/20 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-[#E6B85C]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#B8C3E5]">
                <img src="/logo.png" alt="CoinScan logo" className="h-6 w-6 rounded-lg" />
                AI coin recognition for collectors
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
                CoinScan Numismatic Identifier
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#B8C3E5]">
                Identify coins from photos, understand both sides, save scan history, build your digital collection, and view informational auction value estimates.
              </p>

              <div id="app-store" className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="rounded-2xl border border-[#7C9BFF]/35 bg-[#7C9BFF]/10 px-6 py-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9DABCF]">Coming soon</div>
                  <div className="mt-1 text-lg font-semibold text-white">App Store Connect</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#9DABCF]">Premium</div>
                  <div className="mt-1 text-lg font-semibold text-white">$4.99 / week · $29.99 / year</div>
                </div>
              </div>

              <p className="mt-5 text-sm text-[#8793B8]">
                3-day free trial. Premium unlocks unlimited coin analysis during the active subscription.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-b from-[#7C9BFF]/30 to-[#E6B85C]/10 blur-2xl" />
              <div className="relative rounded-[36px] border border-white/12 bg-[#0B1020] p-3 shadow-2xl shadow-black/50">
                <img src="/onboarding-1.png" alt="CoinScan app onboarding screen" className="rounded-[28px]" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7C9BFF]">Features</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">Built for real coin scans</h2>
              <p className="mt-4 text-[#B8C3E5]">A clean premium interface for quick identification, saved results, and collection tracking.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7C9BFF]/40 hover:bg-white/[0.06]">
                  <div className="mb-5 h-10 w-10 rounded-2xl bg-[#7C9BFF]/15 ring-1 ring-[#7C9BFF]/35" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9DABCF]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-20 bg-[#080C19]">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7C9BFF]">How it works</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">From photo to collection in seconds</h2>
              <div className="mt-8 space-y-4">
                {steps.map(([num, title, text]) => (
                  <div key={num} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7C9BFF]/15 font-semibold text-[#BFD0FF]">{num}</div>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#9DABCF]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/onboarding-2.png" alt="CoinScan feature screen" className="rounded-[28px] border border-white/10 bg-[#0B1020] p-2" />
              <img src="/onboarding-3.png" alt="CoinScan collection screen" className="mt-10 rounded-[28px] border border-white/10 bg-[#0B1020] p-2" />
            </div>
          </div>
        </section>

        <section id="premium" className="px-5 py-20">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#7C9BFF]/25 bg-gradient-to-br from-[#101735] to-[#080C19] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7C9BFF]">Premium</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white">Unlimited coin analysis</h2>
                <p className="mt-4 max-w-2xl text-[#B8C3E5]">
                  Start with a 3-day free trial. During an active subscription, Premium unlocks unlimited coin analysis and full access to scan history and collection tools.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                  <span className="text-[#B8C3E5]">Weekly</span>
                  <span className="text-2xl font-semibold text-white">$4.99</span>
                </div>
                <div className="flex items-end justify-between pt-4">
                  <span className="text-[#B8C3E5]">Yearly</span>
                  <span className="text-2xl font-semibold text-white">$29.99</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center">
            <img src="/logo.png" alt="CoinScan logo" className="mx-auto h-16 w-16 rounded-3xl" />
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white">Support and contact</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#B8C3E5]">
              CoinScan Numismatic Identifier is created by Anton Kotov. For support, privacy, or subscription questions, contact us by email.
            </p>
            <a href="mailto:coinscanidentifier@gmail.com" className="mt-6 inline-flex rounded-full bg-[#7C9BFF] px-6 py-3 text-sm font-semibold text-[#071022] transition hover:bg-[#9EB3FF]">
              coinscanidentifier@gmail.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
