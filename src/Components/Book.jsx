import React, { useState } from "react";

import { db } from "../Backend/Firebase_config";
import { collection, addDoc } from "firebase/firestore";

import Hero from "./Hero";
import TimeTable from "./TimeTable";
import Message from "./Message";
import PersonalInfo from "./PersonalInfo";
import PriceCalc from "./PriceCalc";
import Ticket from "./Ticket";
import FinalMessage from "./FinalMessage";

function Book() {
  const [data, setData] = useState({
    departure: "",
    destination: "",
    date: "",
    time: "",
    price: "",
    totalPrice: "",
    name: "",
    email: "",
    phone: "",
    adults: "",
    kids: "",
    elders: "",
    ticketNumber: "",
  });

  // Conditional Rendering States

  const [timetable, setTimetable] = useState(false);
  const [message, setMessage] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showPriceCalc, setShowPriceCalc] = useState(false);
  const [showFinalMessage, setShowFinalMesssage] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [loading, setTicketLoading] = useState(true);

  const departureTimes = ["8:00", "10:00", "12:00", "14:00"];

  let dynamicPrice = Math.floor(Math.random() * (7 - 25) + 25);

  const setPrice = () => {
    setData({ ...data, price: dynamicPrice });
  };

  const ticketCollectionRef = collection(db, "ticketinfo");

  const createTicket = async (data) => {
    await addDoc(ticketCollectionRef, data);
  };

  //Getting today's date for Date Input Min value.
  const newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  const today = `${year}-${month}-${date}`;

  const ticketNumHandler = (length) => {
    let ticket = "";
    let chars = "ABCDEFGHI-JKLMNOPQRS-TUVWXYZ-0123456789";
    for (let i = 0; i < length; i++) {
      ticket += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ticket;
  };

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const searchHandler = (e) => {
    if (data.departure === data.destination) {
      alert("Please choose different cities.");
    } else {
      e.preventDefault();
      setPrice();
      setTimetable(true);
    }
  };

  const chooseHandler = (e) => {
    e.preventDefault();
    setData({ ...data, time: e.target.value });
    setMessage(true);
  };

  const infoHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const showPriceCalcHandler = (e) => {
    e.preventDefault();
    const totalPrice = (
      data.adults * data.price * 1 +
      data.kids * data.price * 0.45 +
      data.elders * data.price * 0.45
    ).toFixed(2);
    setData({ ...data, totalPrice: totalPrice });
    setShowPriceCalc(true);
  };

  const paymentHandler = () => {
    let ticket = ticketNumHandler(11);
    setData({ ...data, ticketNumber: ticket });
    setShowFinalMesssage(true);
  };

  const ticketHandler = () => {
    createTicket(data);
    setShowFinalMesssage(false);
    setShowInfo(false);
    setShowPriceCalc(false);
    setTicketLoading(false);
    setShowTicket(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <form
        className="booking w-[1240px] mx-auto flex justify-evenly gap-3 border py-6 shadow-lg"
        onChange={changeHandler}
      >
        <div className="mx-2">
          <label htmlFor="departure  w-[200px]">From</label>
          <select
            className="w-[200px] border p-2 ml-2 rounded-md"
            name="departure"
            id="departure"
            defaultValue={"default"}
            required
          >
            <option value="default" disabled>
              Pick a Departure
            </option>
            <option value="Helsinki">Helsinki</option>
            <option value="Turku">Turku</option>
            <option value="Tampere">Tampere</option>
            <option value="Oulu">Oulu</option>
            <option value="Vaasa">Vaasa</option>
            <option value="Lappeenranta">Lappeenranta</option>
            <option value="Kuopio">Kuopio</option>
          </select>
        </div>

        <div className="mx-2">
          <label htmlFor="destination  w-[200px]">To</label>
          <select
            className="w-[200px] border p-2 ml-2 rounded-md"
            name="destination"
            id="destination"
            defaultValue={"default"}
            required
          >
            <option value="default" disabled>
              Pick a Destination
            </option>
            <option value="Helsinki">Helsinki</option>
            <option value="Turku">Turku</option>
            <option value="Tampere">Tampere</option>
            <option value="Oulu">Oulu</option>
            <option value="Vaasa">Vaasa</option>
            <option value="Lappeenranta">Lappeenranta</option>
            <option value="Kuopio">Kuopio</option>
          </select>
        </div>
        <div className="mx-2">
          <label htmlFor="date">When</label>
          <input
            className="w-[200px] border p-2 ml-2 rounded-md"
            type="date"
            name="date"
            id="date"
            min={today}
            required
          />
        </div>
        <button className="bg-sky-400 p-2" onClick={searchHandler}>
          Search
        </button>
      </form>
      {timetable && (
        <TimeTable
          times={departureTimes.map((el, index) => {
            return (
              <tr key={el}>
                <td className="border text-center p-3">{data.departure}</td>
                <td className="border text-center p-3">{data.destination}</td>
                <td className="border text-center p-3">{el}</td>
                <td className="border text-center p-3">{data.price}€</td>
                <td className="border text-center p-3">
                  <button
                    value={el}
                    className="py-1 px-2"
                    onClick={chooseHandler}
                  >
                    Choose
                  </button>
                </td>
              </tr>
            );
          })}
        />
      )}
      {message && (
        <Message
          {...data}
          showInfoHandler={() => {
            setShowInfo(true);
            setMessage(false);
            setTimetable(false);
          }}
          messageHandler={() => setMessage(false)}
        />
      )}
      {showInfo && (
        <PersonalInfo
          infoHandler={infoHandler}
          showPriceCalcHandler={showPriceCalcHandler}
        />
      )}
      {showPriceCalc && <PriceCalc {...data} paymentHandler={paymentHandler} />}
      {showFinalMessage && (
        <FinalMessage
          {...data}
          ticketHandler={() => setTimeout(ticketHandler, 4000)}
        />
      )}
      {showTicket && <Ticket {...data} />}
    </div>
  );
}

export default Book;
