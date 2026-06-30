import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Terms of Use — CoinScan',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="January 1, 2025">
      <p>
        These Terms of Use ("Terms") govern your access to and use of the CoinScan mobile
        application ("App") and any related services provided by CoinScan ("we", "our", "us").
        By downloading or using the App, you agree to be bound by these Terms.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using CoinScan, you confirm that you are at least 13 years of age,
        have read and understood these Terms, and agree to comply with them. If you do not agree,
        do not use the App.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        CoinScan is an AI-powered mobile application that allows users to photograph coins and
        receive informational data including denomination, country, year, material composition,
        historical notes, and estimated auction value ranges. The App may also provide personal
        collection management and scan history features.
      </p>

      <h2>3. Informational Estimates — Not Professional Advice</h2>
      <p>
        <strong>All coin identifications, descriptions, and value estimates provided by CoinScan
        are for informational purposes only.</strong> They do not constitute professional coin
        appraisal, numismatic certification, legal advice, or financial advice. Estimated auction
        values are derived from publicly available data and algorithms and may not reflect actual
        market conditions or the specific condition of your coin. Always consult a certified
        numismatist for professional valuation.
      </p>

      <h2>4. User Responsibilities</h2>
      <ul>
        <li>You must use the App only for lawful purposes.</li>
        <li>You may not attempt to reverse-engineer, copy, or exploit the App's AI models or databases.</li>
        <li>You are responsible for maintaining the security of your device and account.</li>
        <li>You may not use the App to misrepresent the authenticity or value of coins in commercial transactions.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, software, algorithms, and design elements within CoinScan are owned by us
        or our licensors and are protected by copyright and other intellectual property laws.
        You may not reproduce, distribute, or create derivative works without our written permission.
      </p>

      <h2>6. User-Generated Content</h2>
      <p>
        By submitting photos or other content to the App, you grant us a non-exclusive, royalty-free
        license to use that content to operate and improve the recognition service. You retain
        ownership of your photos.
      </p>

      <h2>7. Disclaimers and Limitation of Liability</h2>
      <p>
        The App is provided "as is" without warranties of any kind. We do not guarantee the
        accuracy, completeness, or reliability of any coin identification or valuation. To the
        maximum extent permitted by law, we shall not be liable for any direct, indirect,
        incidental, or consequential damages arising from your use of the App.
      </p>

      <h2>8. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to the App at any time for
        violation of these Terms or for any other reason, with or without notice.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the App after changes constitutes
        your acceptance of the revised Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions regarding these Terms, contact us at:{' '}
        <a href="mailto:support@example.com" className="text-[#c98a14] hover:underline">support@example.com</a>
      </p>
    </LegalLayout>
  )
}
