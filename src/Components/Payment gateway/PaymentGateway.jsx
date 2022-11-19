import React from "react";
import Button from "../Button/Button";

import "./PaymentGateway.css";

const PaymentGateway = ({ cardinfoSubmit, cardinfochange }) => {
  return (
    <div className="payment-gateway">
      <h2>Enter card details</h2>
      {/* <img src={CardImg} alt="illustration of a bank card" /> */}
      <form
        className="card-detail"
        onSubmit={cardinfoSubmit}
        onChange={cardinfochange}
      >
        <div>
          <label htmlFor="cardNum">Card Number:</label>
          <input type="number" id="cardNum" name="cardNum" />
        </div>
        <div>
          <label htmlFor="holderName">Holder's Name:</label>
          <input type="text" id="holderName" name="holderName" />
        </div>

        <div>
          <label htmlFor="cardExpiry">Expirty Date:</label>
          <input type="tel" id="cardExpiry" name="cardExpiry" />
        </div>
        <div>
          <label htmlFor="CVC">CVC:</label>
          <input type="number" id="cvc" name="cvc" min="100" max="999" />
        </div>
        <div>
          <Button type={"submit"} text={"purchase"} />
        </div>
      </form>
    </div>
  );
};

export default PaymentGateway;
