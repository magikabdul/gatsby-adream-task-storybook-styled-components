module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    }
  ],
}
