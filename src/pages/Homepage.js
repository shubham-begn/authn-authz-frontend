import React from 'react';
import './homepage.css';
import { useNavigate } from "react-router-dom";


function HomePage() {
   const navigate = useNavigate();
   return (
    <div className='complete-page'>
      <button onClick={() => navigate('/register')}>New User!!! Register</button>
      <button onClick={() => navigate('/login')}>Login With Password</button>
      <button onClick={() => navigate('/google-oauth')}>Login With Google</button>
    </div>
  );
      };


export default HomePage;
