//Modules
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package.json');
var routes = require('../src/routes/routes');

const startServer = async () => {

    //creating a server
    const server = Hapi.server({
        port: process.env.port || 3000,
        host: 'localhost'
    });

    //adding swagger
    const swaggerOptions = {
        info: {
                title: 'Star Wars API Documentation',
                version: Pack.version
            },
    };
    
    await server.register([Inert,Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    //running the server
    await server.start();
    console.log('Server is running on %s.', server.info.port);

    //our routes
    server.route(routes);
};

//handling uncaught things
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

startServer();