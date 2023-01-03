import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"

export default function Blog({ data }: any) {
  const post = data.allMdx.nodes[0]

  return (
    <Layout>
      <article>
        <h2>{post.frontmatter.title}</h2>
        <h2>posted: {post.frontmatter.date}</h2>
        <p>{post.excerpt}</p>
      </article>
    </Layout>
  )
}

export const Head = ({ data }: any) => (
  <SEO title={data.allMdx.nodes[0].frontmatter.title} />
)

export const query = graphql`
  query blogPosts($id: String) {
    allMdx(
      filter: { id: { eq: $id } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, Y")
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`
