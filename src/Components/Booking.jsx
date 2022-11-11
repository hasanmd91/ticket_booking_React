import React from "react";
import "./Booking.css";

const Booking = (props) => {
  return (
    <section className="section-booking">
      <form className="booking">
        <div>
          <select
            className="departure-city"
            value={props.departure}
            name="departure"
            onChange={props.changeHandler}
            required
          >
            {props.citylist}
          </select>
        </div>
        <div>
          <select
            className="destination-city"
            value={props.destination}
            name="destination"
            onChange={props.changeHandler}
            required
          >
            {props.citylist}
          </select>
        </div>

        <div>
          <input
            className="booking-date"
            type="date"
            value={props.date}
            name="date"
            onChange={props.changeHandler}
            required
          ></input>
        </div>

        <button className="primary-btn" id="proceed-to-timeline">
          Search
        </button>
      </form>
    </section>
  );
};

export default Booking;
