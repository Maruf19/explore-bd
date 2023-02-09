import React, { useEffect, useState } from "react";
import "./book.css";
import img from "../../Assets/payment.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
const Book = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <section class="book container section">
        <form>
          <div class="row">
            <div class="col">
              <h3 class="title">billing address</h3>

              <div class="inputBox">
                <span>Full name :</span>
                <input type="text" placeholder="john deo" required></input>
              </div>
              <div class="inputBox">
                <span>Email :</span>
                <input
                  type="email"
                  placeholder="example@example.com"
                  required
                ></input>
              </div>
              <div class="inputBox">
                <span>Contact Number :</span>
                <input
                  type="text"
                  placeholder="room - street - locality"
                  required
                ></input>
              </div>

              <div class="inputBox">
                <span>Number of Traveler:</span>
                <input
                  type="text"
                  placeholder="No. of Traveler are 5"
                  required
                ></input>
              </div>
              <div class="inputBox">
                <span>NID / Passport Number</span>
                <input type="text" placeholder="mumbai" required></input>
              </div>
              <div class="inputBox">
                <span>Address</span>
                <input type="text" placeholder="mumbai" required></input>
              </div>

              <div class="inputBox">
                <span>Country</span>
                <input type="text" placeholder="mumbai" required></input>
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span> **Package Name</span>
                  <select>
                    <option>Jaflong Explore 2023</option>
                    <option>Sajek</option>
                    <option>Rangamati</option>
                    <option>Bandarban</option>
                  </select>
                </div>

                <div class="inputBox">
                  <span>**Single/Couple</span>
                  <select>
                    <option>Single</option>
                    <option>Couple</option>
                    <option>Friends</option>
                  </select>
                </div>
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>No. of Single Room</span>
                  <input type="text" placeholder="india" required></input>
                </div>
                <div class="inputBox">
                  <span>No.of Couple Room</span>
                  <input type="text" placeholder="123 456" required></input>
                </div>
              </div>
            </div>

            <div class="col">
              <h3 class="title">payment</h3>

              <div class="inputBox">
                <span>Cards accepted :</span>
                <img src={img} alt=""></img>
              </div>
              <div class="inputBox">
                <span>Name on card :</span>
                <input type="text" placeholder="mr. john deo"></input>
              </div>
              <div class="inputBox">
                <span>Credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"></input>
              </div>
              <div class="inputBox">
                <span>Exp month :</span>
                <input type="text" placeholder="january"></input>
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>Exp year :</span>
                  <input type="number" placeholder="2022"></input>
                </div>
                <div class="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234"></input>
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="proceed to checkout"
            class="submit-btn"
          ></input>
        </form>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Book;
