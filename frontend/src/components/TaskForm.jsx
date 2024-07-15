import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TaskForm.css';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('todo');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            dueDate,
            status: status === 'completed'
        };

        axios.post('/task/add', newTask)
            .then(() => {
                navigate('/todo_home');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='add-container'>
            <div className='add-form-content'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="date" className="form-control" id="dueDate" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <select className="form-control" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="todo">To Do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary create-task-btn">Create Task</button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
