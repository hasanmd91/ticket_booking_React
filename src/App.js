import React, { Component } from "react";
import { Cities } from "./Components/Cities";
import Booking from "./Components/Booking";
import Header from "./Components/Header";
import TimeTable from "./Components/TimeTable";
import InfoDetail from "./Components/InfoDetail";
import "./App.css";

class App extends Component {
  state = {
    note: {
      counterAdult: 0,
      counterStudent: 0,
      counterElderly: 0,
      departure: "helsinki",
      destination: "",
      date: "",
      today: "",
      ticketNumber: "",
    },
  };

  addOneHandler = (e) => {
    e.preventDefault();
    this.setState({
      counterAdult: {
        ...this.state.note,
        counterAdult: this.state.counterAdult + 1,
      },
    });
  };

  removeOneHandler = (e) => {
    e.preventDefault();
    // if (this.state.counter > 0) {
    //   this.setState({
    //     counter: { ...this.state.note, counter: this.state.counter - 1 },
    //   });
    // }
  };

  changeHandler = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
    console.log({ ...this.state.note });
  };

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

  render() {
    const citiesList = Cities.map((city) => {
      return (
        <option value={city} key={city}>
          {city}
        </option>
      );
    });
    return (
      <div>
        <Header />
        <Booking
          citylist={citiesList}
          changeHandler={this.changeHandler}
          counterAdult={this.state.note.counterAdult}
          {...this.state.note}
        />
        <TimeTable />
        <InfoDetail
          removeOneHandler={this.removeOneHandler}
          addOneHandler={this.addOneHandler}
          {...this.state.note}
        />
      </div>
    );
  }
}

export default App;
