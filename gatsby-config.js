module.exports = {
  siteMetadata: {
    title: `Alexander M. Hynd`,
    siteUrl: `https://www.alexandermhynd.com/`,
    description: `Alexander M. Hynd, British researcher of international politics, currently based in Sydney, Australia.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Frosted Blog`,
        short_name: `Gatsby Frosted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/logo.png`,
      },
    },
  ],
}
