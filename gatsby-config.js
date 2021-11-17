module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/assets/images/`,
      },
    }
  ],
}
