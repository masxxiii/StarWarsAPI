//Modules
const Hapi = require('hapi');

const init = async () => {

    //creating a server
    const server = Hapi.server({
        port: process.env.port || 3000,
        host: 'localhost'
    });

    //running the server
    await server.start();
    console.log('Server is running on %s', server.info.port);
};

//handling uncaught things
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();