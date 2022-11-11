import React from "react";
import "./TimeTable.css";

const TimeTable = () => {
  return (
    <div className="time-table">
      <h2>Available Departure Times</h2>
      <div className="heading">
        <p className="departure-city">Tampere</p>
        <p>&rarr;</p>
        <p className="destination-city">Helsinki</p>
        <p className="departure-date">2022-11-06</p>
      </div>
      <div className="times">
        <ul>
          <li>
            <p className="time">9:00</p>
            <p className="price">17€</p>
            <button className="proceed-to-info">Proceed</button>
          </li>

          <li>
            <p className="time">9:00</p>
            <p className="price">17€</p>
            <button className="proceed-to-info">Proceed</button>
          </li>

          <li>
            <p className="time">9:00</p>
            <p className="price">17€</p>
            <button className="proceed-to-info">Proceed</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeTable;
