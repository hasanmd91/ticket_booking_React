import React, { Component } from "react";
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
  render() {
    return (
      <section className="section-booking">
        <form>
          <div>
            <select className="departure-city">
              <option>Pick a Departure..</option>
              <option>Hämeenlinna</option>
              <option>Helsinki</option>
              <option>Joensuu</option>
              <option>Jyväskylä</option>
              <option>Kouvola</option>
              <option>Kuopio</option>
              <option>Lahti</option>
              <option>Lappeenranta</option>
              <option>Oulu</option>
              <option>Pori</option>
              <option>Rovaniemi</option>
              <option>Seinäjoki</option>
              <option>Tampere</option>
              <option>Turku</option>
              <option>Vaasa</option>
            </select>
          </div>
          <div>
            <select className="destination-city">
              <option>Pick a Destination..</option>
              <option>Hämeenlinna</option>
              <option>Helsinki</option>
              <option>Joensuu</option>
              <option>Jyväskylä</option>
              <option>Kouvola</option>
              <option>Kuopio</option>
              <option>Lahti</option>
              <option>Lappeenranta</option>
              <option>Oulu</option>
              <option>Pori</option>
              <option>Rovaniemi</option>
              <option>Seinäjoki</option>
              <option>Tampere</option>
              <option>Turku</option>
              <option>Vaasa</option>
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
