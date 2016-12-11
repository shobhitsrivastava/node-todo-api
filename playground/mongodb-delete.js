//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: "Walk the dog"
    // }).then((res) => {
    //     console.log(res);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((res) => {
    //     console.log(res);
    // });
    //db.close();
    //
    // db.collection('Users').deleteMany({
    //     name: 'Shobhit'
    // }).then((res) => {
    //     console.log(res);
    // });
    db.collection('Users').deleteOne({
        _id: new ObjectID('584cd3f7947abd1d24d062d3')
    }).then((res) => {
        console.log(res);
    });
});