import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Support — CoinScan Numismatic Identifier',
}

export default function SupportPage() {
  return (
    <LegalLayout title="Support" updated="July 1, 2026">
      <p>Need help with CoinScan Numismatic Identifier? Contact support by email.</p>

      <h2>Contact</h2>
      <p>Email: coinscanidentifier@gmail.com</p>

      <h2>About the app</h2>
      <p>CoinScan helps users identify coins from obverse and reverse photos, save scan history, manage a collection, and estimate market value using current comparable offers from real auction marketplaces when available.</p>

      <h2>Before contacting support</h2>
      <ul>
        <li>Check that your coin photos are clear and taken in good lighting.</li>
        <li>For purchase issues, check your Apple ID subscription settings.</li>
        <li>For restore issues, use the restore option in the app if available.</li>
      </ul>

      <h2>Important note</h2>
      <p>CoinScan results are informational only. The app does not provide professional appraisal, grading, authentication, financial, or investment advice.</p>
    </LegalLayout>
  )
}
