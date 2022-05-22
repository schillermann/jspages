'use strict'

/**
 * 
 * @param {string} body 
 * @param {Map} headMap
 * @param {number} statusCode 
 * @returns 
 */
const outputSimple = function(body = '', headMap = new Map(), statusCode = 200) {
    const metadata = function(key, value) {

        switch (key) {
            case 'JsPages-Body':
                body = value;
              break;
            case 'JsPages-StatusCode':
                statusCode = value;
              break;
            default:
                headMap.set(key, value);
          }

        return outputSimple(body, headMap, statusCode);
    }

    /**
     * 
     * @param {http.ServerResponse} response 
     */
    const write = function(response) {
    
        for (let [key, value] of headMap) {
            response.setHeader(key, value);
        }

        response.writeHead(statusCode);
        response.end(body);
    }

    return {
        metadata,
        write
    }
}

module.exports = outputSimple;