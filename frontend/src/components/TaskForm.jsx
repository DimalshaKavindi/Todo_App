import React from 'react';
import './TaskForm.css';

const TaskForm = () => {
    return (
        <div className='add-container'>
            <div className='add-form-content'>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="title" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="description" placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <input type="date" className="form-control" id="dueDate" placeholder="Due Date" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="status" placeholder="Status" />
                    </div>
                    <button type="submit" className="btn btn-primary create-task-btn">Create Task</button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
