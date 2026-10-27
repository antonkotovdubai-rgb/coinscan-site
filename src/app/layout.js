import './globals.css'

export const metadata = {
  title: 'CoinScan Numismatic Identifier — AI Coin Scanner',
  description: 'CoinScan matches coin photos with its own curated, daily-reviewed coin database and estimates market value using current comparable auction offers when available.',
  keywords: 'CoinScan, Numismatic Identifier, coin database, curated coin database, coin scanner, coin identification, coin collector app, numismatics, AI coin recognition, coin auction data, coin value estimate',
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
