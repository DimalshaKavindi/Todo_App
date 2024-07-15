import React from 'react';
import './TaskInfo.css';

const TaskInfo = () => {
    return (
        <div className='info-container'>
            <div className='info-header'><h2>Task Info</h2></div>
            <div className='info-form-content'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="title" value="Database create for company" readOnly />
                            <span className="input-group-text"><i className="fa fa-pencil-alt"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="description" value="Website templates" readOnly />
                            <span className="input-group-text"><i className="fa fa-pencil-alt"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="dueDate" value="16 Sep" readOnly />
                            <span className="input-group-text"><i className="fa fa-calendar-alt"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="status" value="Completed" readOnly />
                            <span className="input-group-text"><i className="fa fa-check"></i></span>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger delete-task-btn">Delete Task</button>
                </form>
            </div>
        </div>
    );
}

export default TaskInfo;
