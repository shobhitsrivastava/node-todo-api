//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
    console.log ('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('584ce14611ac480d1564d393')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('584cd3a452bfa72c504c87b5')
    }, {
        $inc: {
            age: 1
        }, $set: {
            name: 'Shobhit'
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
});