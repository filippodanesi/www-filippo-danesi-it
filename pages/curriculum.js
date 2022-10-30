import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Lavoro come SEO Specialist e Digital Strategist - ${siteMetadata.author}`} description={`Dove sono e cosa sto facendo? Cosa ho studiato? Qui troverai tutte le informazioni su come sono arrivato a svolgere questo lavoro e cosa mi ha portato a diventare un SEO Specialist!`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Curriculum
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Dove sono e cosa sto facendo? Cosa ho studiato? Qui troverai tutte le informazioni su come sono arrivato a svolgere questo lavoro e cosa mi ha portato a diventare un SEO Specialist!
          </p>
        </div>
      </div>
    </>
  )
}
