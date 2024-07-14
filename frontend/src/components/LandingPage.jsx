// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import notebookImage from '../assets/5.png';

const LandingPage = () => {
    return (
    <div className="todo-container">
        <div className="image-section">
        <img src={notebookImage} alt="New Year's Resolutions" className="notebook-image"/>
        </div>
        <div className="content-section">
        <h1>ToDo</h1>
        <p>
            Stay Organized, Get Things Done: Your Ultimate To-Do List App.
            A todo list app is a digital task management tool designed to help users organize and prioritize their daily activities and responsibilities.
        </p>
        <button className="get-started">Get Started</button>
        <p className="signin">Already have an account? <a href="#signin">Sign In</a></p>
        </div>
    </div>
    );
};

export default LandingPage;
