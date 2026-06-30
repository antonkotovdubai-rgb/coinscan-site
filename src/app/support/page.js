import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Support — CoinScan',
}

const faqs = [
  {
    q: 'How accurate is coin recognition?',
    a: 'CoinScan uses advanced AI trained on millions of coins. Accuracy is high for common coins from major minting countries. Rare, damaged, or heavily worn coins may be harder to identify precisely.',
  },
  {
    q: 'How do I get the best scan results?',
    a: 'Place the coin on a plain, contrasting surface with good, even lighting. Avoid shadows and glare. Photograph straight down, keeping the coin flat and fully in frame. Submit both obverse (front) and reverse (back) for best results.',
  },
  {
    q: 'Are the value estimates accurate?',
    a: 'Estimates are informational only and based on publicly available auction data. They do not account for the specific grade, condition, or provenance of your coin. For a reliable appraisal, consult a certified numismatist.',
  },
  {
    q: 'How do I cancel my Premium subscription?',
    a: 'iOS: Settings → [Your Name] → Subscriptions → CoinScan → Cancel. Android: Google Play → Profile → Payments & subscriptions → Subscriptions → CoinScan → Cancel. Cancellation takes effect at the end of the current billing period.',
  },
  {
    q: 'How do I restore purchases after reinstalling?',
    a: 'Open CoinScan, go to Settings within the app, and tap "Restore Purchases." Make sure you are signed in to the same App Store or Google Play account used for the original purchase.',
  },
  {
    q: 'Is my data private?',
    a: 'Yes. Please review our Privacy Policy for full details. We do not sell your personal data. Coin images are processed for recognition and are not permanently stored on our servers unless you save them to your collection.',
  },
]

export default function SupportPage() {
  return (
    <LegalLayout title="Support" lastUpdated={null}>
      <p>
        We're here to help. Browse the frequently asked questions below, or reach out to us
        directly if you can't find an answer.
      </p>

      {/* Contact card */}
      <div className="my-8 bg-[#161209] border border-[rgba(201,138,20,0.2)] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-[#c98a14]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <div>
          <p className="text-[#e8dcc8] font-medium font-display text-lg mb-1">Email Support</p>
          <p className="text-[#7a6e5e] text-sm mb-2">
            For account issues, billing questions, or anything not covered below — email us directly.
          </p>
          <a
            href="mailto:support@example.com"
            className="text-[#c98a14] hover:text-[#e4a825] transition-colors text-sm font-medium"
          >
            support@example.com
          </a>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="flex flex-col gap-4 mt-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#161209] border border-[rgba(201,138,20,0.1)] rounded-xl p-5 hover:border-[rgba(201,138,20,0.25)] transition-all">
            <p className="text-[#e8dcc8] font-medium mb-2 text-sm">{faq.q}</p>
            <p className="text-[#7a6e5e] text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Response Times</h2>
      <p>
        We aim to respond to all support requests within <strong className="text-[#b0a090]">1–2 business days</strong>.
        Please include your device type, operating system, and a description of the issue when
        contacting us to help us assist you faster.
      </p>

      <h2>Managing Your Subscription</h2>
      <p>
        Subscriptions are managed through the App Store (iOS) or Google Play (Android). For
        billing disputes, refund requests, or issues with payment, please contact Apple or Google
        support directly, as CoinScan does not process payments or refunds directly.
      </p>
      <p>
        For subscription management instructions, see our{' '}
        <a href="/subscription-terms" className="text-[#c98a14] hover:underline">Subscription Terms</a>.
      </p>
    </LegalLayout>
  )
}
