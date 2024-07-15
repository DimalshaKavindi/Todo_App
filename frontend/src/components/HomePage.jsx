import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/task')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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
                        {tasks.map(task => (
                            <div key={task._id}>
                                <div>
                                    <input className="form-check-input" style={{ marginRight: '10px' }} type="checkbox" id={`checkbox${task._id}`} value={task.status} checked={task.status} />
                                    <label htmlFor={`checkbox${task._id}`} className="form-label">{task.title}</label>
                                </div>
                                <div>
                                    <FaRegClock />
                                    <label htmlFor={`checkbox${task._id}`} style={{ marginLeft: '10px' }} className="form-label">{new Date(task.dueDate).toLocaleDateString()}</label>
                                </div>
                                <div className='icons' style={{alignItems:'center'}}>
                                    <Link to='/info'><FaEdit style={{ color: 'red', marginRight:'15px' }} /></Link>
                                    <FaTrashAlt style={{ color: 'red' }} />
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
