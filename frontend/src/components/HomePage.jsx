import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="homepage">
      <h1>Tasks</h1>
      <Link to="/add-task" className="btn">Add New Task</Link>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className="task-item">
            <h2>{task.title}</h2>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <Link to={`/task/${task._id}`} className="btn">View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
