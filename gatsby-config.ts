require("dotenv").config({ path: `.env` });

module.exports = {
  // Document head meta configuration
  siteMetadata: {
    title: `Duowork`,
    description: `Tailor-made software solutions for business success. At Duowork, we specialize in crafting customized software solutions designed specifically for you business needs. our mission is help businesses and startups build and maintain their digital ideas and ventures. Whether it's a SaaS product, landing page, software rework & redesign, web app, mobile app or a desktop app; with our team of experts and innovative approach, we ensure your ideas are transformed into powerful solutions that drive success.`,
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
