# Lightspeed eCom isomorphic api client

Lightspeed eCom API implementation for Javascript.

## Usage

`npm install --save lightspeed-ecom`

## Example

```js
const apiClient = require('lightspeed-ecom')

const apiKey = ''
const apiSecret = ''
const language = ''
const cluster = 'api.webshopapp.com' // See http://developers.lightspeedhq.com/ecom/introduction/introduction/

const fetch = apiClient(apiKey, apiSecret, language, cluster)

async function getProducts() {
    const res = await fetch('products') // Can be any resource documented. In this case http://developers.lightspeedhq.com/ecom/endpoints/product/
    const json = await res.json()

    return json
}

async function logProducts() {
    const products = await getProducts()
    console.log(products)
}

logProducts()
```