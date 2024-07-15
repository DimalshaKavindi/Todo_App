import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { Email: email, Password: password });
            if (response.data === "Login successful") {
                navigate('/todo_home');
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error signing in', error);
        }
    };

    return (
        <div className='home-container'>
            <div className='img-content'>
                <img src='../images/5.png' alt='ToDo App' />
            </div>
            <div className='text-content'>
                <div className='login-content'>
                    <h2>Sign in</h2>
                    <form onSubmit={handleSignIn}>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="password-container">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="form-control"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                    <div className="line-container">
                        <div className="line"></div>
                        <div className="text">or</div>
                        <div className="line"></div>
                    </div>
                    <div className='google-content'>
                        <img src='../images/google.png' alt="Google" />
                        <p>Google</p>
                    </div>
                    <Link className='signup-text' to='/signup'>Don't have an account? <b>Sign up</b></Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
