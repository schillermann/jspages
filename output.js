'use strict'

/**
 * @callback body
 * @param {string} text
 * @returns {output}
 */

/**
 * @callback head
 * @param {string} key
 * @param {string} value
 * @returns {output}
 */

/**
 * @callback statusCode
 * @param {number} code
 * @returns {output}
 */

/**
 * @typedef {object} output
 * @property {body} body
 * @property {head} head
 * @property {statusCode} statusCode
 */

module.exports = { }