import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
    </>
  )
}

export default Analytics
