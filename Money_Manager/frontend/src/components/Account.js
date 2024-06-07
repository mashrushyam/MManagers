import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Account = () => {

    const linkStyle = {
        textDecoration: 'none', // Removes the underline
        color: 'inherit', // Keeps the default link color
    };

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '', // Add confirmation password

    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== user.cpassword) {
            alert("Passwords do not match!");
            setUser({
                username: '',
                email: '',
                password: '',
                cpassword: '',
            });
            return;
        }

        try {
            // Make a POST request to the signup endpoint
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You can add other headers if needed
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {

                const responseData = await response.json();
                console.log(responseData.message);
                alert("Registration Successful!!")

                setUser({
                    username: '',
                    email: '',
                    password: '',
                    cpassword: '',
                });
            } else {
                // If the response status is not OK, handle the error case
                const errorData = await response.json();
                console.error('Error during signup:', errorData.error);
                alert("Registration Unsuccessful!")

                setUser({
                    username: '',
                    email: '',
                    password: '',
                    cpassword: '',
                });
            }
        } catch (error) {
            // Handle network errors or other exceptions
        }
    };

    return (
        <div className='conatiner'>
            <div className='center'>
                <h1>Register</h1>
                <form action='' method='POST' onSubmit={handleSubmit}>
                    <div className='txt_field'>
                        <input type="text" name="username" required value={user.username} onChange={handleChange}/>
                        <label>Name</label>
                    </div>
                    <div className='txt_field'>
                        <input type="email" name="email" required value={user.email} onChange={handleChange}/>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className='txt_field'>
                        <input type="password" name="password" required value={user.password} onChange={handleChange}/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className='txt_field'>
                        <input type="password" name="cpassword" required value={user.cpassword} onChange={handleChange}/>
                        <span></span>
                        <label>Confirm Password</label>
                    </div>
                    <input name="submit" type="Submit" value="Sign Up"/>
                    <Link to = "/" style={linkStyle}>
                    <div className="signup_link">
                        Have an Account ? Login
                    </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Account
