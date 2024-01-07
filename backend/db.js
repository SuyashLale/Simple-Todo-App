const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:0dRKEPho2zpLeyzl@cluster0.qw1buq3.mongodb.net/simple-todo-app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
