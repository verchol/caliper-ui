const fs = require('fs-extra');
const path = require('path');


let version = `../src/app-config.${process.env.NODE_ENV}.js`;

/* eslint-disable no-console */
console.log('Using application configuration: ' + version);

fs.copySync(path.resolve(__dirname, version), 'src/app-config.js');
