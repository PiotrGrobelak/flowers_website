require('dotenv').config({
 path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
 siteMetadata: {
  title: `Flowers Website`,
  description: `The project with Gatsby and DatoCms`,
  author: `Piotr Grobelak`,
  siteUrl: `https://flowers-website.netlify.app/`,
 },
 plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-layout`,
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  'gatsby-plugin-root-import',
  'gatsby-plugin-eslint',
  {
   resolve: `gatsby-plugin-modal-routing`,
   options: {
    modalProps: {
     closeTimeoutMS: 500,
     style: {
      overlay: {
       position: `fixed`,
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       backgroundColor: `rgba(255, 255, 255, 0.65)`,
      },
      content: {
       position: `absolute`,
       border: `none`,
       background: `none`,
       padding: 0,
       top: 0,
       bottom: 0,
       right: 0,
       left: 0,
       overflow: `hidden`,
       WebkitOverflowScrolling: `touch`,
      },
     },
     contentLabel: `Modal`,
    },
   },
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
  {
   resolve: `gatsby-plugin-prefetch-google-fonts`,
   options: {
    fonts: [
     {
      family: `Montserrat`,
      variants: [`400`, `600`],
     },
     {
      family: `Princess Sofia`,
      variants: [`400`],
     },
     {
      family: `Courgette`,
      variants: [`400`],
     },
    ],
    display: 'swap',
   },
  },
  {
   resolve: `gatsby-plugin-manifest`,
   options: {
    name: `Flowers PWA Website`,
    short_name: `Flowers PWA Website`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#ffffff`,
    display: `standalone`,
    icon: `${(__dirname, 'src/assets/Icons/icon-512x512.png')}`,
   },
  },
  `gatsby-plugin-offline`,
 ],
};
