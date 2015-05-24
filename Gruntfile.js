/**
 * @file Gruntfile.js
 * @author Adam Meadows <adam.meadows@gmail.com>
 * @copyright 2015 Adam Meadows. All rights reserved.
*/

'use strict';

var beaker = require('beaker');

module.exports = function (grunt) {

    // pour all the initial configs from beaker into grunt
    beaker.pour(grunt);

    // If you want to override part of the grunt config, you can do so by uncommenting/editing below
    // grunt.config.data.eslint.options.config = '.custom-eslintrc';

    // add lcov reporter for coveralls
    grunt.config.data.karma.coverage.coverageReporter.reporters.push({type: 'lcov'});

    // You can also add custom grunt tasks here if you want
    /*
    grunt.registerTask('say hi', 'says hi', function () {
        grunt.log.writeln('Hello!');
    });
    */
};
