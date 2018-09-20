const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");

var id = "5b9ffdfe750b0fa03280b5f2";

if(!ObjectID.isValid(id)) {
    return console.log("Invalid Id");
}
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos :", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo :", todo);
// });

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo by id :", todo);
  })
  .catch(err => {
    console.log(err);
  });
