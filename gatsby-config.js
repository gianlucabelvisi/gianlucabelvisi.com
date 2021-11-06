module.exports = {
  siteMetadata: {
    title: "gianlucabelvisi.com",
    description: `Homepage of Gianluca Belvisi.`,
    author: `@gbelvs`,
    version: '1.0.0',
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
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gianluca-belvisi`,
        short_name: `gbelvisi`,
        start_url: `/`,
        background_color: `#135291`,
        theme_color: `#135291`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.jpg`, // This path is relative to the root of the site.
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
  ],
};
