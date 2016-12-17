const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

//Todo.findOneAndRemove({});

Todo.findByIdAndRemove('5855911e11ac480d1564d394').then((doc) => {
    console.log(doc);
});