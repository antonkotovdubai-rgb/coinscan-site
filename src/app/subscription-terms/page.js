import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Subscription Terms — CoinScan Numismatic Identifier',
}

export default function SubscriptionTermsPage() {
  return (
    <LegalLayout title="Subscription Terms" updated="October 27, 2026">
      <p>CoinScan Numismatic Identifier offers optional Premium subscriptions.</p>

      <h2>1. Plans</h2>
      <p>Available plans may include a weekly subscription for $7.99 and a yearly subscription for $34.99. A 3-day free trial may be available for eligible users.</p>

      <h2>2. Premium features</h2>
      <p>During an active Premium subscription, users may receive unlimited coin analysis and access to premium collection and history features where available in the app.</p>

      <h2>3. Billing and renewal</h2>
      <p>Subscriptions are billed through the Apple App Store. Subscriptions renew automatically unless cancelled according to Apple App Store rules before the end of the current billing period.</p>

      <h2>4. Cancellation</h2>
      <p>You can manage or cancel subscriptions in your Apple ID subscription settings. Deleting the app does not necessarily cancel an active subscription.</p>

      <h2>5. Price changes</h2>
      <p>Prices may vary by region and may change. The final price and trial terms are shown by Apple before confirmation of purchase.</p>

      <h2>6. Support</h2>
      <p>For subscription questions, contact: coinscanidentifier@gmail.com.</p>
    </LegalLayout>
  )
}
