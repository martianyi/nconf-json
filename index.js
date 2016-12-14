"use strict";
const minify = require('node-json-minify');

module.exports = {
    stringify: function (obj, replacer, spacing) {
        return JSON.stringify(obj, replacer || null, spacing || 2)
    },
    parse: function (text, reviver) {
        return JSON.parse(minify(text), reviver)
    }
};
