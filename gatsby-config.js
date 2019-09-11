module.exports = {
  siteMetadata: {
    title: `James | Teerayuth`,
    description: `FontEnd Developrt - React`,
    author: `James Teerayuht`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Kanit",
          "Open Sans", // you can also specify font weights and styles
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Teerayuth`,
        short_name: `James`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/logo/fire-solid.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
