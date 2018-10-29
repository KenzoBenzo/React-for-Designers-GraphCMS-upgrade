module.exports = {
  siteMetadata: {
    title: 'React for Designers | GraphCMS Upgrade',
    description: 'In order to make use of GraphCMS technology, we need to go through converting your landingpage with your own content through the platform.',
    keywords: 'graphql, graphql course, react course, react for designers, graphCMS, content management, headless CMS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '22a88q3xdqw5',
        accessToken: 'e3281bb3e6f92909b1be9877aeffea7d0efbf32bcf9bfd43e1112673bb434fd8'
      }
    }
  ],
}
