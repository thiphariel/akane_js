'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}>
      {children}
    </motion.div>
  )
}
