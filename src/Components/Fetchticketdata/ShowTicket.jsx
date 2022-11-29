import React from "react";
import "./ShowTicket.css";

const ShowTicket = (props) => {
  return (
    <div className="ticket-wrapper">
      <div className="cities">
        <p>{props.ticket.departure}</p>
        <p>&rarr;</p>
        <p>{props.ticket.destination}</p>
        <p>{props.ticket.date}</p>
        <p>{props.ticket.selectedbustime}</p>
      </div>

      <div className="info-wrapper">
        <div className="personal-info">
          <p>Name: {props.ticket.name}</p>
          <p>Email:&nbsp; {props.ticket.email}</p>
          <p>Phone: &nbsp;{props.ticket.phone}</p>
        </div>
        <div className="company-info">
          <h3>Himalayan Express Bus</h3>
          <p>Phone: 030 4569870</p>
          <p>Email: himalayan-bus@himalayan.fi</p>
        </div>
      </div>
      <div className="ticket-info">
        <div>{props.ticket.ticketNumber}</div>
        <div className="ticket-barcode">{props.ticket.ticketNumber}</div>
      </div>
    </div>
  );
};

export default ShowTicket;
