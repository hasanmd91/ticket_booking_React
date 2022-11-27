import React, { useEffect, useState } from "react";
import { db } from "../../Backend/firbase_config";
import { collection, getDocs } from "firebase/firestore";
import Card from "../Fetchticketdata/Card";

const Fetchdata = () => {
  const [tickets, setTickets] = useState([]);
  const [singleTicket, setSingleTicket] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(false);

  const colRef = collection(db, "ticketinfo");

  useEffect(() => {
    const getTicket = async () => {
      const data = await getDocs(colRef);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTicket();
  }, []);

  const changeHandeler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    const oneTicket = tickets.filter(
      (ticket) => ticket.ticketNumber === search
    );
    setSingleTicket(oneTicket);
    setQuery(true);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={submitHandeler} onChange={changeHandeler}>
        <input type="text" />
        <button type="submit"> Fetchdata</button>
      </form>
      {query && singleTicket.map((ticket) => <Card ticket={ticket} />)}
    </div>
  );
};

export default Fetchdata;
