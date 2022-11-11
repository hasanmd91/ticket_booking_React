import React from "react";
import "./InfoDetail.css";

const InfoDetail = (props) => {
  return (
    <div className="client-info">
      <h2>Enter contact info</h2>
      <form className="inputs">
        <div>
          <label htmlFor="clientName">Full Name</label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="For ex. John Doe"
            value={props.changeHandler}
          />
        </div>
        <div>
          <label htmlFor="clientEmail">Email</label>
          <input
            type="tel"
            name="clientEmail"
            id="clientEmail"
            placeholder="For ex email@website.com"
            value={props.changeHandler}
          />
        </div>
        <div>
          <label htmlFor="clientPhone">Phone No.</label>
          <input
            type="tel"
            name="clientPhone"
            id="clientPhone"
            value={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="counterAdult">Adult</label>
          <input type="number" id="counterAdult" value={props.changeHandler} />
        </div>

        <div>
          <label htmlFor="counterStudent">Student & Kids</label>
          <input
            type="number"
            id="counterStudent"
            value={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="counterElderly">Elderly</label>
          <input
            type="number"
            id="counterElderly"
            value={props.changeHandler}
          />
        </div>
        <button id="proceed-to-book" className="secondary-btn">
          Proceed for Booking
        </button>
      </form>
    </div>
  );
};

export default InfoDetail;
