import React from "react"
import { useSiteMetaData } from "../hooks/useSiteMetaData"
import favicon from "../assets/icons/favicon.ico"

type SEOType = {
  title?: string
  description?: string
  image?: string
  pathname?: string
  children?: JSX.Element
}

export default function SEO({
  title,
  description,
  image,
  pathname,
  children,
}: SEOType) {

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
    socialMedia,
  } = useSiteMetaData()

  const seo = {
    title: title ? `${defaultTitle} | ${title}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    author,
    socialMedia: {
      twitter: socialMedia.twitter,
      instagram: socialMedia.instagram
    },
    image
  }

  return (
    <>
      {/* General meta tags */}
      <title>{seo.title}</title>
      <meta name="og:image" content={seo.image} />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author.name} />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={`https://twitter.com/${seo.socialMedia.twitter}`} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.socialMedia.twitter} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />

      {/* Google meta tags */}
      <meta name="robots" content="max-snippet:-1" />
      <meta name="robots" content="max-image-preview:standard" />
      <meta name="robots" content="max-video-preview:-1"></meta>

      {/* Favicon */}
      <link rel="shortcut icon" href={favicon} type="image/x-icon"></link>
      <script
        src="https://kit.fontawesome.com/f65742b227.js"
        crossOrigin="anonymous"
      ></script>

      {children}
    </>
  )
}
