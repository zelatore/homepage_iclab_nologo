const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

module.exports = {
  pathPrefix: "/homepage_iclab_nologo",
  siteMetadata: {
    title: 'Interactive Computing Lab',
    description: `ICLAB Homepage`,
    copyrights: '',
    author: '@zelatore',
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'ICLAB',
    defaultTheme: 'dark',
    postsPerPage: 5,
    showMenuItems: 3,
    menuMoreText: 'Members',
    mainMenu: [     
      {
        title: 'Research',
        path: '/research',
      },
      {
        title: 'Lectures',
        path: '/lectures',
      },
      {
        title: 'Publication',
        path: '/publication',
      },
      {
        title: 'Professor',
        path: '/professor',
      },
      {
        title: 'Students',
        path: '/student',
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `index page`,
        path: `${__dirname}/src/pageIndex`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `document pages`,
        path: `${__dirname}/src/pagesDoc`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog pages`,
        path: `${__dirname}/src/pagesBlog`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Interactive computing Lab',
        short_name: 'ICLAB',
        start_url: '/',
        background_color: '#292a2d',
        theme_color: '#292a2d',
        display: 'minimal-ui',
        icon: 'src/images/hello-icon.png',
      },
    },
  ],
}