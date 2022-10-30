import siteMetadata from '@/data/siteMetadata'
import Clients from '@/data/Clients'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
          <Clients />
          <h1 className="py-6 text-center ">
            <RoughNotation
              animate="true"
              animationDelay="1000"
              animationDuration="4000"
              type="circle"
              color="#5DE4c7"
              show={true}
              strokeWidth="3"
            >
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
