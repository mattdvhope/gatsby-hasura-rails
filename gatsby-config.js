// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // in .env.development, NODE_ENV=development gatsby develop
});

// for options in `gatsby-source-graphql`
const fetch = require(`isomorphic-fetch`)
const { createHttpLink } = require(`@apollo/client`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `hasura`,
        fieldName: `blog`,
        createLink: () => {
          return createHttpLink({
            uri: "https://hasura-heroku-based.herokuapp.com/v1/graphql",
            headers: {
              'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
            },
            fetch,
          })
        },
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
