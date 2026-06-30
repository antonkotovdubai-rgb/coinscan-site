import './globals.css'

export const metadata = {
  title: 'CoinScan Numismatic Identifier — AI Coin Scanner',
  description: 'CoinScan Numismatic Identifier helps collectors identify coins from obverse and reverse photos, save scan history, build a collection, and view informational auction value estimates.',
  keywords: 'CoinScan, Numismatic Identifier, coin scanner, coin identification, coin collector app, numismatics, AI coin recognition',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#060915] text-[#F4F7FF] font-body antialiased">
        {children}
      </body>
    </html>
  )
}
