import React, { Component } from "react";
import Booking from "./Components/Booking/Booking";
import Header from "./Components/Headers/Header";
import TimeTable from "./Components/Timetable/TimeTable";
import InfoDetail from "./Components/Info/InfoDetail";
import "./App.css";
import PaymentGateway from "./Components/Payment gateway/PaymentGateway";
import SampleTicket from "./Components/Sample Ticket/SampleTicket";
import { v4 as uuid } from "uuid";
import { db } from "./Backend/firbase_config";
import { collection, addDoc } from "firebase/firestore";
import Fetchdata from "./Components/Fetchticketdata/Fetchdata";

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

const ticketCollectionRef = collection(db, "ticketinfo");

const createTicket = async (data) => {
  await addDoc(ticketCollectionRef, data);
};

class App extends Component {
  state = {
    passengerinfo: {
      name: "",
      email: "",
      phone: "",
      departure: "",
      destination: "",
      price: "",
      date: "",
      ticketNumber: "",
      selectedbustime: "",
    },

    bustimes: ["9.00", "11.00", "12.00", "15.00", "16.00", "19.00 "],
    cityselceted: false,
    proceed: false,
    infoDetails: false,
    cardGenerate: false,

    cardinfo: {
      cardNum: "",
      holderName: "",
      cardExpiry: "",
      cvc: "",
    },
  };

  submithandeler = (e) => {
    e.preventDefault();
    this.setState({
      cityselceted: true,
      passengerinfo: {
        ...this.state.passengerinfo,
        price: priceCalculetor(
          this.state.passengerinfo.departure,
          this.state.passengerinfo.destination
        ),
      },
    });
    e.target.reset();
  };

  cityChangeHandeler = (e) => {
    this.setState({
      passengerinfo: {
        ...this.state.passengerinfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  proceedHandeler = (id) => {
    this.setState({
      cityselceted: false,
      proceed: true,
      passengerinfo: {
        ...this.state.passengerinfo,
        selectedbustime: this.state.bustimes[id],
      },
    });
  };

  infoChangeHandeler = (e) => {
    this.setState({
      passengerinfo: {
        ...this.state.passengerinfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  infoSubmitHandeler = (e) => {
    e.preventDefault();
    this.setState({ proceed: false, infoDetails: true });
  };

  cardinfochangeHandeler = (e) => {
    this.setState({
      cardinfo: { ...this.state.cardinfo, [e.target.name]: e.target.value },
    });
  };

  cardinfoSubmitHandeler = (e) => {
    e.preventDefault();
    this.setState(
      {
        infoDetails: false,
        cardGenerate: true,
        passengerinfo: {
          ...this.state.passengerinfo,
          ticketNumber: uuid().slice(0, 13).toString(),
        },
      },
      () => {
        createTicket(this.state.passengerinfo);
      }
    );
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
          <TimeTable
            {...this.state}
            proceed={this.proceedHandeler.bind(this)}
          />
        )}

        {this.state.proceed && (
          <InfoDetail
            infoSubmit={this.infoSubmitHandeler}
            infoChange={this.infoChangeHandeler}
          />
        )}

        {this.state.infoDetails && (
          <PaymentGateway
            cardinfoSubmit={this.cardinfoSubmitHandeler}
            cardinfochange={this.cardinfochangeHandeler}
          />
        )}
        {this.state.cardGenerate && (
          <SampleTicket {...this.state.passengerinfo} />
        )}
        <Fetchdata />
      </div>
    );
  }
}

export default App;
