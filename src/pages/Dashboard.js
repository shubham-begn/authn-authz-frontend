import React, { useEffect } from 'react';
import axios from 'axios';



function Dashboard() {

  useEffect(() => {
    const response = axios.post('http://localhost:3001/v1/user/dashboard',{withCredentials: true});
    console.log(response);
  }, []);   

   return (
    <div >
 <h1>Dashboard</h1>
    </div>
  );
      };


export default Dashboard;
