# nconf-json

JSON format plugin for [indexzero/nconf](https://github.com/indexzero/nconf), 
add JSON.minify support so you can add comments in json files.

## Install

`npm install nconf nconf-json --save`

## Usage

```
var nconf = require('nconf')

nconf.file({
  file: '/path/to/some/file.yaml',
  format: require('nconf-json')
})
```