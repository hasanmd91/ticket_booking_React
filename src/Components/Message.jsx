import React from "react";

function Message({
  departure,
  destination,
  time,
  showInfoHandler,
  messageHandler,
}) {
  return (
    <div className="fixed w-screen h-screen bg-[#000000b3] flex justify-center items-center">
      <div className="message bg-white p-4 rounded-md">
        <p>
          You have choosen the travel from {departure} to {destination} at{" "}
          {time} o'clock. Are you ready to proceed?
        </p>
        <button className="py-1 px-4 mr-2 mt-4" onClick={showInfoHandler}>
          YES
        </button>
        <button className="py-1 px-4" onClick={messageHandler}>
          NO
        </button>
      </div>
    </div>
  );
}

export default Message;
