import React, { Component } from "react";
import Booking from "./Components/Booking/Booking";
import Header from "./Components/Headers/Header";
import TimeTable from "./Components/Timetable/TimeTable";
import InfoDetail from "./Components/Info/InfoDetail";
import "./App.css";
import PaymentGateway from "./Components/Payment gateway/PaymentGateway";

// this big priceCalculetor function should be put in a new module
//so that we can import it and it doesnt have to be here

const priceCalculetor = (city1, city2) => {
  let price;
  if (city1 === city2) {
    console.log("please choose different city");
  } else if (
    (city1 === "Helsinki" && city2 === "Turku") ||
    (city1 === "Turku" && city2 === "Helsinki")
  ) {
    price = 31;
  } else if (
    (city1 === "Helsinki" && city2 === "Tampere") ||
    (city1 === "Tampere" && city2 === "Helsinki")
  ) {
    price = 22;
  } else if (
    (city1 === "Helsinki" && city2 === "Oulu") ||
    (city1 === "Oulu" && city2 === "Helsinki")
  ) {
    price = 50;
  } else if (
    (city1 === "Helsinki" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Helsinki")
  ) {
    price = 32;
  } else if (
    (city1 === "Turku" && city2 === "Tampere") ||
    (city1 === "Tampere" && city2 === "Turku")
  ) {
    price = 32;
  } else if (
    (city1 === "Turku" && city2 === "Oulu") ||
    (city1 === "Oulu" && city2 === "Turku")
  ) {
    price = 32;
  } else if (
    (city1 === "Turku" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Turku")
  ) {
    price = 32;
  } else if (
    (city1 === "Tampere" && city2 === "Oulu") ||
    (city1 === "Oulu" && city2 === "Tampere")
  ) {
    price = 32;
  } else if (
    (city1 === "Tampere" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Tampere")
  ) {
    price = 32;
  } else if (
    (city1 === "Oulu" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Oulu")
  ) {
    price = 33;
  }
  return price;
};

class App extends Component {
  state = {
    departure: "",
    destination: "",
    price: "",
    date: "",
    bustimes: ["9.00", "11.00", "12.00", "15.00"],
    cityselceted: false,
    proceed: false,
    infoDetails: false,
    Passengerinfo: {
      name: "",
      email: "",
      phone: "",
    },
  };

  submithandeler = (e) => {
    e.preventDefault();
    this.setState({
      cityselceted: true,
      price: priceCalculetor(this.state.departure, this.state.destination),
    });
    e.target.reset();
  };

  cityChangeHandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  proceedHandeler = () => {
    this.setState({ cityselceted: false, proceed: true });
  };

  infoChangeHandeler = (e) => {
    this.setState({
      Passengerinfo: {
        ...this.state.Passengerinfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  infoSubmitHandeler = (e) => {
    e.preventDefault();
    this.setState({ proceed: false, infoDetails: true });
  };

  render() {
    return (
      <div>
        <Header />
        <Booking
          submitCity={this.submithandeler}
          cityChange={this.cityChangeHandeler}
        />
        {this.state.cityselceted && (
          <TimeTable {...this.state} proceed={this.proceedHandeler} />
        )}

        {this.state.proceed && (
          <InfoDetail
            infoSubmit={this.infoSubmitHandeler}
            infoChange={this.infoChangeHandeler}
          />
        )}

        {this.state.infoDetails && <PaymentGateway />}
      </div>
    );
  }
}

export default App;
