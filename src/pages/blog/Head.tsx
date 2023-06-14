import React from "react";
import SEO from "../../components/SEO";

export default function Head ({title, description, image }: any) {
   
    return <SEO title={title} description={description} image={image} />
  }