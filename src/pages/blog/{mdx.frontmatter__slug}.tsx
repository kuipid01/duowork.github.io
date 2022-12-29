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
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt(pruneLength: 50)
      }
    }
  }
`
