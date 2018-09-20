const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");

var id = "5b9ffdfe750b0fa03280b5f2";

Todo.remove({}).then(result => {
  console.log(result);
});

Todo.findOneAndRemove(id).then(todo => {
  console.log(todo);
});

Todo.findByIdAndRemove(id).then(todo => {
  console.log(todo);
});
