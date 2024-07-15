import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskInfo.css';

const TaskInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        status: ''
    });

    useEffect(() => {
        fetchTaskDetails();
    }, [id]);

    const fetchTaskDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/tasks/get/${id}`);
            setTask(response.data.task);
        } catch (error) {
            console.error('Error fetching task details', error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [id]: value
        }));
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`http://localhost:8080/api/tasks/update/${id}`, task);
            setIsEditing(false);
            navigate('/todo_home'); 
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/tasks/delete/${id}`);
            navigate('/todo_home'); 
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <div className='info-container'>
            <div className='info-form-content'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={task.title}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                            />
                            <span className="input-group-text" onClick={handleEditClick}><i className="fa fa-pencil-alt"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={task.description}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                            />
                            <span className="input-group-text" onClick={handleEditClick}><i className="fa fa-pencil-alt"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <div className="input-group">
                            <input
                                type="date"
                                className="form-control"
                                id="dueDate"
                                value={task.dueDate.split('T')[0]}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                            />
                            <span className="input-group-text" onClick={handleEditClick}><i className="fa fa-calendar-alt"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <div className="input-group">
                            <select
                                className="form-control"
                                id="status"
                                value={task.status}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                            >
                                <option value="false">To Do</option>
                                <option value="true">Completed</option>
                            </select>
                            <span className="input-group-text" onClick={handleEditClick}><i className="fa fa-check"></i></span>
                        </div>
                    </div>
                    <div className='row' style={{ alignItems: 'center' }}>
                        {isEditing ? (
                            <button type="button" className="btn btn-success update-task-btn" style={{ marginRight: '20px' }} onClick={handleSaveClick}>Save Task</button>
                        ) : (
                            <button type="button" className="btn btn-danger update-task-btn" style={{ marginRight: '20px' }} onClick={handleEditClick}>Edit Task</button>
                        )}
                        <button type="button" className="btn btn-danger delete-task-btn" onClick={handleDeleteClick}>Delete Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskInfo;
