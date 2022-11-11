import React from "react";
import CardImg from "../Assets/card.png";
import "./PaymentGateway.css";

const PaymentGateway = () => {
  return (
    <div className="payment-gateway">
      <h2>Enter card details</h2>
      <img src={CardImg} alt="illustration of a bank card" />
      <form className="card-detail">
        <div>
          <label htmlFor="card-num">Card Number:</label>
          <input type="number" id="card-num" />
        </div>

        <div>
          <label htmlFor="holder-name">Holder's Name:</label>
          <input type="text" id="holder-name" />
        </div>

        <div>
          <label htmlFor="expiry-date">Expirty Date:</label>
          <input type="tel" id="expiry-date" />
        </div>
        <div>
          <label htmlFor="CVC">CVC:</label>
          <input type="number" id="cvc" />
        </div>
        <div>
          <label></label>
          <button className="secondary-btn">Purchase</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentGateway;
