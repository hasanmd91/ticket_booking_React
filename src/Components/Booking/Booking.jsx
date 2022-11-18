import React from "react";
import "./Booking.css";

const Booking = (props) => {
  return (
    <section className="section-booking">
      <form className="booking">
        <div>
          <select
            className="departure-city"
            defaultValue="choice"
            name="departure"
            onChange={props.changeHandler}
            required
          >
            <option value="choice" disabled>
              Pick departure
            </option>
            {props.citylist}
          </select>
        </div>
        <div>
          <select
            className="destination-city"
            defaultValue="choice"
            name="destination"
            onChange={props.changeHandler}
            required
          >
            <option value="choice" disabled>
              Pick destination
            </option>
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
