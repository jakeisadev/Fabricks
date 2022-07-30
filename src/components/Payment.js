import React from 'react';

const Payment = () => {

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
                    <input type="number" name='zip-code' id='zip-code' placeholder='Zip Code' required></input></p>
                    <p><label>Card Number: </label>
                    <input type="number"
                    name='card-number' id='card-number' placeholder='Card Number' required></input></p>
                </fieldset>
            </form>
        </div>
      </div>
  );
}

export default Payment