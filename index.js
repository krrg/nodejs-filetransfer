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
    let Client = require('./client/Client');
    let client = new Client('index.js', 'localhost', 8000);
}

if (getMode() == 'server') {

}
