// Example is based on async await.

// Require client
const SEOshopApiClient = require('seoshop-api')

const apiKey = ''
const apiSecret = ''
const language = 'nl'

// Create client
const SEOshop = SEOshopApiClient(apiKey, apiSecret, language)

// Does a get to https://api.webshopapp.com/nl/products.json
async function getProducts() {
  try {
    const response = await SEOshop('products')
    const json = await response.json()

    return json
  } catch (e) {
    console.log('Error requesting products', e)
    return {}
  }
}

const products = getProducts()
console.log(products)
