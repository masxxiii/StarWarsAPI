//Modules
const joi = require('@hapi/joi');

//If the response send doesn't match this schema joi will log an error
module.exports = character = joi.object({
    _id: joi
    .number()
    .required()
	.integer()
	.description('id of the character')
	.example(1),
	name: joi
	.string()
	.required()
	.description('name of the character')
	.example('Luke'),
    height: joi
    .string()
    .required()
    .description('height of the character')
    .example('172'),
    mass: joi 
    .string()
    .required()
    .description('weight of the character')
    .example('77'),
    hair_color: joi
    .string()
    .required()
    .description('hair color of the character')
    .example('blond'),
    skin_color: joi 
    .string()
    .required()
    .description('skin color of the character')
    .example('fair'),
    eye_color: joi 
    .string()
    .required()
    .description('eye color of the character')
    .example('blue'),
    birth_year: joi
	.string()
	.required()
	.description('birth year of the character')
    .example('19BBY'),
	gender: joi
	.string()
	.required()
	.valid('male','female','n/a')
	.description('gender of the character')
	.example('male')
});