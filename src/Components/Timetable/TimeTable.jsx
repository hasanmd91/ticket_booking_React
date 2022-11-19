import React from "react";
import "./TimeTable.css";

const TimeTable = ({ destination, departure, price, date, bustimes }) => {
  return (
    <div className="time-table">
      <h2>Available Departure Times</h2>
      <div className="heading">
        <p className="departure-city">{departure}</p>
        <p>&rarr;</p>
        <p className="destination-city">{destination}</p>
        <p className="departure-date">{date}</p>
      </div>
      <div className="times">
        {bustimes.map((el) => {
          return (
            <div className="timetabels">
              <p className="time">{el}</p>
              <p className="price">{price} € </p>
              <button className="proceed-to-info secondary-btn">
                Proceed
              </button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeTable;
