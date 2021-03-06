module.exports = {
  siteMetadata: {
    title: 'Chioran Ionut Catalin | consultancy ',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    {
      resolve:'gatsby-source-filesystem',
      options:{
          path:`${__dirname}/src/pages`,
          name:"pages"
      }
    },
  ],
}
