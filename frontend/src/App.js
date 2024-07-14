import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TaskDetailPage from './components/TaskDetailPage';
import TaskForm from './components/TaskForm';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/task/:id" element={<TaskDetailPage />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
