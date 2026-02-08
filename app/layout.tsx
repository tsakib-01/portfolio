import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tasnim Sakib - Portfolio',
  description: 'Full Stack Developer Portfolio',
  openGraph: {
    images: ['/thumbnail.png'],
  },
  twitter: {
    card: 'summary_large_image',
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
