'use strict'

/**
 * @param {string} text
 * @returns {import('./page').page}
 */
const simplePage = function(text = '') {
    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * @returns {import('./page').page}
     */
    const metadata = function(key = '', value = '') {
        return exports
    }

    /**
     * @param {import('./output').output} output
     * @returns {import('./output').output}
     */
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

    return exports;
}

module.exports = simplePage;