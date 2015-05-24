/**
 * Spec for {@link aiw-api} module
 * @copyright 2015 Adam Meadows. All rights reserved.
 */

'use strict';

/* eslint-disable max-nested-callbacks */

let $ = require('jquery');
let main = require('aiw-api');

describe('main', () => {
    let $container;

    beforeEach(() => {
        $container = $('<div/>');
        main.render($container[0]);
    });

    it('renders template', () => {
        expect($('.main p', $container)).toHaveText('This is my first webpack project!');
    });
});
