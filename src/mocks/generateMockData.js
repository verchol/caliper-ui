const jsf = require('json-schema-faker');
const mockDataSchema = require('./mockDataSchema');
const fs = require('fs');

const json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile('./src/mocks/db.json', json, (err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Mock data generated.');
    }
});
