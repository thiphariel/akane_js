import ThemeSwitcher from '@/components/theme-switcher'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akane',
  description: "Akane's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative transition-colors`}>
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  )
}
