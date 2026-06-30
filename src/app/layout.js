import './globals.css'

export const metadata = {
  title: 'CoinScan — AI Coin Recognition',
  description: 'Identify any coin instantly with AI. Scan both sides and get country, denomination, year, material, history, and estimated auction value.',
  keywords: 'coin recognition, coin identification, numismatics, coin scanner, AI coins, coin collector app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0b07] text-[#e8dcc8] font-body antialiased">
        {children}
      </body>
    </html>
  )
}
