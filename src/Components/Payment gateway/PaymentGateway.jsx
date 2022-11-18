import React from "react";
import CardImg from "../Assets/card.png";
import "./PaymentGateway.css";

const PaymentGateway = (props) => {
  return (
    <div className="payment-gateway">
      <h2>Enter card details</h2>
      <img src={CardImg} alt="illustration of a bank card" />
      <form className="card-detail" onSubmit={props.ticketMaker}>
        <div>
          <label htmlFor="cardNum">Card Number:</label>
          <input
            type="number"
            id="cardNum"
            name="cardNum"
            value={props.cardNum}
            onChange={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="holderName">Holder's Name:</label>
          <input
            type="text"
            id="holderName"
            name="holderName"
            value={props.holderName}
            onChange={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="cardExpiry">Expirty Date:</label>
          <input
            type="tel"
            id="cardExpiry"
            name="cardExpiry"
            value={props.cardExpiry}
            onChange={props.changeHandler}
          />
        </div>
        <div>
          <label htmlFor="CVC">CVC:</label>
          <input
            type="number"
            id="cvc"
            name="cvc"
            min="100"
            max="999"
            value={props.cvc}
            onChange={props.changeHandler}
          />
        </div>
        <div>
          <label></label>
          <button className="secondary-btn" type="submit">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentGateway;
