import React, { useContext } from "react";
import "./book.css";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";

const Book = () => {
  const stripePromise = loadStripe('pk_test_51M7I5sJSKxqvc4gJS7CUAgUbJp5mVUKBs4bSQX9WBLC4LrJrtNWR6rk1TB0veqC3JqD9il0CkV57LRM3Qpg3ytdz00lQ1lvbLr');
  const { user } = useContext(AuthContext);

  const {
    data: checkoutItems = []
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  let total = 1;

  for (const singleItem of checkoutItems) {
    total = total + parseFloat(singleItem.travel.price);
  }


  let totalAmount = total;


  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <div className="pt-32">
        <Elements stripe={stripePromise} >
          <CheckoutForm total={totalAmount} user={user?.name} email={user?.email} checkoutItems={checkoutItems}/>
        </Elements>
      </div>
    </div>
  );
};

export default Book;
