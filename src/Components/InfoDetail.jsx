import React from "react";
import "./InfoDetail.css";

const InfoDetail = () => {
  return (
    <div className="client-info">
      <h3>Fill in your info</h3>
      <form className="inputs">
        <div>
          <label htmlFor="client-name">Full Name</label>
          <input type="text" name="client-name" id="client-name" />
        </div>
        <div>
          <label htmlFor="client-email">Email</label>
          <input type="email" name="client-email" id="client-email" />
        </div>
        <div>
          <label htmlFor="client-phone">Phone No.</label>
          <input type="number" name="client-phone" id="client-phone" />
        </div>
        <div className="counters">
          <label>Adult</label>
          <div>
            <button id="adult-count-reduce">-</button>
            <p id="adult-count">1</p>
            <button id="adult-count-increase">+</button>
          </div>
        </div>
        <div className="counters">
          <label htmlFor="student-count">Student</label>
          <div>
            <button id="student-count-reduce">-</button>
            <p id="student-count">1</p>
            <button id="student-count-increase">+</button>
          </div>
        </div>

        <div className="counters">
          <label>Elderly</label>
          <div>
            <button id="elderly-count-reduce">-</button>
            <p id="elderly-count">1</p>
            <button id="elderly-count-increase">+</button>
          </div>
        </div>
        <button id="proceed-to-book">Proceed for Booking</button>
      </form>
    </div>
  );
};

export default InfoDetail;
