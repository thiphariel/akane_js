'use client'

import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

type Theme = 'light' | 'dark'
const STORAGE_THEME_KEY = 'theme'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>()

  // Init the switcher on client side then render it
  useEffect(() => {
    const localTheme = localStorage.getItem(STORAGE_THEME_KEY) as Theme | null
    const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    const appliedTheme = localTheme ?? systemTheme

    setTheme(appliedTheme)

    // Update the classList from the document based on the theme
    document.documentElement.classList[
      appliedTheme === 'dark' ? 'add' : 'remove'
    ]('dark')

    if (!localTheme) {
      localStorage.setItem(STORAGE_THEME_KEY, systemTheme)
    }
  }, [])

  const toggle = () => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light'

    // Update the classList from the document based on the theme
    document.documentElement.classList[
      toggledTheme === 'dark' ? 'add' : 'remove'
    ]('dark')

    setTheme(toggledTheme)
    localStorage.setItem(STORAGE_THEME_KEY, toggledTheme)
  }

  return (
    theme && (
      <button
        className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-105 dark:border-gray-900 dark:bg-gray-900"
        onClick={toggle}>
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    )
  )
}
