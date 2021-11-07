/*
 * notion-enhancer core: api
 * (c) 2021 dragonwocky <thedragonring.bod@gmail.com> (https://dragonwocky.me/)
 * (https://notion-enhancer.github.io/) under the MIT license
 */

'use strict';
module.exports = {};

/**
 * environment-specific data persistence
 * @module notion-enhancer/api/storage
 */

const storage = require('../env/storage.cjs');

/**
 * get persisted data
 * @type {function}
 * @param {array<string>} path - the path of keys to the value being fetched
 * @param {*} [fallback] - a default value if the path is not matched
 * @returns {Promise} value ?? fallback
 */
module.exports.get = storage.get;

/**
 * persist data
 * @type {function}
 * @param {array<string>} path - the path of keys to the value being set
 * @param {*} value - the data to save
 * @returns {Promise} resolves when data has been saved
 */
module.exports.set = storage.set;

/**
 * create a wrapper for accessing a partition of the storage
 * @type {function}
 * @param {array<string>} namespace - the path of keys to prefix all storage requests with
 * @param {function} [get] - the storage get function to be wrapped
 * @param {function} [set] - the storage set function to be wrapped
 * @returns {object} an object with the wrapped get/set functions
 */
module.exports.db = storage.db;

/**
 * add an event listener for changes in storage
 * @type {function}
 * @param {onStorageChangeCallback} callback - called whenever a change in
 * storage is initiated from the current process
 */
module.exports.addChangeListener = storage.addChangeListener;

/**
 * remove a listener added with storage.addChangeListener
 * @type {function}
 * @param {onStorageChangeCallback} callback
 */
module.exports.removeChangeListener = storage.removeChangeListener;

/**
 * @callback onStorageChangeCallback
 * @param {object} event
 * @param {string} event.type - 'set' or 'reset'
 * @param {string} event.namespace- the name of the store, e.g. a mod id
 * @param {string} [event.key] - the key associated with the changed value
 * @param {string} [event.new] - the new value being persisted to the store
 * @param {string} [event.old] - the previous value associated with the key
 */
