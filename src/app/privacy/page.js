import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy — CoinScan',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2025">
      <p>
        Welcome to CoinScan ("we", "our", or "us"). This Privacy Policy explains how we collect,
        use, and protect your information when you use our mobile application and related services
        (collectively, the "App"). By using CoinScan, you agree to the practices described below.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Photos you submit</strong> — images of coins that you capture or upload for recognition purposes.</li>
        <li><strong>Device information</strong> — device type, operating system version, and anonymous identifiers for analytics and crash reporting.</li>
        <li><strong>Usage data</strong> — features used, scan frequency, and in-app navigation patterns, collected anonymously.</li>
        <li><strong>Subscription data</strong> — purchase records managed by Apple App Store or Google Play. We do not store your payment card details.</li>
        <li><strong>Support communications</strong> — emails or messages you send to our support address.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and improve the coin recognition service</li>
        <li>Process and validate subscription status</li>
        <li>Respond to your support requests</li>
        <li>Diagnose technical issues and improve App stability</li>
        <li>Comply with applicable laws and regulations</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell your personal data. We may share information with trusted third-party
        service providers (such as analytics platforms and cloud infrastructure providers) solely
        to operate and improve the App, under strict data protection agreements.
      </p>
      <p>
        We may disclose data if required by law, court order, or to protect the rights and
        safety of our users or the public.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        Coin images submitted for recognition may be processed in real time and are not
        permanently stored on our servers unless you explicitly save them to your collection
        within the App. Scan history stored locally on your device remains under your control.
      </p>

      <h2>5. Children's Privacy</h2>
      <p>
        CoinScan is not directed to children under the age of 13. We do not knowingly collect
        personal information from children. If you believe a child has provided us with personal
        information, please contact us and we will delete it promptly.
      </p>

      <h2>6. Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect your information.
        However, no method of electronic transmission or storage is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, or delete your
        personal data. To exercise these rights, please contact us at{' '}
        <a href="mailto:support@example.com" className="text-[#c98a14] hover:underline">support@example.com</a>.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes through the App or by updating the "Last updated" date above. Continued use of
        the App after changes constitutes acceptance of the revised policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For privacy-related questions or concerns, please contact:{' '}
        <a href="mailto:support@example.com" className="text-[#c98a14] hover:underline">support@example.com</a>
      </p>
    </LegalLayout>
  )
}
