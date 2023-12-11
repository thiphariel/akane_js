import BlocksRenderer from '@/components/blocks-renderer'
import config, { apiCall } from '@/config'
import { Project, Screenshot } from '@/types'
import Image from 'next/image'

export default async function Portfolio() {
  const projects = await apiCall('projects', '?populate=*')

  return (
    <section className="container flex flex-col items-center">
      <h1 className="mb-10 text-4xl font-extrabold">Portfolio</h1>
      {projects.data.map((project: Project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  )
}

function Project({ name, description, screenshots }: Project) {
  const screenshot: Screenshot = screenshots[0]
  const screenshot_back: Screenshot = screenshots[1]

  return (
    <section className="group relative mb-3 max-w-2xl cursor-pointer overflow-hidden rounded-md border border-black/5 bg-gray-100 transition last:mb-0 odd:pl-8 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 sm:mb-8 sm:h-64 sm:pr-8">
      <div className="px-5 py-4 group-odd:ml-72 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h2 className="mb-4 flex text-xl font-bold">{name}</h2>
        <div className="flex flex-col items-center overflow-ellipsis text-justify">
          <BlocksRenderer content={description} />
        </div>
      </div>
      <Image
        src={config.api + screenshot.url}
        width={screenshot.width}
        height={screenshot.height}
        alt={screenshot.name}
        quality={45}
        priority
        className="group absolute -right-40 top-8 z-10 w-[28.25rem] rounded-t-lg shadow-2xl transition group-odd:-left-40 group-odd:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-odd:group-hover:translate-x-3 group-odd:group-hover:translate-y-3 group-odd:group-hover:rotate-2"
      />
      {screenshot_back && (
        <Image
          src={config.api + screenshot_back.url}
          width={screenshot_back.width}
          height={screenshot_back.height}
          alt={screenshot_back.name}
          quality={45}
          priority
          className="group absolute -right-44 top-6 w-[28.25rem] rotate-2 rounded-t-lg shadow-2xl transition group-odd:-left-44 group-odd:right-[initial] group-odd:-rotate-2 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-3 group-hover:scale-105 group-odd:group-hover:translate-x-3 group-odd:group-hover:translate-y-3 group-odd:group-hover:-rotate-3"
        />
      )}
    </section>
  )
}
