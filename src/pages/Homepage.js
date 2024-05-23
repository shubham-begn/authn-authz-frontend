import React from 'react';
import './homepage.css';
import { useNavigate } from "react-router-dom";

function HomePage() {
   const oauthHandler=async(e)=>{
    e.preventDefault();
    alert("Going to use G-Oauth");
    window.location.href = "http://localhost:3002/auth";
   }
   const navigate = useNavigate();
   return (
    <div className='complete-page'>
      <button onClick={() => navigate('/register')}>New User!!! Register</button>
      <button onClick={() => navigate('/login')}>Login With Password</button>
      <button onClick={oauthHandler}>Login With Google</button>
    </div>
  );
      };


export default HomePage;
