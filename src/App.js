import './App.css';
import React from 'react';
import {Route, Routes } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import NavBar from './components/nav';

function App() {
  return (
        <div className = "app">
          <h2>Welcome to React Router Tutorial</h2>
          <NavBar/>
          <hr />
          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/about' element={<About/>}/>
          </Routes>
        </div>
  );
}

export default App;
