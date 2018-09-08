const contentful = require('contentful')

export default ({ env }, inject) => {
  const config = {
    space: env.contentfulSpaceId,
    accessToken: env.contentfulAccessToken
  }

  const contentfulClient = contentful.createClient(config)

  inject('contentful', contentfulClient)
}
