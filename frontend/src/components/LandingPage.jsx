import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='home-container'>
      <div className='img-content'>
        <img src='../images/5.png' alt='ToDo App' />
      </div>
      <div className='text-content'>
        <div className='content'>
        <h3>ToDo</h3>
        <p>
          Stay Organized, Get Things Done: Your Ultimate To-Do List App. </p>
          <p>A todo list app is a digital task management tool designed to help users organize and prioritize their daily activities and responsibilities.</p>
        <button type="submit">Get Started</button>
        <Link className='signup-text' to='/login'>Already have an account? <b>Sign In</b> </Link>
      
        </div>
        </div>
    </div>
  );
};

export default LandingPage;