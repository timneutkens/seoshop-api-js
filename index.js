const fetch = require('isomorphic-fetch')

module.exports = (apiKey, apiSecret, language, cluster = 'api.webshopapp.com') => {
  const apiUrl = `https://${apiKey}:${apiSecret}@${cluster}/${language}`

  return (url, options) => {
    return fetch(`${apiUrl}/${url}.json`, options)
  }
}
