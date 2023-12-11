import Header from '@/components/header'
import ThemeSwitcher from '@/components/theme-switcher'
import { apiCall } from '@/config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akane',
  description: "Akane's portfolio",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menuItems = await apiCall('menu-items')

  return (
    <html lang="en" className="dark !scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative transition-colors h-[5000px]`}>
        <Header menuItems={menuItems} />
        <main className="mt-24 flex justify-center">{children}</main>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
