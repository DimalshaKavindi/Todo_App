import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='todo-home' >
            <div className='welcome-text'>
                <h1>Welcome to ToDo</h1>
            </div>
            <div className='todo-content'>
                <div className='todo-list'>
                    <div className='task-header'>
                        <h2>Task</h2>
                        <Link to="/add" className="add-task-link">
                            <button className="add-task-button">
                                <FaPlus style={{ marginRight: '5px' }} />
                                Add new task
                            </button>
                        </Link>
                    </div>

                    <div className='list-content'>
                        <div>
                            <input className="form-check-input" style={{ marginRight: '10px' }} type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Database create for company</label>
                        </div>
                        <div>
                            <FaRegClock />
                            <label htmlFor="exampleFormControlInput1" style={{ marginLeft: '10px' }} className="form-label">Tue 17 Oct 2024</label>
                        </div>
                        <div className='icons'>
                            <FaEdit style={{ color: 'red', margin: '10px' }} />
                            <FaTrashAlt style={{ color: 'red' }} />
                        </div>
                    </div>

                    <div className='list-content'>
                        <div>
                            <input className="form-check-input" style={{ marginRight: '10px' }} type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Database create for company</label>
                        </div>
                        <div>
                            <FaRegClock />
                            <label htmlFor="exampleFormControlInput1" style={{ marginLeft: '10px' }} className="form-label">Tue 17 Oct 2024</label>
                        </div>
                        <div className='icons'>
                            <FaEdit style={{ color: 'red', margin: '10px' }} />
                            <FaTrashAlt style={{ color: 'red' }} />
                        </div>
                    </div>

                    <div className='list-content'>
                        <div>
                            <input className="form-check-input" style={{ marginRight: '10px' }} type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Database create for company</label>
                        </div>
                        <div>
                            <FaRegClock />
                            <label htmlFor="exampleFormControlInput1" style={{ marginLeft: '10px' }} className="form-label">Tue 17 Oct 2024</label>
                        </div>
                        <div className='icons'>
                            <FaEdit style={{ color: 'red', margin: '10px' }} />
                            <FaTrashAlt style={{ color: 'red' }} />
                        </div>
                    </div>

                   
                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;