import React from "react";
import "./SampleTicket.css";

const SampleTicket = (props) => {
  return (
    <div className="ticket-wrapper">
      <p>Departure City: {props.departureCity}</p>
      <p>Destination City: {props.destinationCity}</p>
      <p>Travel Date: {props.date}</p>
      <p>Number of People: {props.people}</p>
      <p>Ticket No.: {props.ticketNumber}</p>
      <p className="ticket-barcode">{props.ticketNumber}</p>
    </div>
  );
};
export default SampleTicket;
