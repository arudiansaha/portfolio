import '@/styles/main.scss'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import React from 'react'

const outfit = Outfit({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Arudiansaha',
  description: 'Here all my work from challenges and personal projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={outfit.variable}>{children}</body>
    </html>
  )
}
