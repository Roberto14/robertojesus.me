require(`dotenv`).config({
  path: `.env`,
})

const siteDescription = `Roberto Jesus personal website and blog. Find out nice stories about Javascript, NodeJS and tech stuff. Posting randomly about anything`

module.exports = {
  siteMetadata: {
    siteTitle: ``,
    siteTitleAlt: `Roberto's Corner`,
    siteHeadline: `Minimal Blog for software developers by @RobertoRJ`,
    siteDescription,
    siteUrl: `https://robertojesus.me/`,
    siteLanguage: `en`,
    author: `@RobertoRJ`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Home`,
            slug: `/`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `twitter`,
            url: `https://twitter.com/RobertoRJ`,
          },
          {
            name: `github`,
            url: `https://github.com/Roberto14`,
          },
          {
            name: `linkedin-in`,
            url: `https://www.linkedin.com/in/roberto-jesus-03a65642/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roberto's Corner`,
        short_name: `roberto's-corner`,
        description: siteDescription,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `static/facepalm.png`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
