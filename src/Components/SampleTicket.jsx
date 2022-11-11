import React from "react";
import "./SampleTicket.css";

const SampleTicket = (props) => {
  return (
    <div className="ticket-wrapper">
      <p>Departure City: {props.departure}</p>
      <p>Destination City: {props.destination}</p>
      <p>Travel Date: {props.date}</p>
      <p>
        Number of People: Adult: {props.counterAdult} Student:
        {props.counterStudent} Elderly: {props.counterElderly}
      </p>
      <div>Ticket No.: {props.ticketNumber}</div>
    </div>
  );
};
export default SampleTicket;
