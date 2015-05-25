/**
 * @author Adam Meadows <adam.meadows@gmail.com>
 * @copyright 2015 Adam Meadows. All rights reserved.
 */

'use strict';

const _ = require('lodash');
const Q = require('q');

const MOCK_AJAX_LATENCY = 500; // ms

/**
 * Send the given response
 * @param {Boolean} ok - true if successful response
 * @param {Object} res - superagent-style response object
 * @param {Number} [res.status] - the HTTP status code of response
 * @param {Object} [res.body] - the JSON parsed response body
 * @param {String} [res.text] - the raw response text
 * @returns {Q.promise} a promise that will be resolved after MOCK_AJAX_LATENCY
 */
function send(ok, res) {
    const deferred = Q.defer();

    _.defaults(res, {
        ok,
        status: (ok) ? 200 : 500,
        text: (res.body) ? JSON.stringify(res.body) : '',
    });

    setTimeout(() => {
        if (ok) {
            deferred.resolve(res);
        } else {
            deferred.reject(res);
        }
    }, MOCK_AJAX_LATENCY);

    return deferred.promise;
}

module.exports = {
    send,
};
