import React from 'react';
import './TaskForm.css';

const TaskForm = () => {
    return (
        <div className='add-container'>
            <div className='header-content'><h2>New Task</h2></div>
            <div className='add-form-content'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" rows="3" placeholder="Enter description"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <input type="date" className="form-control" id="dueDate" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-select" id="status">
                            <option value="todo">To Do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button type="submit" style={{backgroundColor:'green'}} className="btn btn-primary">Create Task</button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;