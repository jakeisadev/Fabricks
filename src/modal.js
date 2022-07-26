import React from 'react';

const Modal = props => {
    if(!props.show) {
      return null;
    }
    return (
      <div className='modal' onClick={props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation}>
          <div className='modal-header'>
            <h4 className='modal-title'>Sign in</h4>
          </div>
          <div className='modal-body'>Insert things here.</div>
          <div className='modal-footer'>
            <button onClick={props.onClose} className='button'>Close</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;