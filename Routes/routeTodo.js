// Example usage in a route or controller file

const express = require('express');
const router = express.Router();
const Todo = require('../todoModel/todoModel'); // Adjust the path accordingly

// Create a new todo
router.post('/add', async (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = new Todo({ task });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all todos
router.get('/show', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Other routes for updating, deleting, etc. can be added here

module.exports = router;
