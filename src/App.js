import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppCoPilotLogin from './components/AppCoPilotLogin';
import AppCoPilotSignUp from './components/AppCoPilotSignUp';
import AppCoPilotDashboard from './components/AppCoPilotDashboard';
import './App.css';
import PropertyComparisonPage from './components/PropertyComparisonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AppCoPilotLogin />} />
        <Route path="/signup" element={<AppCoPilotSignUp />} />
        <Route path="/dashboard" element={<AppCoPilotDashboard />} />
        <Route path='/searchProperty' element={<PropertyComparisonPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;