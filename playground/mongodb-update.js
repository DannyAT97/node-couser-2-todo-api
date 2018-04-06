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

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ac7fab84183ff34e5fe63c9')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false // because you dont want to see the older one
    // }).then((result) => {
    //     console.log(result);
    // });

    // Challenge
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ac8059f4183ff34e5fe68d4')
    }, {
        $set: {
            name: 'Danny Acosta'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false // because you dont want to see the older one
    }).then((result) => {
        console.log(result);
    });

    // client.close();
}); // URL where the DB lives. Ex Amazon Web URL or Heroku URL.