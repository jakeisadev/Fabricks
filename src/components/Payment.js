import React, { useState } from "react";
import "./../css/styles.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Payment = () => {
  const [cardnumber, setCardNumber] = useState("");
  const [nameoncard, setNameOnCard] = useState("");
  const [expdate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Form submitted, 
                  ${cardnumber}
                  ${nameoncard}
                  ${expdate}
                  ${cvc}                 
                  ${fullname}`);
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Finalize Order</h2>
      <div id="pay-form">
        <form
          action="."
          method="post"
          className="hfrom"
          onSubmit={handleSubmit}
          id="payment-form"
        >
          <div className="personal-info-title-div">
            <h1 aria-label="Pay with card">Pay with card</h1>
            <img
              src="./stripe.jpg"
              alt="Powered by Stripe Payments Logo"
              className="stripe-img"
            />
          </div>
          <fieldset id="personal-info">
            <label aria-label="Card Information">Card Information</label>
            <p>
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="0000 0000 0000 0000"
                onChange={(event) => setCardNumber(event.target.value)}
                value={cardnumber}
                required
              ></input>
            </p>
            <p>
              <input
                type="text"
                name="nameoncard"
                id="nameoncard"
                placeholder="Name On Card"
                onChange={(event) => setNameOnCard(event.target.value)}
                value={nameoncard}
                required
              ></input>
            </p>
            <div className="card-exp-and-cvc-div">
              <p>
                <input
                  type="text"
                  name="card-exp-date"
                  id="card-exp-date"
                  placeholder="MM / YY"
                  onChange={(event) => setExpDate(event.target.value)}
                  value={expdate}
                  required
                ></input>
              </p>
              <p>
                <input
                  type="text"
                  name="cvc-card"
                  id="cvc-card"
                  placeholder="CVC"
                  onChange={(event) => setCvc(event.target.value)}
                  value={cvc}
                  required
                ></input>
              </p>
            </div>
          </fieldset>
          <fieldset id="normal-info">
            <label aria-label="Select Your State">State</label>
            <p>
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
          </fieldset>
          <fieldset id="contact-info">
            <label aria-label="Contact Information">Contact Information</label>
            <p>
              <Tippy content="Type your full name">
                <input
                  type="text"
                  name="fullname"
                  id="full-name"
                  placeholder="Name"
                  onChange={(event) => setFullName(event.target.value)}
                  value={fullname}
                  required
                ></input>
              </Tippy>
            </p>
            <p>
              <Tippy content="Enter a valid email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                ></input>
              </Tippy>
            </p>
            <p>
              <Tippy content="Enter a valid phone number">
                <input
                  type="number"
                  name="phonenumber"
                  id="phone-number"
                  placeholder="Phone"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  value={phonenumber}
                  required
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
    </div>
  );
};

export default Payment;
