import React from "react";
import { getSrc } from "gatsby-plugin-image"
import SEO from "../../components/SEO";

export default function Head ({ data }: any) {
    const post = data.allMdx.nodes[0]
    const image: any = getSrc(post.frontmatter.hero_image)
  
    return <SEO title={post.frontmatter.title} image={image} />
  }