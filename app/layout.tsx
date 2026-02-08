import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tasnim Sakib - Full Stack Developer | SEO Specialist',
  description: 'Professional portfolio of Tasnim Sakib - Full Stack Developer and SEO Specialist showcasing projects, skills, and expertise',
  openGraph: {
    title: 'Tasnim Sakib - Full Stack Developer | SEO Specialist',
    description: 'Professional portfolio of Tasnim Sakib - Full Stack Developer and SEO Specialist',
    images: ['/thumbnail.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tasnim Sakib - Full Stack Developer | SEO Specialist',
    description: 'Professional portfolio of Tasnim Sakib - Full Stack Developer and SEO Specialist',
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
      <head>
        <link rel="icon" href="/thumbnail.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}