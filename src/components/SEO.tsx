import React from "react"
import { useSiteMetaData } from "../hooks/useSiteMetaData"
import favicon from "../assets/duowork-logo/favicon.ico"

type SEOType = {
  title?: string
  description?: string
  pathname?: string
  children?: JSX.Element
}

export default function SEO({
  title,
  description,
  pathname,
  children,
}: SEOType) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
  } = useSiteMetaData()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />

      {/* Favicon */}
      <link rel="shortcut icon" href={favicon} type="image/x-icon"></link>

      {/* <meta name="og:image" content="" /> */}
      <script
        src="https://kit.fontawesome.com/f65742b227.js"
        crossOrigin="anonymous"
      ></script>

      {children}
    </>
  )
}
