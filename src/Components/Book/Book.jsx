import React from "react";
import "./book.css";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
const Book = () => {
  return (
    <div>
      <section className="booking container section">
        <div className="body">
          <div className="bf-head">
            <h1>Booking Form</h1>
            <p>|-Lets start To booking Now-|</p>
          </div>

          <form className="bf-body-box" action="">
            <div className="bf-row">
              <div className="bf-col-6">
                <p>Your Name</p>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Your Name"
                ></input>
              </div>

              <div className="bf-col-6">
                <p>Email Address</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                ></input>
              </div>
            </div>

            <div className="bf-row">
              <div className="bf-col-6">
                <p>Contact Number</p>
                <input type="text" name="contact" id="date"></input>
              </div>
              <div className="bf-col-6">
                <p>Number of Guest</p>
                <input type="number" name="contact" id="date"></input>
              </div>
            </div>

            <div className="bf-row">
              <div className="bf-col-6">
                <p>Select Date</p>
                <input type="date" name="date" id="date"></input>
              </div>
              <div className="bf-col-6">
                <p>NID / Passport Number</p>
                <input type="text" name="identification" id="date"></input>
              </div>
            </div>

            <div className="bf-row">
              <div className="bf-col-6">
                <p> Single or Couple or Friends</p>
                <select>
                  <option value="Single"> Single </option>
                  <option value="Couple"> Couple </option>
                  <option value="Couple"> Friends </option>
                </select>
              </div>

              <div className="bf-col-6">
                <p>No of Children (If Any)</p>
                <input type="number" name="identification" id="date"></input>
              </div>
            </div>

            <div className="bf-row">
              <div className="bf-col-12">
                <p>Payment Method</p>
                <div classNameName="social-icons">
                  <RiVisaLine classNameName="icon"></RiVisaLine>
                  <FaCcMastercard classNameName="icon"></FaCcMastercard>
                </div>
              </div>
            </div>

            <div className="bf-row">
              <div className="bf-col-3">
                <input type="submit" value="Submit"></input>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;
