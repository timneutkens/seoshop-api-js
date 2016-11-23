const fetch = require('isomorphic-fetch')

module.exports = function SEOshopApiClient (apiKey, apiSecret, language) {
  const apiUrl = `https://${apiKey}:${apiSecret}api.webshopapp.com/${language}`
  return (url, options) => {
    return fetch(`${apiUrl}/${url}.json`, options)
  }
}
