//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
// ---------------our databse name is my_databse---------------------
var mongoDB = 'mongodb://localhost/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema
var peopleSchema = new mongoose.Schema({
  name:String,
  age:Number,
});

// Compile model from schema
// --------------our collection name will be peoples-----------------------
var peopleModel = mongoose.model('people', peopleSchema);

const people=new peopleModel({name:"ratnesh",age:23})

people.save();
