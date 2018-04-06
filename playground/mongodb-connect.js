// first you have to install 'npm install mongodb --save'
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // is the same to the up above
// The 'ObjectID' let us make new object id to use.

// // This let you create object id (_id)
// var obj = new ObjectID();
// console.log(obj);

// // Declaring an object
// var user = {name: 'Danny', age: 20};

// // Creating name variable, = to whatever object we want to structure
// var {name} = user;

// // printing the name to the screen
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB servers.');
    }
    console.log('Connected to MongoDB server.');
    const db =  client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Some text.',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo.', err);
    //     }
    // console.log(JSON.stringify(result.ops, undefined, 2)); // Store all of the docs that were inserted
    // });
    // db.collection('Users').insertOne({
    //     // _id: 1297, // specifying an id for the insert data, its not necessary.
    //     name: 'Danny Acosta',
    //     age: 20,
    //     location: 'Puerto Rico'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert User.', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());// Give the time when the data were inserted, ex: 2018-04-06T21:15:12.000Z
    // });
    client.close();
}); // URL where the DB lives. Ex Amazon Web URL or Heroku URL.