import React from "react";
import "./SampleTicket.css";

const SampleTicket = (props) => {
  return (
    <div className="ticket-wrapper">
      <div className="cities">
        <p>{props.departure}</p>
        <p>&rarr;</p>
        <p>{props.destination}</p>
        <p>{props.date}</p>
      </div>

      <div className="info-wrapper">
        <div className="personal-info">
          <p>Name: {props.clientName}</p>
          <p>Adult:&nbsp; {props.counterAdult}</p>
          <p>Student: &nbsp;{props.counterStudent}</p>
          <p>Elderly:&nbsp;{props.counterElderly}</p>
        </div>
        <div className="company-info">
          <h3>Himalayan Express Bus</h3>
          <p>Phone: 030 4569870</p>
          <p>Email: himalayan-bus@himalayan.fi</p>
        </div>
      </div>
      <div className="ticket-info">
        <div>{props.ticketNumber}</div>
        <div className="ticket-barcode">{props.ticketNumber}</div>
      </div>
    </div>
  );
};
export default SampleTicket;
