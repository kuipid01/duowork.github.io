import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"


const getCreatorImgPlatform = (urlParam: string) => {
  const testParams = ["pexels", "unsplash"]

  for (let i = 0; i < testParams.length; i++) {
    const regex = new RegExp(`${testParams[i]}.com`)

    if (regex.test(urlParam)) {
      const t = testParams[i].toString()
      return t.replace(t[0], t[0].toUpperCase())
    }
  }
}

const Authors = ({ className, post }: any) => {
  if (post.frontmatter.author.length === 2) {
    const authors = post.frontmatter.author

    return (
      <div className={"blog-item-intro-footer " + className}>
        By{" "}
        {authors.map((author: string, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <span className="blog-item-author custom-text-green-dark">
                {author}
              </span>
              {idx === 0 && " & "}
            </React.Fragment>
          )
        })}
      </div>
    )
  }

  return (
    <div className={"blog-item-intro-footer " + className}>
      By{" "}
      <span className="blog-item-author custom-text-green-dark">
        {post.frontmatter.author}
      </span>
    </div>
  )
}

export default function Blog({ location, data, children }: any) {
  const post = data.allMdx.nodes[0]
  const image: any = getImage(post.frontmatter.hero_image)

  return (
    <Layout>
      <article className="sm:mx-10 mt-20 mb-10 flex flex-col justify-center items-center blog-content-container">
        <div className="blog-item w-3/4">
          <div className="blog-item-intro">
            <h1 className="text-1xl sm:text-3xl font-bold text-center blog-item-intro-title pb-5 pt-5">
              <span className="underline-color-green-light">
                {post.frontmatter.title}
              </span>
            </h1>

            <div className="breadcrumb-nav text-md text-center pb-5">
              <Link to="/" className="text-gray-800">
                <small>Home</small>
              </Link>
              <small className="breadcrumb-divide mx-1">/</small>
              <Link to="/blog" className="text-gray-800">
                <small>Blog</small>
              </Link>
              <small className="breadcrumb-divide mx-1">/</small>
              <small className="text-gray-400">{location.pathname.split("/")[2]}</small>
            </div>

            <div className="blog-item-intro-image">
              <GatsbyImage
                image={image}
                alt={post.frontmatter.hero_image_alt}
                className="w-full rounded-t-xl blog-item-image"
              />
              <div className="blog-item-intro-image-creator text-center py-2 text-gray-400 text-xs">
                Image by{" "}
                <span className="text-gray-500">
                  {post.frontmatter.hero_image_credit_text}
                </span>{" "}
                on{" "}
                <a
                  href={post.frontmatter.hero_image_credit_link}
                  rel="noopener"
                  target="_blank"
                  className="text-gray-500"
                >
                  {getCreatorImgPlatform(
                    post.frontmatter.hero_image_credit_link
                  )}
                </a>
              </div>
            </div>
            <div className="w-full my-5 blog-item-tag-container pl-5 overflow-x-scroll">
              {post.frontmatter.tags.map((tag: string, i: number) => (
                <small
                  key={i}
                  className="h-10 text-gray-400 mr-3 p-1 rounded-sm blog-item-tag"
                >
                  #{tag}
                </small>
              ))}
            </div>
            <div className="blog-item-intro-footer text-sm flex flex-col md:flex-row items-start md:items-center w-full w-full-max pl-5 my-10">
              <Authors className="text-gray-500" post={post} />{" "}
              <hr className="text-gray-400 bg-gray-400 w-10 my-2 sm:mx-5" />{" "}
              <span className="custom-text-green-dark">
                {post.frontmatter.date}
              </span>{" "}
              <hr className="text-gray-400 bg-gray-400 w-10 my-2 sm:mx-5" />{" "}
              <span className="custom-text-green-dark">{post.frontmatter.read_time}</span>
            </div>
          </div>

          <div className="blog-item-body mt-10 min-min w-11/12 md:w-10/12">
            {children}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data }: any) => {
  const post = data.allMdx.nodes[0]
  const image: any = getSrc(post.frontmatter.hero_image);

  return <SEO title={post.frontmatter.title} image={image} />
}

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
          author
          tags
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
        excerpt
        tableOfContents
      }
    }
  }
`
