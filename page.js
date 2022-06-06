'use strict'

/**
 * @callback metadata
 * @param {string} key
 * @param {string} value
 * @returns {page}
 */

/**
 * @callback output
 * @param {import('./output').output}
 * @returns {import('./output').output}
 */

/**
 * @typedef {object} page
 * @property {metadata} metadata
 * @property {import('./output').output} output
 * @returns {page}
 */

 module.exports = {}