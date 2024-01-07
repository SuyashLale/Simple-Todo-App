const express = require("express");
const { createTodo, updateTodo } = require("../types.js");
const { todo } = require("./db");

const app = express();
app.use(express.json());

// See all todo items
app.get("/todos", async (req, res) => {
  try {
    const todoArr = await todo.find({});
    res.status(200).json({
      Todos: todoArr,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Cannot get Todos from the DB",
    });
  }
});

// Create a new todo item
// {
//     title: String,
//     description: String
// }
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Input validation failed",
    });
    return;
  }
  // put in Mongo DB here
  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.status(200).json({
      msg: "Todo created",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Failed to create Todo in DB",
    });
  }
});

// Mark a todo item done
app.put("/completed", async (req, res) => {
  const payload = req.body;
  const parsedPayload = updateTodo.safeParse(payload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Input validation failed",
    });
    return;
  }
  // Update item in Mongo DB here
  try {
    await todo.updateOne(
      {
        _id: payload.id,
      },
      {
        completed: true,
      }
    );
    res.status(200).json({
      msg: "Todo marked complete",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Failed to update Todo in the DB",
    });
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
