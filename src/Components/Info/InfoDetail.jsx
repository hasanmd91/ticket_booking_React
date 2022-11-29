import React from "react";
import Button from "../Button/Button";
import "./InfoDetail.css";

const InfoDetail = ({ infoSubmit, infoChange }) => {
  return (
    <div className="client-info">
      <h2>Enter contact info</h2>
      <form className="inputs" onSubmit={infoSubmit} onChange={infoChange}>
        <div>
          <label htmlFor="clientName">Full Name</label>
          <input
            type="text"
            name="name"
            id="clientName"
            placeholder="For ex. John Doe"
          />
        </div>
        <div>
          <label htmlFor="clientEmail">Email</label>
          <input
            type="tel"
            name="email"
            id="clientEmail"
            placeholder="For ex email@website.com"
          />
        </div>
        <div>
          <label htmlFor="clientPhone">Phone No.</label>
          <input type="tel" name="phone" id="clientPhone" />
        </div>
        <div>
          <label htmlFor="counterAdult">Adult</label>
          <input type="number" id="counterAdult" name="counterAdult" min="0" />
        </div>
        <div>
          <label htmlFor="counterStudent">Student & Kids</label>
          <input
            type="number"
            id="counterStudent"
            name="counterStudent"
            min="0"
          />
        </div>
        <div>
          <label htmlFor="counterElderly">Elderly</label>
          <input
            type="number"
            id="counterElderly"
            name="counterElderly"
            min="0"
          />
        </div>
        <Button type={"submit"} text={"PROCEED TO BOOKING "} />
      </form>
    </div>
  );
};

export default InfoDetail;
