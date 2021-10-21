//Modules
const Hapi = require('hapi');
var routes = require('../src/routes/routes');

const startServer = async () => {

    //creating a server
    const server = Hapi.server({
        port: process.env.port || 3000,
        host: 'localhost'
    });

    //running the server
    await server.start();
    console.log('Server is running on %s.', server.info.port);

    server.route(routes);
};

//handling uncaught things
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

startServer();