import React, { useState } from "react";
import "./ToDoPage.css";

const ToDoPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete UI Assignment 5", completed: false },
    { id: 2, text: "Complete Project 1 Implementation", completed: false },
    { id: 3, text: "Submit UI In-Class Work", completed: false },
    { id: 4, text: "Complete Computer Graphics Assignment 1", completed: false },
    { id: 5, text: "Submit Project Proposal", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const startEditing = (id, text) => {
    setEditingTask(id);
    setEditedText(text);
  };

  const cancelEditing = () => {
    setEditingTask(null);
    setEditedText("");
  };

  const saveEditing = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editedText } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    setEditedText("");
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Task Triumphs Zone</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <div className="action-buttons">
                  <button onClick={() => saveEditing(task.id)}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                <div className="action-buttons">
                  <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
                  <button onClick={() => removeTask(task.id)}>Remove</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoPage