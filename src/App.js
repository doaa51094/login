import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import "./styles.scss";

const App = () => {
  return (
    <div className='main-page'>
       <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
    </div>
   
  );
};

export default App;
