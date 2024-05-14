import React, { useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  useEffect(() => {
    // Function to call the API
    const callApi = async () => {
      try {
        const response = await axios.post('http://localhost:3001/v1/user/dashboard', {}, { withCredentials: true });
        console.log(response.data);
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };

    // Call the API when the component mounts
    callApi();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
