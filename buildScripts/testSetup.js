//this file isnt transpiled. so must use use commonJS and ES5

// Register Babel to tranpile our code before our tests run
require('babel-register');

// Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
