
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
 })

export const metadata: Metadata = {
  title: {
    default: 'Dataformer',
    template: `%s - Dataformer`
  },
  description: 'Deep Data Insights for Superior LLM Performance.',
  // description: 'Superior LLM Performance with Deep Data Insights.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-white w-full ${inter.variable}`}>
        <div className='min-h-screen'>
        <div className='w-full mx-auto'>
        {children}
        </div>
        </div>
        <Footer/>
      </body>
    </html>
  )
}