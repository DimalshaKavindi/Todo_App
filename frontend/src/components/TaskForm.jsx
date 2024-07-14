import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TaskForm.css';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await axios.get(`/api/tasks/${id}`);
          const task = response.data.task;
          setTitle(task.title);
          setDescription(task.description);
          setDueDate(new Date(task.dueDate).toISOString().split('T')[0]);
          setStatus(task.status);
        } catch (error) {
          console.log(error);
        }
      };

      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      dueDate,
      status,
    };

    try {
      if (id) {
        await axios.put(`/api/tasks/update/${id}`, taskData);
      } else {
        await axios.post('/api/tasks/add', taskData);
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task-form">
      <h1>{id ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <label>
          <input type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} />
          Completed
        </label>
        <button type="submit" className="btn">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
