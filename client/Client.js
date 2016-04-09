'use strict'

const when = require('when');
const fs = require('fs');
const net = require('net');

class Client {

    constructor(filename, host, port) {
        this.filename = filename;
        this.host = host;
        this.port = port;

        this.prepareFileForReading();
        this.prepareSocketForWriting();
    }

    prepareFileForReading() {
        this.fileInputStream = fs.createReadStream(this.filename);
    }

    prepareSocketForWriting() {
        this.socket = net.createConnection({
            host: this.host,
            port: this.port
        }, () => {
            this.fileInputStream.pipe(this.socket); // pipe is wicked cool
        })
    }

}

module.exports = Client;
