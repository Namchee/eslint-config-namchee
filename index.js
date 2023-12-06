const js = require('./configs/js');
const ts = require('./configs/ts');
const yaml = require('./configs/yaml');
const json = require('./configs/json');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [js, ts, yaml, json];
