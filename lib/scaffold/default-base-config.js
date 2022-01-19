'use strict';

var path = require('path');

/**
 * Will return the path and default onixcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to bitcoin database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }
  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 3001,
      services: ['onixd', 'web'],
      servicesConfig: {
        onixd: {
          spawn: {
            datadir: options.datadir || path.resolve(process.env.HOME, '.onix'),
            exec: path.resolve(__dirname, '../../bin/onixd')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
