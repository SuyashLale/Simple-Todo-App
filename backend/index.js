const express = require("express");

const app = express();
app.use(express.json());

// See all todo items
app.get("/todos", (req, res) => {

});

// Create a new todo item
app.post("/todos", (req, res) => {

});

// Mark a todo item done
app.post("/todos/:id", (req, res) => {

});


app.listen(3000, () => console.log("Backend running on port 3000"));
