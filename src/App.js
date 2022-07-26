import React from 'react';
import {useState} from 'react';
import Modal from './modal.js'
import './modal.css';

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div className='App'>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)}show = {show}/>
    </div>
  );
}