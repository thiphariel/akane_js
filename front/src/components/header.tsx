'use client'

import { MenuItems } from '@/types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Header({ menuItems }: { menuItems: MenuItems }) {
  const items = menuItems?.data
  const segment = useSelectedLayoutSegment()

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-16 w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur transition-colors dark:border-black/40 dark:bg-gray-900 dark:bg-opacity-75 sm:top-6 sm:h-12 sm:w-[30rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-[3.75rem] -translate-x-1/2 py-2 sm:top-[1.65rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {items?.map(item => (
            <motion.li
              key={item.id}
              className="relative flex h-3/4 w-1/4 items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                href={`/${item.url ?? ''}`}
                className={clsx(
                  'flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-bold text-gray-950 dark:text-gray-300':
                      item.url === segment,
                  }
                )}>
                {item.title}
                {item.url === segment && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 transition-colors dark:bg-gray-950"
                    layoutId="segment"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
