import React, { useEffect, useState } from "react";
import { db } from "../Backend/Firebase_config";
import { collection, getDocs } from "firebase/firestore";

import Hero from "./Hero";
import Ticket from "./Ticket";

function Search() {
  const [tickets, setTickets] = useState([]);
  const [singleTicket, setSingleTicket] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(false);

  const colRef = collection(db, "ticketinfo");

  useEffect(() => {
    async function getTicket() {
      const data = await getDocs(colRef);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getTicket();
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const oneTicket = tickets.filter(
      (ticket) => ticket.ticketNumber === search
    );
    setSingleTicket(oneTicket);
    setQuery(true);
    e.target.reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="w-[620px] mx-auto">
        <form
          onChange={changeHandler}
          onSubmit={submitHandler}
          className=" flex justify-center gap-6 items-center p-6 border shadow-lg"
        >
          <label className="inline-block" htmlFor="searchTicket">
            Provide a ticket number
          </label>
          <input
            className="py-1 border block w-[200px]  p-1"
            type="text"
            id="searchTicket"
            name="searchTicket"
          />
          <button className="bg-sky-400 p-2 " type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="w-[620px] mx-auto">
        {query &&
          singleTicket.map((ticket) => {
            return (
              <Ticket
                key={ticket.ticketNumber}
                name={ticket.name}
                email={ticket.email}
                date={ticket.date}
                time={ticket.time}
                phone={ticket.phone}
                departure={ticket.departure}
                destination={ticket.destination}
                ticketNumber={ticket.ticketNumber}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Search;
