import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'

export default function Blog({data}: any) {
  return (
    <Layout>
       {
           data.allMdx.nodes.map((node: any) => (
               <article key={node.id}>
                   <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                   <h2>posted: {node.frontmatter.date}</h2>
                   <p>{node.excerpt}</p>
               </article>
           ))
       }
    </Layout>
  )
}

export const Head = () => <SEO title='Blog' />

export const query = graphql`
    query blogPosts {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
`;
