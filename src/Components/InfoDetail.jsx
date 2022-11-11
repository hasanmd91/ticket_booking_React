import React from "react";
import "./InfoDetail.css";

const InfoDetail = (props) => {
  return (
    <div className="client-info" onChange={props.changeHandler}>
      <h2>Fill in your info</h2>
      <form className="inputs">
        <div>
          <label htmlFor="client-name">Full Name</label>
          <input type="text" name="clientName" id="client-name" />
        </div>
        <div>
          <label htmlFor="client-email">Email</label>
          <input type="tel" name="clientEmail" id="client-email" />
        </div>
        <div>
          <label htmlFor="client-phone">Phone No.</label>
          <input type="number" name="clientPhone" id="client-phone" />
        </div>
        <div className="counters">
          <label>Adult</label>
          <div>
            <button id="adult-count-reduce">-</button>
            <p id="counterAdult" name="counterAdult">
              {props.counterAdult}
            </p>
            <button id="adult-count-increase">+</button>
          </div>
        </div>
        <div className="counters">
          <label htmlFor="counterStudent">Student & Kid</label>
          <div>
            <button id="student-count-reduce" onClick={props.removeOneHandler}>
              -
            </button>
            <p
              id="counterStudent"
              onClick={props.addOneHandler}
              name="counterStudent"
            >
              {props.counterStudent}
            </p>
            <button id="student-count-increase">+</button>
          </div>
        </div>

        <div className="counters">
          <label htmlFor="counterElderly">Elderly</label>
          <div>
            <button id="elderly-count-reduce">-</button>
            <p id="elderly-count" name="counterElderly">
              {props.counterElderly}
            </p>
            <button id="elderly-count-increase">+</button>
          </div>
        </div>
        <div>
          <button id="proceed-to-book" className="secondary-btn">
            Proceed for Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoDetail;
