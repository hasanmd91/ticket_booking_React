import React from "react";

function FinalMessage({
  name,
  departure,
  destination,
  date,
  time,
  adults,
  kids,
  elders,
  totalPrice,
  ticketHandler,
}) {
  return (
    <div className="fixed w-screen h-screen bg-[#000000b3] flex justify-center items-center">
      <div className="w-[620px] bg-white p-4">
        <p className="text-xl">Please confirm the ticket details:</p>
        <ul className="flex justify-between">
          <div>
            <li>Traveller's name: {name}</li>
            <li>Departure: {departure}</li>
            <li>Destination: {destination}</li>
            <li>Date: {date}</li>
            <li>Time: {time}</li>
          </div>

          <div>
            <li>No. of Adults: {adults}</li>
            <li>No. of Kids: {kids}</li>
            <li>No of Elders: {elders}</li>
            <li>Total Price: {totalPrice}</li>
          </div>
        </ul>
        <button className="py-2 px-4 mt-4" onClick={ticketHandler}>
          Get Ticket
        </button>
      </div>
    </div>
  );
}

export default FinalMessage;
