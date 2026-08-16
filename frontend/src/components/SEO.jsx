import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | StritGRAD Academy NPC` : "StritGRAD Academy NPC"
  const url = `https://www.stritgradacademy.org.za${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
