/**
 * @author Adam Meadows <adam.meadows@gmail.com>
 * @copyright 2015 Adam Meadows. All rights reserved.
 */

'use strict';

const get = require('./utils').get;

const proto = {

    init: function (baseUrl) {
        this.endpointUrl = `${ baseUrl }users`;
        return this;
    },

    current: function () {
        return get(`${ this.endpointUrl }/current`);

    },
};


if (process.env.MOCK_APIS) {
    module.exports = require('./mocks/users');
} else {
    module.exports = function () {
        return Object.create(proto).init('/api/v1/');
    };
}
