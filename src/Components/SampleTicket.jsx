import React from "react";

const SampleTicket = (props) => {
  return (
    <div>
      <p>Departure City: {props.departureCity}</p>
      <p>Destination City: {props.destinationCity}</p>
      <p>Travel Date: {props.date}</p>
      <p>Number of People: {props.people}</p>
    </div>
  );
};
export default SampleTicket;
