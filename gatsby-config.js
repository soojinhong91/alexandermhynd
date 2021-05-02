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
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#26436a`,
        display: `minimal-ui`,
        icon: `static/assets/logo.png`,
      },
    },
  ],
}
