import React from "react";
import "./../css/styles.css";

const Payment = () => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter Information Below</h2>
      <div id="pay-form">
        <form action="." method="post" className="hfrom" id="payment-form">
          <fieldset>
            <legend aria-hidden='false'></legend>
            <p>
              <label aria-label="First Name" aria-required="true">
                First Name:{" "}
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="name"
                required
              ></input>
            </p>
            <p>
              <label aria-label="Last Name" aria-required="true">
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="name"
                required
              ></input>
            </p>
            <p>
              <label aria-label="Email" aria-required="true">
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              ></input>
            </p>
            <p>
              <label aria-label="Billing" aria-required="true">
                Billing:{" "}
              </label>
              <input
                type="text"
                name="billing"
                id="billing"
                placeholder="Billing Address"
                required
              ></input>
            </p>
            <p>
              <label aria-label="State" aria-required="true">
                State:{" "}
              </label>
              <select>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </p>
            <p>
              <label aria-label="Zip Code" aria-required="true">
                Zip-Code:{" "}
              </label>
              <input
                type="number"
                name="zip-code"
                id="zip-code"
                placeholder="Zip"
                required
              ></input>
            </p>
            <p>
              <label aria-label="Card Number" aria-required="true">
                Card Number:{" "}
              </label>
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="Card Number"
                maxLength={16}
                required
              ></input>
            </p>
            <p>
              <label aria-label="Card Expiration" aria-required="true">
                Card Expiration:{" "}
              </label>
              <input
                type="text"
                name="card-expiration"
                id="card-expiration"
                placeholder="Expir."
                required
                maxLength={5}
              ></input>
            </p>
            <p>
              <label aria-label="Card CVV" aria-required="true">
                *CVV:{" "}
              </label>
              <input
                type="text"
                name="card-cvv"
                id="card-cvv"
                placeholder="CVVs"
                required
                maxLength={3}
              ></input>
            </p>
          </fieldset>
        </form>
      </div>
      <button type="submit" id="payment-form">
        Submit
      </button>
    </div>
  );
};

export default Payment;