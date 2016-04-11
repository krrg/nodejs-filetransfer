'use strict'

const argv = require('yargs').argv;

function getMode() {
    if (argv.c) {
        return 'client';
    } else if (argv.s) {
        return 'server';
    } else {
        return null;
    }
}

if (getMode() === 'client') {
    let Client = require('./Client');
    let client = new Client('data.dat', 'localhost', 9000);
}

if (getMode() === 'server') {
    let Server = require('./Server');
    let server = new Server(9000);
}

console.log(getMode());
