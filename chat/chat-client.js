/**
 * Created by lockc on 22/01/15.
 */
var net = require('net');

function connectToServer() {

    var socket = new net.Socket();

    socket.connect(1337, '10.4.34.141', function() {
        console.log('Client connected');
    });

    socket.on('data', function(data) {
        console.log(data.toString('utf8'));
    })

    return socket;
}

var socket = connectToServer();

/*
 * Start reading from stdin and send to server
 */
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {

        if(chunk === 'exit\n') {
            socket.destroy();
            process.stdin.destroy();
        } else {
            socket.write(chunk);
        }
    }
});

