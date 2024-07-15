import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='home-container'>
            <div className='img-content'>
                <img src='../images/5.png' alt='ToDo App' />
            </div>
            <div className='text-content'>
                <div className='login-content'>
                    <h2>Sign in</h2>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <div className="password-container">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="********"
                        />
                        <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit">Sign In</button>
                    <div class="line-container">
                            <div class="line"></div>
                            <div class="text">or</div>
                            <div class="line"></div>
                        </div>

                        <div className='google-content'>
                            <img src='../images/google.png'></img>
                            <p>Google</p>
                        </div>

                        <Link className='signup-text' to='/signup'> Don't have an account? <b>Sign up</b> </Link>
      


                </div>
            </div>
        </div>
    );
};

export default SignIn;