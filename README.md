#SEOshop-api.js
SEOshop api implementation for javascript. Based on [Superagent](https://github.com/visionmedia/superagent) and [Promises (bluebird)](https://github.com/petkaantonov/bluebird)

Uses es2015 / es6 classes. You might need to use [Babel](https://babeljs.io/) if you're using an old version of node.js / in browsers

##Usage

`npm install --save seoshop-api`

```Javascript
// Require client
const SEOshopApiClient = require('seoshop-api');
// Create new client object
const client = new SEOshopApiClient(apiKey, apiSecret);
// Create new request function for dutch store 
const request = client.baseRequest('nl');

// Does a get to https://api.webshopapp.com/nl/products.json
request.get('products').then(function(res) {
    console.log(res.body.products)
});

// Some api endpoints return full urls in their response. For this purpose there is a authorizedRequest function
// This function will only do basic auth and doesn't prefix and suffix the request url
const authorizedRequest = client.authorizedRequest();
authorizedRequest.get('https://api.webshopapp.com/nl/products.json').then(function(res) {
    console.log(res.body.products
});
```

###License
MIT
[View here](LICENSE.md)