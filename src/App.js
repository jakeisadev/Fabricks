import React from 'react';
import Modal from './modal.js'
import Navbar from './nav.js';
import Module from './module.js';
import Login from './login.js';
import Home from './home.js';
import './modal.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="Modal-purchase" element={<Modal />} />
          <Route path="nav" element={<Navbar />} />
          <Route path="module" element={<Module />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}