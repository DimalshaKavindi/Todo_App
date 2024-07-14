import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;