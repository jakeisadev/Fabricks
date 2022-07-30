import React from 'react';
import Navbar from './nav.js';
import Payment from './payment.js';
import Home from './home.js';
import './modal.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="nav" element={<Navbar />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}