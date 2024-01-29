const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'product' });  // Specify the collection name as 'production'

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
