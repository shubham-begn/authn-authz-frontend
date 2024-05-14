import React, { useState } from 'react';
import axios from 'axios';
import './registerpage.css';


function Loginpage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/v1/user/login', formData, { withCredentials: true });
      console.log(response.data); // Assuming the response contains useful data
  
      // Wait for the cookie to be set before accessing it
      await new Promise(resolve => setTimeout(resolve, 100)); // Short delay (adjust as needed)
  
      // Get the JWT token from the cookie
      const jwtCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
      const token = jwtCookie ? jwtCookie.split('=')[1] : null;
  
      console.log(token); // JWT token from the cookie
      window.location.href = '/dashboard'; // Redirect to dashboard or handle as needed
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };
  

  return (
    <div className='complete-page'>
    <div className='register-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Loginpage;