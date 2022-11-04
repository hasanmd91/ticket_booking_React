import React from "react";
import "./InfoDetail.css";

const InfoDetail = () => {
  return (
    <div className="client-info">
      <h3>Fill in your info</h3>
      <div className="inputs">
        <div>
          <label htmlFor="client-name">Full Name</label>
          <input type="text" name="client-name" id="client-name" />
        </div>
        <div>
          <label htmlFor="client-email">Email</label>
          <input type="email" name="client-email" id="client-email" />
        </div>
        <div>
          <label htmlFor="client-phone">Phone No.</label>
          <input type="number" name="client-phone" id="client-phone" />
        </div>
        <div>
          <label htmlFor="adult-count">Adult</label>
          <select name="adult-count" id="adult-count">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="student-count">Student</label>
          <select name="student-count" id="student-count">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="student-count">Kids u.7 yrs</label>
          <select name="student-count" id="student-count">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="elderly-count">Elderly</label>
          <select name="elderly-count" id="elderly-count">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
