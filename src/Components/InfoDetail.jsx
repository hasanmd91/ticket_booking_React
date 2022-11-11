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
            value={props.clientName}
            onChange={props.changeHandler}
          />
        </div>
        <div>
          <label htmlFor="clientEmail">Email</label>
          <input
            type="tel"
            name="clientEmail"
            id="clientEmail"
            placeholder="For ex email@website.com"
            value={props.clientEmail}
            onChange={props.changeHandler}
          />
        </div>
        <div>
          <label htmlFor="clientPhone">Phone No.</label>
          <input
            type="tel"
            name="clientPhone"
            id="clientPhone"
            value={props.clientPhone}
            onChange={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="counterAdult">Adult</label>
          <input
            type="number"
            id="counterAdult"
            name="counterAdult"
            min="0"
            value={props.counterAdult}
            onChange={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="counterStudent">Student & Kids</label>
          <input
            type="number"
            id="counterStudent"
            name="counterStudent"
            min="0"
            value={props.counterStudent}
            onChange={props.changeHandler}
          />
        </div>

        <div>
          <label htmlFor="counterElderly">Elderly</label>
          <input
            type="number"
            id="counterElderly"
            name="counterElderly"
            min="0"
            value={props.counterElderly}
            onChange={props.changeHandler}
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
