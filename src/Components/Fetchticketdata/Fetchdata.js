import React, { useState } from "react";
import { db } from "../../Backend/firbase_config";
import { collection, getDocs } from "firebase/firestore";

const colRef = collection(db, "ticketinfo");

const Fetchdata = () => {
  const [tickets, setTickets] = useState("");
  const [search, setSearch] = useState("");

  const getTicketInfo = () => {
    getDocs(colRef).then((snapshot) => {
      const datas = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredData = datas.filter((data) => data.email === search);
      setTickets(filteredData);
      console.log(tickets);
    });
  };

  const changeHandeler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    getTicketInfo();
    setTickets("");
  };

  return (
    <div className="">
      <form onSubmit={submitHandeler} onChange={changeHandeler}>
        <input type="text" />
        <button type="submit"> Fetchdata</button>
      </form>
      {}
    </div>
  );
};

export default Fetchdata;
