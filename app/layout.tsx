import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JSTL TMT Bars - India\'s Trusted Steel Legacy',
  description: 'JSTL TMT Bars - High-strength, earthquake-resistant reinforcing bars manufactured by Jindal Steel Tubes Limited. Available in Fe 550D & UHD 550 grades.',
  icons: {
    icon: '/logo5.png',
    apple: '/logo5.png',
  },
}

import { WhatsAppButton } from '@/components/ui/whatsapp-button'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
