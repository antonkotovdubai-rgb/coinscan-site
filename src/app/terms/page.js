import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Terms of Use — CoinScan Numismatic Identifier',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="July 1, 2026">
      <p>These Terms govern your use of CoinScan Numismatic Identifier and the CoinScan website.</p>

      <h2>1. Informational use only</h2>
      <p>CoinScan provides AI-assisted coin identification and descriptions. When available, value estimates use current comparable offers from real auction marketplaces; if suitable matches are unavailable, the app may provide a source-backed approximate market estimate. Results may be inaccurate or incomplete and are not professional appraisal, financial, investment, legal, or authentication advice.</p>

      <h2>2. User responsibility</h2>
      <p>You are responsible for checking important information independently before buying, selling, insuring, grading, or authenticating any coin.</p>

      <h2>3. Premium access</h2>
      <p>Premium access may unlock unlimited coin analysis during the active subscription period and additional collection features. Subscription availability, pricing, renewal, cancellation, and refunds are handled according to Apple App Store rules.</p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to misuse the app, reverse engineer the service, overload backend systems, or upload unlawful, harmful, or unrelated content.</p>

      <h2>5. Changes</h2>
      <p>CoinScan may update the app, website, pricing, features, and these Terms from time to time.</p>

      <h2>6. Contact</h2>
      <p>For questions, contact: coinscanidentifier@gmail.com.</p>
    </LegalLayout>
  )
}
