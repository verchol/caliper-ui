'use strict';
const nodeStatic = require('node-static');

const PORT = 3000;
const DIST = './dist';


// Create a node-static server instance to serve the dist folder
const file = new nodeStatic.Server(DIST, {
    cache: false
});

/* eslint-disable no-console */
console.log(`Serving ${DIST} at http://localhost:${PORT}...`);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // Serve files!
        file.serve(request, response);
    }).resume();
}).listen(PORT);
