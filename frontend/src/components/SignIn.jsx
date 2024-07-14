import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignIn = () => {
  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default SignIn;