import React, { Component } from "react";
import { Cities } from "./Cities";
import "./Booking.css";

class Booking extends Component {
  state = {
    counter: 1,
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

  citiesList = Cities.map((city) => {
    return <option value={city}>{city}</option>;
  });
  render() {
    return (
      <section className="section-booking">
        <form>
          <div>
            <select className="departure-city">{this.citiesList}</select>
          </div>
          <div>
            <select className="destination-city">{this.citiesList}</select>
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
            <input className="booking-date" type="date"></input>
          </div>
          <button type="submit" className="primary-btn" id="btn-ticket">
            Order a Ticket
          </button>
        </form>
      </section>
    );
  }
}

export default Booking;
