import React from "react";
import "./SampleTicket.css";

const SampleTicket = ({
  departure,
  destination,
  date,
  name,
  email,
  phone,
  ticketNumber,
}) => {
  return (
    <div className="ticket-wrapper">
      <div className="cities">
        <p>{departure}</p>
        <p>{destination}</p>
        <p>{date}</p>
      </div>

      <div className="info-wrapper">
        <div className="personal-info">
          <p>Name: {name}</p>
          <p>Email:&nbsp; {email}</p>
          <p>Phone: &nbsp;{phone}</p>
        </div>
        <div className="company-info">
          <h3>Himalayan Express Bus</h3>
          <p>Phone: 030 4569870</p>
          <p>Email: himalayan-bus@himalayan.fi</p>
        </div>
      </div>
      <div className="ticket-info">
        <div>{ticketNumber}</div>
        <div className="ticket-barcode">{ticketNumber}</div>
      </div>
    </div>
  );
};
export default SampleTicket;
