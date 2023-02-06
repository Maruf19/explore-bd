import React, { useEffect, useState } from "react";
import "./book.css";

import img from "../../Assets/card_img.png";

import Navbar from "../Navbar/Navbar";
const Book = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="section container section ">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Book Your Sit Now
          </h3>
        </div>

        <div class="container">
          <div class="left">
            <form>
              Your Name
              <input
                type="text"
                name=""
                placeholder="Enter name"
                required
              ></input>
              Contact Number
              <input
                type="text"
                name=""
                placeholder="Enter Your Number"
                required
              ></input>
              Email
              <input
                type="text"
                name=""
                placeholder="Enter email"
                required
              ></input>
              Address
              <input
                type="text"
                name=""
                placeholder="Enter address"
                required
              ></input>
              NID/Passport Number
              <input
                type="text"
                name=""
                placeholder="NID/Passport Number"
                required
              ></input>
              No. Of Traveler
              <input
                type="text"
                name=""
                placeholder="No. Of Traveler"
                required
              ></input>
              <div id="zip">
                <label>
                  Package Name
                  <select>
                    <option>Choose State..</option>
                    <option>Jaflong</option>
                    <option>Sajek</option>
                    <option>Rangamati</option>
                    <option>Bandarban</option>
                  </select>
                </label>
                <label>
                  No of Child (Age:6 or below)
                  <input
                    type="number"
                    name=""
                    placeholder="No of Child"
                  ></input>
                </label>
              </div>
            </form>
          </div>

          <div class="right">
            <h3>PAYMENT</h3>
            <form>
              Accepted Card <br></br>
              <br></br>
              Credit card number
              <input
                type="text"
                name=""
                placeholder="Enter card number"
              ></input>
              Exp month
              <input type="text" name="" placeholder="Enter Month"></input>
              <div id="zip">
                <label>
                  Exp year
                  <select>
                    <option>Choose Year..</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </label>
                <label>
                  CVV
                  <input type="number" name="" placeholder="CVV"></input>
                </label>
              </div>
            </form>
            <input type="submit" name="" value="Proceed to Checkout"></input>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
