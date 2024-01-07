const express = require("express");
const { createTodo, updateTodo } = requrie("../types.js");

const app = express();
app.use(express.json());

// See all todo items
app.get("/todos", (req, res) => {});

// Create a new todo item
// {
//     title: String,
//     description: String
// }
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Input validation failed",
    });
    return;
  }
  // put in Mongo DB here
});

// Mark a todo item done
app.put("/completed", (req, res) => {
  const payload = req.body;
  const parsedPayload = updateTodo.safeParse(payload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Input validation failed",
    });
    return;
  }
  // Update item in Mongo DB here
});

app.listen(3000, () => console.log("Backend running on port 3000"));
