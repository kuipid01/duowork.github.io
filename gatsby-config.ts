require("dotenv").config({ path: `.env` })

module.exports = {
  // Document head meta configuration
  siteMetadata: {
    title: `Duowork`,
    description: `Transforming ideas into reality through custom software development 🛠✨`,
    siteUrl: `https://www.duowork.github.io`,
    author: {
      name: `Romeo Peter, Isaac Olugbenga`,
      summary: `Founder and co-founder of Duowork.`,
    },
    socialMedia: {
      twitter: `DuoworkHQ`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blogPosts`
      }
    },
    `gatsby-plugin-mdx`
  ],
}