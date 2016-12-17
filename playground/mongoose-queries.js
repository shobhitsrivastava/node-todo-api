const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '685466e66d34c20819b9086211';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("No todo found.");
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById('584f410af21d9b4c119b9295').then((user) => {
    if (!user) {
        return console.log("No user found.");
    }
    console.log("User:", user);
}).catch((e) => console.log(e));