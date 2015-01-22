/**
 * Created by lockc on 22/01/15.
 */
var net = require('net');

var clients = [];

var server = net.createServer(function (socket) {

    console.log('client connected - ' + socket.remoteAddress + ':' + socket.remotePort);

    socket.on('end', function() {
        console.log('client disconnected - ' + socket.remoteAddress + ':' + socket.remotePort);

        for(index in clients) {
            var client = clients[index];
            if(client.remotePort === socket.remotePort) {
                clients.splice(index);
            }
        }
    });

    socket.write('Welcome to the Chat server.\r\n');

    socket.on('data', function(data) {
        // send to others
        for(index in clients) {
            var client = clients[index];

            if(client.remotePort !== socket.remotePort) {
                client.write(data.toString());
            }


        }
    });

    clients.push(socket);
});

server.listen(1337, '10.4.34.141', function() { //'listening' listener
    console.log('server bound');
});


