/**
 * Add your site configuration details
 * wordPressUrl is the WP site where you want to fetch data from
 * siteUrl is the live site where people visit your front end
 * mailChimpEndpoint see https://github.com/benjaminhoffman/gatsby-plugin-mailchimp#mailchimp-endpoint
 */
const config = {
  title: `Twilightscapes - Abandoned Urbex Urban Exploration Photos and Locations`,
  description: `Twilightscapes`,
  author: `Twilightscapes`,
  twitter: `toddlambert`,
  wordPressUrl: `https://launchlamp.com/twilightgatsby`,
  siteUrl: `https://twilightscapes.com`,
  dynamicComments: true,
  gaTrackingId: 'UA-140479230-1',
  mailChimpEndpoint: '',
  image: `src/images/urban-fetish-button.jpg`,
}

module.exports = config
