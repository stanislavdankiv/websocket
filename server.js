const WebSocket = require('ws');
const server = new WebSocket.Server({port: 3000});

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.parse(message));
            }
        });
        // if (JSON.parse(message) === 'exit') {
        //     ws.close();
        // }
    });
    ws.send('Simple anonymous chat');
});