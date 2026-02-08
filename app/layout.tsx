import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tasnim Sakib - Portfolio',
  description: 'Full Stack Developer Portfolio',
  openGraph: {
    title: 'Tasnim Sakib - Portfolio',
    description: 'Full Stack Developer Portfolio',
    url: 'https://your-domain.vercel.app',
    siteName: 'Tasnim Sakib Portfolio',
    images: [
      {
        url: '/thumbnail.png',
        width: 1024,  // ← Changed
        height: 1024, // ← Changed
        alt: 'Tasnim Sakib Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tasnim Sakib - Portfolio',
    description: 'Full Stack Developer Portfolio',
    images: ['/thumbnail.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
