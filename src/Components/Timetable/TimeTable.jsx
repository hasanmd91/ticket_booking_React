import React from "react";
import Button from "../Button/Button";
import "./TimeTable.css";

const TimeTable = (props) => {
  return (
    <div className="time-table">
      <h2>Available Departure Times</h2>
      <div className="heading">
        <p className="departure-city">{props.passengerinfo.departure}</p>
        <p>&rarr;</p>
        <p className="destination-city">{props.passengerinfo.destination}</p>
        <p className="departure-date">{props.passengerinfo.date}</p>
      </div>
      <div className="times">
        {props.bustimes.map((time, id) => {
          return (
            <div className="timetabels">
              <p className="time">{time}</p>
              <p className="price">{props.passengerinfo.price} € </p>
              <Button proceed={() => props.proceed(id)} text={"proceed"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeTable;
