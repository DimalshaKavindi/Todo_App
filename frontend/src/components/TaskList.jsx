// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleToggleComplete = (id) => {
    const task = tasks.find(task => task._id === id);
    axios.put(`/api/tasks/${id}`, { ...task, completed: !task.completed })
      .then(response => setTasks(tasks.map(task => task._id === id ? response.data : task)))
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/tasks/new">Add New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span>{task.title} - {new Date(task.dueDate).toLocaleDateString()}</span>
            <button onClick={() => handleToggleComplete(task._id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <Link to={`/tasks/${task._id}`}>Edit</Link>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
