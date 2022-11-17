import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

const DEFAULT_LAYOUT = 'UsesLayout'

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'uses')
  return { props: { author } }
}
export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      {author && <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={author} />}
    </MainLayout>
  )
}
