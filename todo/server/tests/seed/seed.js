const { ObjectID } = require("mongodb");
const { Todo } = require("./../../models/todo");

const todos = [
  {
    _id: new ObjectID(),
    text: "first test todo"
  },
  {
    _id: new ObjectID(),
    text: "Second test todo",
    completedAt: 333,
    completed: true
  }
];

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => {
      done();
    });
};

module.exports = { todos, populateTodos };
