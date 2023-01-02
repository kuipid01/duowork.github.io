import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"

export default function Blog({ data }: any) {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <section
        className="px-10 sm:h-screen blog-container post-container"
      >
        <div className="sm:h-20 mb-0 mt-5 sm:my-10 blog-header">
          <h1 className="text-2xl sm:text-4xl font-semibold"><span className="underline-color-green-light">Duowork Articles</span></h1>
        </div>

        <div id="blog-items-container" className="flex items-center justify-start flex-wrap my-5">
        {posts.map((post: any) => {
          const image: any = getImage(post.frontmatter.hero_image);

          return (
            <article
              key={post.id}
              className="blog-items w-80 h-96 rounded-md shadow-md mt-5 sm:mr-5"
            >
              <Link
                to={`/blog/${post.frontmatter.slug}`}
                className="h-full blog-item-link"
              >
                <GatsbyImage
                  image={image}
                  alt={post.frontmatter.hero_image_alt}
                  className="w-full rounded-t-md blog-item-image"
                />
                <div className="mx-2 blog-item-text-container">
                  <div className="w-full my-5 blog-item-tag-container">
                    {post.frontmatter.tags.map((tag: string, i: number) => (
                      <small
                        key={i}
                        className="h-10 text-gray-400 mr-3 p-1 rounded-sm blog-item-tag"
                      >
                        #{tag}
                      </small>
                    ))}
                  </div>
                  <h2 className="blog-item-title text-2xl text-gray-800">
                    {post.frontmatter.title}
                  </h2>
                  <div className="blog-item-date-container mt-5">
                    <small className="text-gray-400 blog-item-date">
                      {post.frontmatter.date}
                    </small>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <SEO title="Blog" />

export const query = graphql`
  query blogPosts {
    allMdx {
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
          tags
        }
        id
      }
    }
  }
`
