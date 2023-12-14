import { apiCall } from '@/actions'
import Header from '@/components/header'
import ThemeSwitcher from '@/components/theme-switcher'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const century = localFont({
  src: [
    {
      path: '../../public/fonts/CenturyGothicRegular.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/CenturyGothicItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CenturyGothicBold.ttf',
      weight: '800',
    },
    {
      path: '../../public/fonts/CenturyGothicBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
})

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
        className={`${century.className} bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative transition-colors h-[5000px]`}>
        <Header menuItems={menuItems} />
        <main className="mt-24 flex justify-center">{children}</main>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
