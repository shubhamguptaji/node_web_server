const mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = { Todo };
