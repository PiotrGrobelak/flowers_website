require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Flowers Website`,
    description: `The project with Gatsby and DatoCms`,
    author: `Piotr Grobelak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: {
          closeTimeoutMS: 500,
          style: {
            overlay: {
              position: `fixed`,
              padding: 200,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0, 0, 0, 0.35)`,
            },
            content: {
              margin: 100,
              // position: `absolute`,
              // border: `none`,
              // background: `none`,
              // padding: 200,
              // top: 0,
              // bottom: 0,
              // right: 0,
              // left: 0,
              overflow: `auto`,
              // WebkitOverflowScrolling: `touch`,
            },
          },
          // contentLabel: `Modal`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`]
          },
          {
            family: `Princess Sofia`,
            variants: [`400`]
          }
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
