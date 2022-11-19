import React, { Component } from "react";
import Booking from "./Components/Booking/Booking";
import Header from "./Components/Headers/Header";
import TimeTable from "./Components/Timetable/TimeTable";
import InfoDetail from "./Components/Info/InfoDetail";
import "./App.css";

class App extends Component {
  state = {
    counterAdult: 0,
    counterStudent: 0,
    counterElderly: 0,
    departure: "",
    destination: "",
    price: "",
    date: "",
    today: "",
    ticketNumber: "",
    cityselceted: false,
  };

  submithandeler = (e) => {
    e.preventDefault();
    this.setState({ cityselceted: true });
    console.log(this.state);
  };

  cityChangeHandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <Booking
          submitCity={this.submithandeler}
          cityChange={this.cityChangeHandeler}
        />
        {this.state.cityselceted && <TimeTable />}
      </div>
    );
  }
}

export default App;
