// first you have to install 'npm install mongodb --save'
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // is the same to the up above
// The 'ObjectID' let us make new object id to use.

// Here we are going to access the document that is in de Todos RoboMongo Data Base.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB servers.');
    }
    console.log('Connected to MongoDB server.');
    const db =  client.db('TodoApp');

    // Fetching data out of the DB
    // Find is the method that query the Data Base.
    // Querying the data on the Data Base. (show the data)
    // db.collection('Todos').find().toArray().then((docs) => { // this show all the data in the DB

    // db.collection('Todos').find().count().then((count) => { // searching only some rows in 'Todos'  
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch.', err);
    // });

    // Searching only documents with the name: Danny Acosta
    db.collection('Users').find({ // Searching documents in 'Users'
        name: 'Danny Acosta'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // client.close();
}); // URL where the DB lives. Ex Amazon Web URL or Heroku URL.

// Inside of .find() {
// _id: new ObjectID('5ac7deaca45d878cc3b393d3')
//         } // searching by _id. }