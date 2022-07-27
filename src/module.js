import React, { useState } from 'react';
import validator from 'validator'

const Module = () => {

  const [errorMessage, setErrorMessage] = useState('')
  
  const isCreditCard = (str) => {
    
    if (validator.isCreditCard(str)) {
      setErrorMessage('Valid Credit Card Number')
    } else {
      setErrorMessage('Please enter valid Credit Card Number.')
    }
  }
  return (
    <div className="wrapper">
        <h2>Enter Information Below</h2>
        <div id="pay-form">
            <form action="." method='post' className='hfrom'>
                <fieldset>
                    <legend>Enter Information:</legend>
                    <p><label>First Name: </label>
                    <input type="text" name='name' id='name' placeholder='name' required></input></p>
                    <p><label>Last Name: </label>
                    <input type="text" name='name' id='name' placeholder='name' required></input></p>
                    <p><label>Billing: </label>
                    <input type="text" name='name' id='name' placeholder='name' required></input></p>
                    <p><label>State: </label>
                    <input type="text" name='name' id='name' placeholder='name' required></input></p>
                    <p><label>Zip-Code: </label>
                    <input type="text" name='name' id='name' placeholder='name' required></input></p>
                    <p><label>Card Number: </label>
                    <input type="text" onChange={(e) => isCreditCard(e.target.value)} 
                    name='name' id='name' placeholder='Card Number' required></input><br />
                    <span>{errorMessage}</span></p>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
export default Module