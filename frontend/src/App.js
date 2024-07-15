import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import TaskForm from './components/TaskForm';
import TaskInfo from './components/TaskInfo';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/todo_home" 
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            } 
          />
          <Route 
            path="/add" 
            element={
              <AuthRoute>
                <TaskForm />
              </AuthRoute>
            } 
          />
          <Route 
            path="/info/:id" 
            element={
              <AuthRoute>
                <TaskInfo />
              </AuthRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
