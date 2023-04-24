
# Modules

    Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.

Each Node.js  module can be seen as a self-contained function like the following one:
'''(function (exports, require, module, __filename, __dirname) {
    module.exports = exports = {};

    // Your module code ...

});'''

Use exports to:

    - Export named function. e.g. exports.area, exports.circumference.

Use module.exports to:

    - If you want to export an object, class, function at the root level (e.g. module.exports = Cat)

    - If you prefer to return a single object that exposes multiple assignments. e.g.module.exports ={area, circumference};

### Some of the most used core modules are:
    - fs: Allows you to manipulate (create/read/write) files and directories.
    - path: utilities to work with files and directories paths.
    - http: create HTTP servers and clients for web development.
    - url: utilities for parsing URLs and extracting elements from it.