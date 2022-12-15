import React from "react";

function Ticket({
  departure,
  destination,
  name,
  email,
  date,
  time,
  ticketNumber,
}) {
  return (
    <div className="w-[620px] mx-auto my-[50px] border p-4 rounded-md shadow-lg">
      <p className="text-xl text-center pb-2 font-bold">Your Ticket</p>
      <div className="p-3 bg-sky-400 flex justify-evenly text-white text-xl">
        <p>{departure}</p>
        <p>&rarr;</p>
        <p>{destination}</p>
      </div>
      <div className="flex justify-between py-4">
        <div>
          <p className="font-bold">{name}</p>
          <p>Email:&nbsp;{email}</p>
          <p>Date:&nbsp;{date}</p>
          <p>Time:&nbsp;{time}</p>
        </div>

        <div>
          <p className="font-bold">Travel Ticket Booking System</p>
          <p>Phone: 030 3000 XXXX</p>
          <p>Email: travel-ticket@booking.com</p>
        </div>
      </div>
      <div>
        <p className="font-['Libre_Barcode_39_Extended_Text'] text-4xl text-center border border-sky-200 w-100 py-2">
          {ticketNumber}
        </p>
      </div>
    </div>
  );
}

export default Ticket;
