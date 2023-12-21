import { apiCall } from '@/actions'
import BlocksRenderer from '@/components/blocks-renderer'
import Gallery from '@/components/gallery'
import config from '@/config'
import { Project, Screenshot } from '@/types'
import Image from 'next/image'

export default async function ProjectDetails({
  params,
}: {
  params: { id: string }
}) {
  const { data: project }: { data: Project } = await apiCall(
    `projects/${params.id}`,
    '?populate=*'
  )

  return (
    <section className="container flex flex-col items-center">
      <h1 className="mb-10 text-4xl font-extrabold">{project.name}</h1>
      <Project project={project} />
    </section>
  )
}

function Project({ project }: { project: Project }) {
  const { screenshots, description } = project
  const screenshot: Screenshot = screenshots[0]

  return (
    <section className="relative w-full overflow-hidden rounded-md border border-black/5 bg-gray-100 dark:bg-gray-900 sm:mb-8">
      <Image
        src={config.api + screenshot.url}
        width={screenshot.width}
        height={screenshot.height}
        alt={screenshot.name}
        quality={20}
        priority
        className="w-full rounded-t-lg shadow-2xl"
      />
      <div className="p-8 sm:w-full">
        <div className="flex flex-col items-center text-justify">
          <BlocksRenderer content={description} />
        </div>
      </div>

      <Gallery project={project} />
    </section>
  )
}
