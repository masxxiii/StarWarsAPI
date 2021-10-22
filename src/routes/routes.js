//Modules
const joi = require('@hapi/joi');
const charactersCollection = require('../config/db');
const schema = require('../joi/schema')

module.exports = [

// A get route to get all our characters.
{
    method: 'GET',
    path: '/characters',
    config: {
        handler: async (request, h) => {
            try {
                let data = await charactersCollection.find();
                if(Object.keys(data).length === 0) {
                    return { Message: "The database is currently empty."};
                }
                else {
                    return data;
                }
            } catch (error) {
                return h.response(error).code(500);
            }
        },

        description: "This endpoint will fetch all the characters from our database",
        response: {
			schema: joi.array().items(schema),
            failAction: 'log'
		}
    }
} ,

// A get route to get all our characters based on their gender.
{
    method: 'GET',
    path: '/{gender}',
    config: {
        handler: async (request, h) => {
            try {
                const param = request.params.gender;
                if(param == "n_a") {
                    const filter = { gender: "n/a" };
                    let data = await charactersCollection.find(filter);
                    if(Object.keys(data).length === 0) {
                        return { Message: "The database is currently empty."};
                    }
                    else {
                        return data;
                    }
                }
                else if (param == "male" || param == "female" ) {
                    const filter = { gender: param };
                    let data = await charactersCollection.find(filter);
                    if(Object.keys(data).length === 0) {
                        return { Message: "The database is currently empty."};
                    }
                    else {
                        return data;
                    }
                }
                else {
                    return { Message: "Check your keywords."};
                }

            } catch (error) {
                return h.response(error).code(500);
            }
        },
        description: "This endpoint will fetch all male, female and genderless characters from our database",
        validate: {
            params: joi.object({
                gender: joi
                .string()
                .min(3)
                .max(6)
                .description('Genders of Star Wars characters')
                .required()
                .example('male')
            })
        },
        response: {
			schema: joi.array().items(schema),
            failAction: 'log'
		}
    }
}

];
