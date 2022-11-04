import React, { Component } from "react";
import { Cities } from "./Cities";
import InfoDetail from "./InfoDetail";
import "./Booking.css";

class Booking extends Component {
  state = {
    counter: 1,
    departure: "helsinki",
    destination: "",
    date: "",
    ticketNumber: "",
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

          <div className="input-people">
            <button id="item-reduce" onClick={this.removeOneHandler}>
              -
            </button>
            <p className="no-of-people">{this.state.counter}</p>
            <button id="item-add" onClick={this.addOneHandler}>
              +
            </button>
          </div>
          <div>
            <input
              className="booking-date"
              type="date"
              value={this.state.date}
              onChange={this.dateHandler}
              required
            ></input>
          </div>

          <button
            type="submit"
            className="primary-btn"
            id="btn-ticket"
            onClick={this.ticketNumberHandler}
          >
            Order Ticket
          </button>
          <button className="primary-btn">Proceed to Order</button>
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
        <InfoDetail />
      </section>
    );
  }
}

export default Booking;
