import React, { useContext, useEffect, useState } from "react";
import "./book.css";
import img from "../../Assets/payment.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";

const Book = () => {
  const stripePromise = loadStripe('pk_test_51M7I5sJSKxqvc4gJS7CUAgUbJp5mVUKBs4bSQX9WBLC4LrJrtNWR6rk1TB0veqC3JqD9il0CkV57LRM3Qpg3ytdz00lQ1lvbLr');
  const { user, loading } = useContext(AuthContext);

  const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  };

  const {
    data: checkoutItems = [], isLoading, refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://explore-bd-server.vercel.app/cart?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  let total = 1;

  for (const singleItem of checkoutItems) {
    total = total + parseFloat(singleItem.travel.price);
  }


  let totalAmount = total;

  console.log(totalAmount)

  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      {/* <section className="book container section">
        <form>
          <div className="row">
            <div className="col">
              <h3 className="title">billing address</h3>

              <div className="inputBox">
                <span>Full name :</span>
                <input type="text" placeholder="john deo" required></input>
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input
                  type="email"
                  placeholder="example@example.com"
                  required
                ></input>
              </div>
              <div className="inputBox">
                <span>Contact Number :</span>
                <input
                  type="text"
                  placeholder="room - street - locality"
                  required
                ></input>
              </div>

              <div className="inputBox">
                <span>Number of Traveler:</span>
                <input
                  type="text"
                  placeholder="No. of Traveler are 5"
                  required
                ></input>
              </div>
              <div className="inputBox">
                <span>NID / Passport Number</span>
                <input type="text" placeholder="mumbai" required></input>
              </div>
              <div className="inputBox">
                <span>Address</span>
                <input type="text" placeholder="mumbai" required></input>
              </div>

              <div className="inputBox">
                <span>Country</span>
                <input type="text" placeholder="mumbai" required></input>
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span> **Package Name</span>
                  <select>
                    <option>Jaflong Explore 2023</option>
                    <option>Sajek</option>
                    <option>Rangamati</option>
                    <option>Bandarban</option>
                  </select>
                </div>

                <div className="inputBox">
                  <span>**Single/Couple</span>
                  <select>
                    <option>Single</option>
                    <option>Couple</option>
                    <option>Friends</option>
                  </select>
                </div>
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>No. of Single Room</span>
                  <input type="text" placeholder="india" required></input>
                </div>
                <div className="inputBox">
                  <span>No.of Couple Room</span>
                  <input type="text" placeholder="123 456" required></input>
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className="title">payment</h3>

              <div className="inputBox">
                <span>Cards accepted :</span>
                <img src={img} alt=""></img>
              </div>
              <div className="inputBox">
                <span>Name on card :</span>
                <input type="text" placeholder="mr. john deo"></input>
              </div>
              <div className="inputBox">
                <span>Credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"></input>
              </div>
              <div className="inputBox">
                <span>Exp month :</span>
                <input type="text" placeholder="january"></input>
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>Exp year :</span>
                  <input type="number" placeholder="2022"></input>
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234"></input>
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="proceed to checkout"
            className="submit-btn capitalize"
          ></input>
        </form>
      </section> */}
      <div className="pt-32">
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
          <CheckoutForm total={totalAmount} />
        </Elements>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Book;
