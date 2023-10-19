require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "gianlucabelvisi.com",
    description: `Homepage of Gianluca Belvisi.`,
    author: `@gbelvs`,
    version: '2.1.0',
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gianluca Belvisi's Blog`,
        short_name: `Gianluca Belvisi`,
        start_url: `/`,
        background_color: `#131313`,
        theme_color: `#131313`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.jpg`, // This path is relative to the root of the site.
        cache_busting_mode: 'query',
        legacy: true,
        orientation: `portrait`,
        screenshots: [
          {
            src: "src/assets/images/icon.jpg",
            sizes: "563x563",
            type: "image/jpg"
          }
          // ... more screenshots
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `gianlucabelvisi`
      }
    },
    {
      resolve: 'gatsby-plugin-firebase-v9.0',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_API_KEY,
          authDomain: process.env.GATSBY_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_DATABASE_URL,
          projectId: process.env.GATSBY_PROJECT_ID,
          storageBucket: process.env.GATSBY_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_APP_ID,
          measurementId: process.env.GATSBY_MEASUREMENT_ID
        },
      },
    },
  ],
};
