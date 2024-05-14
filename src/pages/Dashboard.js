import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';


function Dashboard() {
  const [userData, setUserData] = useState(null);

  const logout=async(e)=>{
     await axios.post('http://localhost:3001/v1/user/logout', {}, { withCredentials: true });
    window.location.href = '/'; // Redirect to dashboard or handle as needed

  }
  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await axios.post('http://localhost:3001/v1/user/dashboard', {}, { withCredentials: true });
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };

    callApi();
  }, []); 

  return (
    <div className='dash-page'>
      <div className='content'>
        <h1>Dashboard</h1>
        {userData && <h2>Welcome {userData.username}</h2>}
      </div>

      <button onClick={logout}>Log Out</button>
      
    </div>
  );
}

export default Dashboard;
