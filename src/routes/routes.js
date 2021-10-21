//Modules
const joi = require('joi'); 
const charactersCollection = require('../config/db');

// A simple get route to get all our characters from the database
const routes = ({
    method: 'GET',
    path: '/characters',
    config: {
        handler: async (request, h) => {

            let data = await charactersCollection.find();
            if(Object.keys(data).length === 0) {
                return { Message: "The database is currently empty."};
            }
            else {
                return data;
            }
        },

        description: "This endpoint will fetch all the characters from our database"
    }
})

module.exports = routes;
