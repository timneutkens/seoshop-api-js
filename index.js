'use strict';
var Promise = Promise || require('bluebird');
const superagentPromise = require('superagent-promise')(require('superagent'), Promise);
const request = require('superagent-defaults')(superagentPromise);

const prefix = require('superagent-prefix');
const suffix = require('superagent-suffix');

class SEOshopApiClient {
    /**
     * Set apikey and apisecret
     * @param apiKey
     * @param apiSecret
     */
    constructor(apiKey, apiSecret) {
        this._apiKey = apiKey;
        this._apiSecret = apiSecret;
    }
    /**
     * Return basic authorized request object
     * @returns {Request|*}
     */
    authorizedRequest() {
        return request
            .auth(this._apiKey, this._apiSecret)
    }

    /**
     * Base request
     * @param language
     */
    baseRequest(language) {
        return this.authorizedRequest()
            .use(function prefixRequestUrl(req) {
                req.url = '/' + req.url;
                return req.url;
            })
            .use(prefix('https://api.webshopapp.com/' + language))
            .use(suffix('.json'))
    }
}

module.exports = SEOshopApiClient;
