import BlocksRenderer from '@/components/blocks-renderer'
import { apiCall } from '@/config'
import { Project } from '@/types'

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

function Project({ name, description }: Project) {
  return (
    <>
      <h2 className="mb-4 flex justify-center text-xl font-bold">{name}</h2>
      <div className="flex flex-col items-center text-justify">
        <BlocksRenderer content={description} />
      </div>
    </>
  )
}
