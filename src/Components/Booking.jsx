import React from "react";
import "./Booking.css";

const Booking = (props) => {
  return (
    <section className="section-booking">
      <form className="booking" onChange={props.changehandler}>
        <div>
          <select
            className="departure-city"
            value={props.departure}
            name={props.departure}
            required
          >
            {props.citylist}
          </select>
        </div>
        <div>
          <select
            className="destination-city"
            value={props.destination}
            name={props.destination}
            required
          >
            {props.citylist}
          </select>
        </div>

        <div>
          <input
            className="booking-date"
            type="date"
            min={props.date}
            value={props.date}
            name={props.date}
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
