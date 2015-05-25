/**
 * @author Adam Meadows <adam.meadows@gmail.com>
 * @copyright 2015 Adam Meadows. All rights reserved.
 */

'use strict';

const send = require('./utils').send;
const user = require('./data/users-current.json');
const admin = require('./data/users-current-admin.json');

const proto = {

    init: function () {
        return this;
    },

    current: function () {
        return send(true, {
            status: 200,
            body: process.env.MOCK_ADMIN ? admin : user,
        });

    },
};

module.exports = function () {
    return Object.create(proto).init();
};
