// Require client
const SEOshopApiClient = require('seoshop-api')
// Create new client object
const client = new SEOshopApiClient(apiKey, apiSecret)
// Create new request function for dutch store
const request = client.baseRequest('nl')

// Does a get to https://api.webshopapp.com/nl/products.json
request
  .get('products')
  .then(function (res) {
    console.log(res.body.products)
  })
  .catch(function (err) {
    console.log(err)
  })

// Some api endpoints return full urls in their response. For this purpose there is a authorizedRequest function
// This function will only do basic auth and doesn't prefix and suffix the request url
const authorizedRequest = client.authorizedRequest()
authorizedRequest
  .get('https://api.webshopapp.com/nl/products.json')
  .then(function (res) {
    console.log(res.body.products)
  })
  .catch(function (err) {
    console.log(err)
  })

// The examples shown above use Promise style callbacks. You can also use a normal callback
request
  .get('products')
  .end(function (err, res) {
    if (!err) {
      console.log(res.body.products)
    }
  })
