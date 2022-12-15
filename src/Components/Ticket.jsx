import React from "react";
import html2canvas from "html2canvas";
import { QRCodeSVG } from "qrcode.react";

function Ticket({
  departure,
  destination,
  name,
  email,
  phone,
  date,
  time,
  ticketNumber,
}) {
  //Downloading ticket as .png
  const downloadHandler = async () => {
    const element = document.getElementById("ticket"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = `Ticket-${ticketNumber}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-[600px] mx-auto my-[50px] border p-4 rounded-md shadow-lg"
      id="ticket"
    >
      <button onClick={downloadHandler}>
        <i className="material-icons p-1">save</i>
      </button>
      {/* <p className="text-xl text-center pb-2 font-bold">Your Ticket</p> */}
      <div className="p-3 mt-2 bg-sky-400 flex justify-evenly text-white text-xl">
        <p>{departure}</p>
        <p>&rarr;</p>
        <p>{destination}</p>
      </div>
      <div className="flex justify-between py-4">
        <div>
          <p className="font-bold">{name}</p>
          <p>Email:&nbsp;{email}</p>
          <p>Phone:&nbsp;{phone}</p>
          <p>Date:&nbsp;{date}</p>
          <p>Time:&nbsp;{time}</p>
        </div>

        <QRCodeSVG value={ticketNumber} />
      </div>
      <div className="text-bold text-center border bg-black text-white p-2">
        <p>{ticketNumber}</p>
      </div>
    </div>
  );
}

export default Ticket;
