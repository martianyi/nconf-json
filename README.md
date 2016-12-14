# nconf-json

JSON format plugin for [indexzero/nconf](https://github.com/indexzero/nconf)

## Install

`npm install nconf nconf-json`

## Usage

```
var nconf = require('nconf')

nconf.file({
  file: '/path/to/some/file.yaml',
  format: require('nconf-json')
})
```