import './globals.css'

export const metadata = {
  title: 'InLink — Launching Soon',
  description: 'Trusted collaborations, escrow payments, AI KYC — InLink launching soon.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
