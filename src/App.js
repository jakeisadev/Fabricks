import React from 'react';
import {useState} from 'react';
import Modal from './modal.js'
import Navbar from './nav.js';
import Module from './module.js';
import './modal.css';

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div className='App'>
      <Navbar/>
      <Module/>
      <button onClick={() => setShow(true)}>Pay Now</button>
      <Modal onClose={() => setShow(false)}show = {show}/>
    </div>
  );
}