import React from "react";
import Button from "../Button/Button";
import "./TimeTable.css";

const TimeTable = ({
  destination,
  departure,
  price,
  date,
  bustimes,
  proceed,
}) => {
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
        {bustimes.map((time, id) => {
          return (
            <div className="timetabels">
              <p className="time">{time}</p>
              <p className="price">{price} € </p>
              <Button proceed={() => proceed(id)} text={"proceed"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeTable;
