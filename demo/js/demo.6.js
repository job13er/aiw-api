/**
 * @author Adam Meadows <adam.meadows@gmail.com>
 * @copyright 2015 Adam Meadows. All rights reserved.
*/

'use strict';

// Need to set jQuery on window for Bootstrap
let $ = window.jQuery = require('jquery');

require('../style/demo.less');
require('bootstrap');

let main = require('aiw-api');

$(() => {
    main.render('body');
});
