import React, { useState } from "react";
import "./../css/styles.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Payment = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [billing, setBilling] = useState("");
  // const [state, setState] = useState('');
  const [zip, setZip] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [cardexpiration, setCardExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Form submitted, 
                  ${firstname}
                  ${lastname}
                  ${email}
                  ${billing}
                  ${zip}
                  ${cardnumber}
                  ${cardexpiration}
                  ${cvv}`);
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter Information Below</h2>
      <div id="pay-form">
        <form
          action="."
          method="post"
          className="hfrom"
          onSubmit={handleSubmit}
          id="payment-form"
        >
          <fieldset>
            <legend aria-hidden="false"></legend>
            <p>
              <label aria-label="First Name" aria-required="true">
                First Name:{" "}
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstname}
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
                placeholder="Last name"
                onChange={(event) => setLastName(event.target.value)}
                value={lastname}
                required
              ></input>
            </p>
            <p>
              <label aria-label="Email" aria-required="true">
                Email Address:{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              ></input>
            </p>
            <p>
              <label aria-label="Billing" aria-required="true">
                Billing Address:{" "}
              </label>
              <input
                type="text"
                name="billing"
                id="billing"
                placeholder="Billing Address"
                onChange={(event) => setBilling(event.target.value)}
                value={billing}
                required
              ></input>
            </p>
            <p>
              <label aria-label="Choose State" aria-required="true">
                State:{" "}
              </label>
              <select aria-label="Select State">
                <option value="AL" aria-label="Alabama">
                  Alabama
                </option>
                <option value="AK" aria-label="Alaska">
                  Alaska
                </option>
                <option value="AZ" aria-label="Arizona">
                  Arizona
                </option>
                <option value="AR" aria-label="Arkansas">
                  Arkansas
                </option>
                <option value="CA" aria-label="California">
                  California
                </option>
                <option value="CO" aria-label="Colorado">
                  Colorado
                </option>
                <option value="CT" aria-label="Connecticut">
                  Connecticut
                </option>
                <option value="DE" aria-label="Delaware">
                  Delaware
                </option>
                <option value="DC" aria-label="District of Columbia">
                  District Of Columbia
                </option>
                <option value="FL" aria-label="Florida">
                  Florida
                </option>
                <option value="GA" aria-label="Georgia">
                  Georgia
                </option>
                <option value="HI" aria-label="Hawaii">
                  Hawaii
                </option>
                <option value="ID" aria-label="Idaho">
                  Idaho
                </option>
                <option value="IL" aria-label="Illinois">
                  Illinois
                </option>
                <option value="IN" aria-label="Indiana">
                  Indiana
                </option>
                <option value="IA" aria-label="Iowa">
                  Iowa
                </option>
                <option value="KS" aria-label="Kansas">
                  Kansas
                </option>
                <option value="KY" aria-label="Kentucky">
                  Kentucky
                </option>
                <option value="LA" aria-label="Louisiana">
                  Louisiana
                </option>
                <option value="ME" aria-label="Maine">
                  Maine
                </option>
                <option value="MD" aria-label="Maryland">
                  Maryland
                </option>
                <option value="MA" aria-label="Massachusetts">
                  Massachusetts
                </option>
                <option value="MI" aria-label="Michigan">
                  Michigan
                </option>
                <option value="MN" aria-label="Minnesota">
                  Minnesota
                </option>
                <option value="MS" aria-label="Mississippi">
                  Mississippi
                </option>
                <option value="MO" aria-label="Missouri">
                  Missouri
                </option>
                <option value="MT" aria-label="Montana">
                  Montana
                </option>
                <option value="NE" aria-label="Nebraska">
                  Nebraska
                </option>
                <option value="NV" aria-label="Nevada">
                  Nevada
                </option>
                <option value="NH" aria-label="New Hampshire">
                  New Hampshire
                </option>
                <option value="NJ" aria-label="New Jersey">
                  New Jersey
                </option>
                <option value="NM" aria-label="New Mexico">
                  New Mexico
                </option>
                <option value="NY" aria-label="New York">
                  New York
                </option>
                <option value="NC" aria-label="North Carolina">
                  North Carolina
                </option>
                <option value="ND" aria-label="North Dakota">
                  North Dakota
                </option>
                <option value="OH" aria-label="Ohio">
                  Ohio
                </option>
                <option value="OK" aria-label="Oklahoma">
                  Oklahoma
                </option>
                <option value="OR" aria-label="Oregon">
                  Oregon
                </option>
                <option value="PA" aria-label="Pennsylvania">
                  Pennsylvania
                </option>
                <option value="RI" aria-label="Rhode Island">
                  Rhode Island
                </option>
                <option value="SC" aria-label="South Carolina">
                  South Carolina
                </option>
                <option value="SD" aria-label="South Dakota">
                  South Dakota
                </option>
                <option value="TN" aria-label="Tennesee">
                  Tennessee
                </option>
                <option value="TX" aria-label="Texas">
                  Texas
                </option>
                <option value="UT" aria-label="Utah">
                  Utah
                </option>
                <option value="VT" aria-label="Vermont">
                  Vermont
                </option>
                <option value="VA" aria-label="Vermont">
                  Virginia
                </option>
                <option value="WA" aria-label="Washingotn">
                  Washington
                </option>
                <option value="WV" aria-label="West Virginia">
                  West Virginia
                </option>
                <option value="WI" aria-label="Wisconsin">
                  Wisconsin
                </option>
                <option value="WY" aria-label="Wyoming">
                  Wyoming
                </option>
              </select>
            </p>
            <p>
              <label aria-label="Zip Code" aria-required="true">
                Zip-Code:{" "}
              </label>
              <Tippy content="Accepts 5-digit Zip-Code.">
                <input
                  type="number"
                  name="zip-code"
                  id="zip-code"
                  placeholder="Zip"
                  onChange={(event) => setZip(event.target.value)}
                  value={zip}
                  required
                ></input>
              </Tippy>
            </p>
            <p>
              <label aria-label="Card Number" aria-required="true">
                Card Number:{" "}
              </label>
              <Tippy content="16 numerical digits on front of card.">
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  placeholder="Card Number"
                  maxLength={16}
                  onChange={(event) => setCardNumber(event.target.value)}
                  value={cardnumber}
                  required
                ></input>
              </Tippy>
            </p>
            <p>
              <label aria-label="Card Expiration" aria-required="true">
                Card Expiration:{" "}
              </label>
              <Tippy content="Format: MM/YY">
                <input
                  type="text"
                  name="card-expiration"
                  id="card-expiration"
                  placeholder="Expir."
                  required
                  onChange={(event) => setCardExpiration(event.target.value)}
                  value={cardexpiration}
                  maxLength={5}
                ></input>
              </Tippy>
            </p>
            <p>
              <label aria-label="Card CVV" aria-required="true">
                *CVV:{" "}
              </label>
              <Tippy content="3 Digits on back of card">
                <input
                  type="text"
                  name="card-cvv"
                  id="card-cvv"
                  placeholder="CVV"
                  required
                  maxLength={3}
                  onChange={(event) => setCvv(event.target.value)}
                  value={cvv}
                ></input>
              </Tippy>
            </p>
          </fieldset>
        </form>
        <div className="btn-payment">
          <button type="submit" id="payment-form">
            Submit
          </button>
        </div>
      </div>
      <div className="stripe-div">
      <p>Powered by </p>
        <img
          src="./stripelogo.png"
          alt="Stripe Payments Logo"
          className="stripe-logo"
        />
      </div>
    </div>
  );
};

export default Payment;