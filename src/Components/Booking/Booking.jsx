import React from "react";
import "./Booking.css";

const Booking = (props) => {
  return (
    <section className="section-booking">
      <form
        className="booking"
        onSubmit={props.submitCity}
        onChange={props.cityChange}
      >
        <div>
          <select
            className="departure-city"
            defaultValue="choice"
            name="departure"
            required
          >
            <option value="choice" disabled>
              Pick departure
            </option>
            <option value="Helsinki">Helsinki</option>
            <option value="Tampere">Tampere</option>
            <option value="Oulu">Oulu</option>
            <option value="Kuopio">Kuopio</option>
            <option value="Turku">Turku</option>
          </select>
        </div>
        <div>
          <select
            className="destination-city"
            defaultValue="choice"
            name="destination"
            required
          >
            <option value="choice" disabled>
              Pick destination
            </option>
            <option value="Helsinki">Helsinki</option>
            <option value="Tampere">Tampere</option>
            <option value="Oulu">Oulu</option>
            <option value="Kuopio">Kuopio</option>
            <option value="Turku">Turku</option>
          </select>
        </div>

        <div>
          <input className="booking-date" type="date" name="date"></input>
        </div>

        <button type="submit" className="primary-btn" id="proceed-to-timeline">
          Search
        </button>
      </form>
    </section>
  );
};

export default Booking;
