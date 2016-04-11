'use strict'

const when = require('when');
const fs = require('fs');
const net = require('net');

class Server {

    constructor(port) {
        this.server = net.createServer((c) => {
            c.pipe(fs.createWriteStream('data_in.dat'))
        })

        this.server.listen(port);
    }

}

module.exports = Server
