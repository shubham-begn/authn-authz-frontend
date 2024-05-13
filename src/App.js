import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './protected.route'; // Assuming the file is in the same directory

import HomePage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Dashboard from './pages/Dashboard';

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute >
               <Dashboard />
                        </ProtectedRoute>
            }
          />

        <Route path="*" element={<div>Whoopsie!! Nothing To Show</div>} />
      </Routes>
    </div>
  );
}
