import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1> Name: {props.ticket.name}</h1>
      <p> Email: {props.ticket.email} </p>
      <p> Phone no: {props.ticket.phone} </p>
      <p> Travel date: {props.ticket.date} </p>
      <p> Departure: {props.ticket.departure} </p>
      <p> Destination: {props.ticket.destination} </p>
      <p> Ticket Price: {props.ticket.price} </p>
      <p> Departure Time: {props.ticket.selectedbustime} </p>
      <p> Ticket Number: {props.ticket.ticketNumber} </p>
      <p> Ticket id: {props.ticket.id} </p>
    </div>
  );
};

export default Card;
