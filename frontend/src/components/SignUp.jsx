import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignIn.css';

const SignUp = () => {
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
                    <input type="text" style={{marginBottom:"20px"}} className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                    <input type="text" style={{marginBottom:"20px"}} className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
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
                    <button type="submit">Sign Up</button>
                    
                        
                        

                        <Link className='signup-text' to='/todo_home'>  Already have an account? <b>Sign In</b> </Link>
      


                </div>
            </div>
        </div>
    );
};

export default SignUp;