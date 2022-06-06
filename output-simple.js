'use strict'

/**
 * @param {string} text
 * @param {Map<string, string>} headMap
 * @param {number} code
 * @returns {import('./output').output}
 */
const outputSimple = function(text = '', headMap = new Map(), code = 200) {

    /**
     * @param {string} text
     * @returns {import('./output').output}
     */
    const body = function(text = '') {
        return outputSimple(text, headMap, code);
    }

    /**
     * @param {string} key
     * @param {string} value
     *@returns {import('./output').output}
     */
    const head = function(key = '', value = '') {
        headMap.set(key, value);
        return outputSimple(text, headMap, code);
    }

    /**
     * @param {number} code
     * @returns {import('./output').output}
     */
    const statusCode = function(code = 200) {
        return outputSimple(text, headMap, code);
    }

    /**
     * @param {http.ServerResponse} response 
     * @returns {void}
     */
    const write = function(response) {
    
        for (let [key, value] of headMap) {
            response.setHeader(key, value);
        }

        response.writeHead(code);
        response.end(text);
    }

    const exports = {
        body,
        head,
        statusCode,
        write
    }

    return exports;
}

module.exports = outputSimple;