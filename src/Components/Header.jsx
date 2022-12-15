import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header({ searchTicket }) {
  return (
    <header className="relative px-6 py-4 bg-sky-600 w-screen flex justify-between items-center z-999">
      <div className="logo">
        <h1 className="text-3xl text-white font-bold">
          <Link to="/">Travel Ticket Booking</Link>
        </h1>
      </div>
      <nav className="flex">
        <button className="p-3 mx-4" onClick={searchTicket}>
          <NavLink to="/search">Search a Ticket</NavLink>
        </button>
        <button className="p-3 mx-4">
          <NavLink to="/book">Book a Ticket</NavLink>
        </button>
      </nav>
    </header>
  );
}

export default Header;
