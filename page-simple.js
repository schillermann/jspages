'use strict'

/**
 * @param {string} text
 */
const simplePage = function(text) {
    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * @returns
     */
    const metadata = function(key = '', value = '') {
        return exports
    }

    const output = function(output) {
        return output
            .statusCode(200)
            .head('Content-Length', text.length)
            .head('Content-Type', 'text/plain')
            .body(text);
    }

    const exports = {
        metadata,
        output
    }

    return exports
}

module.exports = simplePage;