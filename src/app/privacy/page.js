import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy — CoinScan Numismatic Identifier',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 1, 2026">
      <p>This Privacy Policy explains how CoinScan Numismatic Identifier handles information when you use the application and website.</p>

      <h2>1. App information</h2>
      <p>CoinScan Numismatic Identifier is created by Anton Kotov. Support email: coinscanidentifier@gmail.com.</p>

      <h2>2. Information processed by the app</h2>
      <p>The app may process coin photos that you provide in order to identify the coin, describe its obverse and reverse, and create an informational result. The app may also store scan history, collection data, and saved coin images locally on your device.</p>

      <h2>3. AI analysis</h2>
      <p>Coin photos may be sent to AI and backend services only for the purpose of coin recognition and result generation. Do not upload images that contain personal, sensitive, or unrelated information.</p>

      <h2>4. Subscriptions</h2>
      <p>Premium subscriptions and free trials are handled through Apple App Store systems. CoinScan does not directly receive or store your full payment card details.</p>

      <h2>5. Data control</h2>
      <p>You can remove locally stored scan history and collection data from inside the app where available. Deleting the app may also remove local app data from your device.</p>

      <h2>6. Contact</h2>
      <p>For privacy questions, contact: coinscanidentifier@gmail.com.</p>
    </LegalLayout>
  )
}
