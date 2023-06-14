require("dotenv").config({ path: `.env` })

module.exports = {
  // Document head meta configuration
  siteMetadata: {
    title: `Duowork`,
    description: `Transforming ideas into reality through custom software development 🛠✨`,
    siteUrl: `https://www.duowork.github.io`,
    author: {
      name: `Romeo Peter, Isaac Olugbenga: Founder and co-founder of Duowork.`,
      summary: `Founder and co-founder of Duowork.`,
    },
    socialMedia: {
      twitter: `duoworkhq`,
      instagram: `duoworkhq`,
    },

    // Not part of the meta data but I'd like to acess this data
    webAppData: {
      annoucment: {
        ifAnnoucment: false,
        annoucment: ``,
      },
    },
  },

  // Your site config here
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
  ],
}
