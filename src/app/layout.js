import './globals.css'

export const metadata = {
  title: 'CoinScan Numismatic Identifier — AI Coin Scanner',
  description: 'CoinScan Numismatic Identifier helps collectors identify coins from two photos and estimate market value using current comparable offers from real auction marketplaces when available.',
  keywords: 'CoinScan, Numismatic Identifier, coin scanner, coin identification, coin collector app, numismatics, AI coin recognition, coin auction data, coin value estimate',
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
