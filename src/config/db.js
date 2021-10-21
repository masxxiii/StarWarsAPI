//Modules
const mongoose = require("mongoose");

//Connecting the database
mongoose.connect("mongodb://localhost:27017/characterDB");

//Creating our schema
const charactersSchema = {
    name: String,
    height: String, 
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
};

//Creating a new collection based on schema
const charactersCollection = mongoose.model("Characters", charactersSchema, 'Characters');

module.exports = charactersCollection;