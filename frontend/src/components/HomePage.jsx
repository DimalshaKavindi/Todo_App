import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`http://localhost:8080/api/tasks/delete/${taskId}`);
            fetchTasks(); // Refresh tasks after deletion
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    const handleStatusChange = async (taskId, currentStatus) => {
        try {
            await axios.put(`http://localhost:8080/api/tasks/status/${taskId}`, { status: !currentStatus });
            fetchTasks(); // Refresh tasks after updating status
        } catch (error) {
            console.error('Error updating task status', error);
        }
    };

    return (
        <div className='todo-home'>
            <div className='welcome-text'>
                <h3>Welcome to ToDo</h3>
            </div>
            <div className='todo-content'>
                <div className='todo-list'>
                    <div className='task-header'>
                        <h1>Tasks</h1>
                        <Link to="/add" className="add-task-link">
                            <button className="add-task-button">
                                <FaPlus style={{ marginRight: '5px' }} />
                                Add new task
                            </button>
                        </Link>
                    </div>

                    <div className='list-content'>
                        {tasks.map((task) => (
                            <div key={task._id} className='task-item'>
                                <div className='task-details'>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`checkbox-${task._id}`}
                                        value={task.status}
                                        checked={task.status}
                                        onChange={() => handleStatusChange(task._id, task.status)}
                                    />
                                    <label htmlFor={`checkbox-${task._id}`} className="form-label">{task.title}</label>
                                </div>
                                <div className='task-date'>
                                    <FaRegClock />
                                    <label htmlFor={`checkbox-${task._id}`} className="form-label">
                                        {new Date(task.dueDate).toLocaleDateString()}
                                    </label>
                                </div>
                                <div className='icons'>
                                    <Link to={`/info/${task._id}`}><FaEdit style={{ color: 'red' }} /></Link>
                                    <FaTrashAlt style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(task._id)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
