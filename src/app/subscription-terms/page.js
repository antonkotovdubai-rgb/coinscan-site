import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Subscription Terms — CoinScan',
}

export default function SubscriptionTermsPage() {
  return (
    <LegalLayout title="Subscription Terms" lastUpdated="January 1, 2025">
      <p>
        These Subscription Terms describe the conditions under which you may purchase and use a
        premium subscription ("Premium") within the CoinScan mobile application. By purchasing
        a subscription, you agree to these terms in addition to our general Terms of Use.
      </p>

      <h2>1. Subscription Plans</h2>
      <p>
        CoinScan offers a Premium subscription that unlocks additional features including, but
        not limited to: unlimited daily scans, detailed rarity and grading notes, auction price
        history, collection export, and an ad-free experience. Available plans and pricing are
        displayed within the App at the time of purchase and may vary by region.
      </p>

      <h2>2. Free Trial</h2>
      <p>
        We may offer a free trial period for new subscribers. The duration of any free trial will
        be stated clearly at the time of sign-up. Unless you cancel before the trial ends,
        your subscription will automatically convert to a paid plan at the applicable rate.
      </p>

      <h2>3. Automatic Renewal</h2>
      <p>
        <strong>Your subscription automatically renews at the end of each billing period</strong>
        (monthly or annual, as selected) unless you cancel it at least 24 hours before the end
        of the current period. Renewal charges are made to your payment method on file with the
        App Store or Google Play at the then-current subscription price.
      </p>

      <h2>4. Billing and Payment</h2>
      <p>
        All subscription payments are processed by Apple App Store or Google Play, depending on
        your platform. We do not directly handle or store your payment information. By initiating
        a subscription purchase, you agree to the billing policies of your respective app store.
      </p>

      <h2>5. Managing Your Subscription</h2>
      <p>You can manage, pause, or cancel your subscription at any time through:</p>
      <ul>
        <li>
          <strong>iOS users:</strong> Settings → [Your Name] → Subscriptions → CoinScan
        </li>
        <li>
          <strong>Android users:</strong> Google Play → Profile icon → Payments & subscriptions → Subscriptions → CoinScan
        </li>
      </ul>
      <p>
        Cancellation takes effect at the end of your current billing period. You will retain
        access to Premium features until that date.
      </p>

      <h2>6. Restore Purchases</h2>
      <p>
        If you reinstall the App or switch devices, you can restore your active subscription
        using the "Restore Purchases" function available within the App's settings. This feature
        is managed entirely through the App Store or Google Play.
      </p>

      <h2>7. Refund Policy</h2>
      <p>
        All subscription purchases are subject to the refund policy of the platform through which
        they were made. For iOS, refund requests must be submitted to Apple. For Android, refund
        requests must be submitted to Google. CoinScan does not process refunds directly.
      </p>

      <h2>8. Price Changes</h2>
      <p>
        We reserve the right to modify subscription pricing at any time. Any price changes will
        take effect at your next renewal period. You will be notified in advance of any price
        changes through the App or via your platform's standard notification mechanisms.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        Premium features are provided "as is." We do not guarantee uninterrupted availability
        of any feature. We are not liable for any loss arising from temporary unavailability of
        Premium features.
      </p>

      <h2>10. Contact</h2>
      <p>
        For subscription-related questions, contact us at:{' '}
        <a href="mailto:support@example.com" className="text-[#c98a14] hover:underline">support@example.com</a>
      </p>
    </LegalLayout>
  )
}
