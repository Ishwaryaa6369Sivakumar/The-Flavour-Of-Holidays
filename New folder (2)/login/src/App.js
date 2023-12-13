import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
    </Routes>
    </div>
  );
}

export default App;
