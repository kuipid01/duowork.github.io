import { graphql, useStaticQuery } from "gatsby"

type MeteDataType = {
  title: string
  description: string
  siteUrl: string
  author: {
    name: string
    summary: string
  }
  socialMedia: {
    twitter: string
    instagram: string
  }
}

export function useSiteMetaData(): MeteDataType {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author {
            name
            summary
          }
          socialMedia {
            twitter
            instagram
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
