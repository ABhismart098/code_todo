const Todo = require("../todoModel/todoModel");
const { v4: uuidv4 } = require("uuid");

exports.getAllTodos = async () => {
  try {
    return await Todo.find();
  } catch (error) {
    console.error("Error fetching all todos:", error.message);
    throw new Error("Could not fetch todos");
  }
};

exports.getTodoById = async (id) => {
  try {
    const todo = await Todo.findOne({ taskId: id });
    if (!todo) {
      throw new Error("Todo not found");
    }
    return todo;
  } catch (error) {
    console.error("Error fetching todo by ID:", error.message);
    throw new Error(error.message); // Propagate error message
  }
};

exports.createTodo = async (todoData) => {
  try {
    todoData.taskId = uuidv4();
    const todo = new Todo(todoData);
    return await todo.save();
  } catch (error) {
    console.error("Error creating todo:", error.message);
    throw new Error("Could not create todo");
  }
};

exports.updateTodo = async (id, todoData) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate({ taskId: id }, todoData, { new: true });
    if (!updatedTodo) {
      throw new Error("Todo not found");
    }
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error.message);
    throw new Error(error.message); // Propagate error message
  }
};

exports.deleteTodo = async (id) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ taskId: id });
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }
    return deletedTodo;
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    throw new Error(error.message); // Propagate error message
  }
};
