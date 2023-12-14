'use client'

import config from '@/config'
import { Screenshot } from '@/types'
import { useState } from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

export default function Gallery({
  screenshots,
}: {
  screenshots: Screenshot[]
}) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState<number>(0)

  const slides = screenshots.map(screenshot => ({
    src: config.api + screenshot.url,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: config.api + screenshot.url, width: 320, height: 213 },
      { src: config.api + screenshot.url, width: 640, height: 426 },
      { src: config.api + screenshot.url, width: 1200, height: 800 },
      { src: config.api + screenshot.url, width: 2048, height: 1365 },
      { src: config.api + screenshot.url, width: 3840, height: 2560 },
    ],
  }))

  return (
    <div className="w-full">
      <div className="mx-2 flex h-full flex-col flex-wrap gap-0 md:mx-0 md:grid md:grid-cols-2">
        {screenshots.map(screenshot => (
          <div
            key={screenshot.id}
            className="group relative h-[30vh] cursor-pointer"
            onClick={() => {
              setOpen(true)
              setIndex(screenshots.indexOf(screenshot))
            }}>
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${config.api + screenshot.url}")`,
              }}>
              <div className="absolute bottom-0 left-2 z-10 text-3xl text-white">
                {screenshot.name}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-75">
              <p className="text-white">
                <AiOutlineExpandAlt className="h-16 w-16 rounded-full border bg-neutral-500 p-3 text-5xl hover:bg-white hover:text-black" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        controller={{
          closeOnPullDown: true,
        }}
        plugins={[Zoom]}
        index={index}
        slides={slides}
      />
    </div>
  )
}
