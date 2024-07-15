import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Password: password
            });
            if (response.data === "User registered successfully") {
                navigate('/todo_home'); 
            } else {
                alert(response.data);
            }
        } catch (error) {
            console.error('Error signing up', error);
        }
    };

    return (
        <div className='home-container'>
            <div className='img-content'>
                <img src='../images/5.png' alt='ToDo App' />
            </div>
            <div className='text-content'>
                <div className='login-content'>
                    <h2>Sign up</h2>
                    <form onSubmit={handleSignUp}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
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
                        <button type="submit">Sign Up</button>
                    </form>
                    <Link className='signup-text' to='/login'>Already have an account? <b>Sign In</b></Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
