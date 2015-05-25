/**
 * @author Adam Meadows <adam.meadows@gmail.com>
 * @copyright 2015 Adam Meadows. All rights reserved.
 */

'use strict';

const Q = require('q');
const request = require('superagent');

/**
 * Build a handler suitable to be passed to superagent's .end() method
 * The given deferred will be resolved or rejected based on the response from superagent
 * @param {Q.deferred} deferred - a deferred created with Q.defer()
 * @returns {Function} a handler suitable to give to superagent.end()
 */
function buildHandler(deferred) {
    return (err, res) => {
        if (err) {
            deferred.reject(err);
        } else if (res.ok) {
            deferred.resolve(res);
        } else {
            deferred.reject(res);
        }
    };
}

/**
 * Perform an HTTP GET on the given url
 * @param {String} url - the URL to get
 * @returns {Q.Promise} a Q promise that will be resolved with response of GET
 */
function get(url) {
    const deferred = Q.defer();

    request
        .get(url)
        .end(buildHandler(deferred));

    return deferred.promise;
}

module.exports = {
    buildHandler,
    get,
};
