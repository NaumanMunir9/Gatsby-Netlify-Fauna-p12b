// libraries
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `JAMStack Todo App`,
    description: `JAMStack Todo App - Gatsby Netlify FaunaDB`,
    author: `MNM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JAMStack Todo App`,
        short_name: `jamstack-todo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-faunadb`,
      options: {
        // The secret for the key you're using to connect to your Fauna database.
        // You can generate on of these in the "Security" tab of your Fauna Console.
        secret: process.env.FAUNADB_SECRET_API_KEY,
        // The name of the index you want to query
        // You can create an index in the "Indexes" tab of your Fauna Console.
        index: `allLinks`,
      },
    },
  ],
}
