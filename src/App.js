import React from 'react';
import Payment from './components/Payment.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import Allroutes from './config/Allroutes.js';

// Anything above or below Allroutes will appear on any page. Any component.

function App() {
  return (
    <>
      <Allroutes/>
    </>
  )
}

export default App