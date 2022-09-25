/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // Document head meta configuration
  siteMetadata: {
    title: `Duowork`,
    description: `Helping you build you next big idea through crisp custom software solutions.`,
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
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-postcss`],
}
