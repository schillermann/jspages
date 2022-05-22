'use strict'

const simplePage = function(text) {
    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * @returns
     */
    const metadata = function(key = '', value = '') {
        return this
    }

    const output = function(output) {
        
        return output
            .metadata('Content-Length', text.length)
            .metadata('JsPages-StatusCode', 200)
            .metadata('JsPages-Body', text);
    }

    return {
        metadata,
        output
    }
}

module.exports = simplePage;