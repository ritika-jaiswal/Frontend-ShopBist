import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/Sign-UpPage';


function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<Home fName = {userName}/>}/> */}
      <Route path="/" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      
    
    </Routes>
    </Router>
  );
}

export default App;
