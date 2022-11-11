import React, { Component } from "react";
import { Cities } from "./Cities";
import TimeTable from "./TimeTable";
import "./Booking.css";

class Booking extends Component {
  state = {
    note: {
      counter: 1,
      departure: "helsinki",
      destination: "",
      date: "",
      today: "",
      ticketNumber: "",
    },
  };

  addOneHandler = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  removeOneHandler = (e) => {
    e.preventDefault();
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  departureCityHandler = (e) => {
    this.setState({ departure: e.target.value });
  };

  destinationCityHandler = (e) => {
    this.setState({ destination: e.target.value });
  };

  dateHandler = (e) => {
    this.setState({ date: e.target.value });
    console.log(e.target.value);
  };

  //Getting today's date.
  // gettingToday = () => {
  //   let current = new Date();
  //   let day = current.getDate();
  //   let month = current.getMonth() + 1;
  //   let year = current.getFullYear();
  //   // return `${year}-${month < 10?`0${month}`:`${month}`-${
  //   //   date<10?`0${date}` : `${date}`
  //   // }`;

  //   return `${year}-${month}-${day}`;
  // };

  gettingToday = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return this.setState({
      today: `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`,
    });
  };

  ticketNumberMaker = () => {
    let code = "";
    let chars = "0123456789";
    for (let i = 0; i < 10; i++) {
      code += chars.charAt(Math.random() * chars.length);
    }
    return code;
  };

  ticketNumberHandler = (e) => {
    e.preventDefault();
    this.setState({
      ticketNumber: this.ticketNumberMaker(),
    });
  };

  citiesList = Cities.map((city) => {
    return <option value={city}>{city}</option>;
  });
  render() {
    return (
      <section className="section-booking">
        <form>
          <div>
            <select
              className="departure-city"
              value={this.state.departure}
              onChange={this.departureCityHandler}
              required
            >
              {this.citiesList}
            </select>
          </div>
          <div>
            <select
              className="destination-city"
              value={this.state.destination}
              onChange={this.destinationCityHandler}
              required
            >
              {this.citiesList}
            </select>
          </div>

          <div>
            <input
              className="booking-date"
              type="date"
              min={this.state.today}
              value={this.state.date}
              onChange={this.dateHandler}
              required
            ></input>
          </div>

          {/* <button
            type="submit"
            className="primary-btn"
            id="btn-ticket"
            onClick={this.ticketNumberHandler}
          >
            Order Ticket
          </button> */}
          <button className="primary-btn" id="btn-proceed">
            Proceed to Order
          </button>
        </form>
        {/* <div className="ticket">
          <SampleTicket
            departureCity={this.state.departure}
            destinationCity={this.state.destination}
            date={this.state.date}
            people={this.state.counter}
            ticketNumber={this.state.ticketNumber}
          />
        </div> */}
        {/* <InfoDetail /> */}
        <TimeTable />
      </section>
    );
  }
}

export default Booking;
