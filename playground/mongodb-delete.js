// first you have to install 'npm install mongodb --save'
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); // is the same to the up above
// The 'ObjectID' let us make new object id to use.

// Here we are going to access the document that is in de Todos RoboMongo Data Base.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB servers.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat MONGO'}).then((result) => {
    //     console.log(result);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat DataBase'}).then((result) => {
    //     console.log(result);ç
    // });

    // // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // Challenge
    // db.collection('Users').deleteMany({name: 'Danny Acosta'});
    db.collection('Users').findOneAndDelete({
         _id: new ObjectID('5ac7e0416a46868cf3089767')
        }).then((results) => {
            console.log(JSON.stringify(results, undefined, 2));
        });

    // client.close();
}); // URL where the DB lives. Ex Amazon Web URL or Heroku URL.