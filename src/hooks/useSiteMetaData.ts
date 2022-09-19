import { graphql, useStaticQuery } from "gatsby"

type MeteDataType = {
  title: string
  description: string
  siteUrl: string
  author: {
    name: string
    summary: string
  }
}

export function useSiteMetaData(): MeteDataType {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          title
          description
          siteUrl
          author
        }
      }
    }
  `)

  return data.site.siteMetaData
}
