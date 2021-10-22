//Modules
const Nes = require('nes');

var client = new Nes.Client('ws://localhost:3000');

//Connecting to the server using sockets.
const start = async () => {
    await client.connect();
    const response = await client.request({
        path: "message", 
        method: "POST",
        payload: { message: "Hello Server!"} }
    );
};

start();