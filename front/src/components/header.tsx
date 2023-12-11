'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-16 w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur transition-colors dark:border-black dark:bg-black dark:text-gray-50 dark:shadow-white/[0.02] sm:top-6 sm:h-12 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <motion.li
            className="flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Link
              href="/"
              className="flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:hover:text-gray-400">
              About
            </Link>
          </motion.li>
          <motion.li
            className="flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Link
              href="/"
              className="flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:hover:text-gray-400">
              Portfolio
            </Link>
          </motion.li>
          <motion.li
            className="flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Link
              href="/"
              className="flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:hover:text-gray-400">
              Akane
            </Link>
          </motion.li>
          <motion.li
            className="flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Link
              href="/"
              className="flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:hover:text-gray-400">
              Commission
            </Link>
          </motion.li>
          <motion.li
            className="flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            <Link
              href="/"
              className="flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:hover:text-gray-400">
              Media
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}
