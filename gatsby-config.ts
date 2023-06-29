require("dotenv").config({ path: `.env` });

module.exports = {
  // Document head meta configuration
  siteMetadata: {
    title: `Duowork`,
    description: `Tailor-made design and software solutions for business success. At Duowork, we specialize in crafting customized and robust solutions for startups and businesses. our mission is to help build and maintain digital ideas and ventures.`,
    siteUrl: `https://www.duowork.github.io`,
    author: {
      name: `Romeo Peter | Isaac Olugbenga`,
      summary: `Founder and co-founder of Duowork.`,
    },
    socialMedia: {
      twitter: `duoworkhq`,
      instagram: `duoworkhq`,
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
};
