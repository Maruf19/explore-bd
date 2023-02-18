import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ total }) => {
  const { user } = useContext(AuthContext);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const navigate = useNavigate()

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // || !elements
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    // setPayment(paymentIntent)
    if (paymentIntent.status === "succeeded") {
      alert("Course purchased Successfully");
      // setTransactionId(paymentIntent.id);
      handleDeleteCartData();
      checkoutItems?.map((singleItem) => {
        handleAddData(
          singleItem?.travel._id,
          singleItem?.travel.img,
          singleItem?.travel.title,
          singleItem?.location,
          paymentIntent.id

        );
      });
    }
    setProcessing(false);
  };

  const {
    data: checkoutItems = [],
  } = useQuery({
    queryKey: ["checkoutItems"],
    queryFn: () =>
      fetch(`http://localhost:5000/cart?email=${user?.email}`)
        .then((res) => res.json()),
  });

  console.log(checkoutItems)

  const handleAddData = (title, img, location) => {
    const data = {
      title,
      img,
      location,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      postingDate: `${date}.${month}.${year}`,
    };

    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDeleteCartData = () => {
    fetch(`http://localhost:5000/cart/${user?.email}`, {
      method: "DELETE",
    });
  };

  console.log(user.email)

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="h-[500px] w-[500px] ml-[450px] mt-0 justify-center bg-green-400">
        <h2 className="mt-20 text-center font-bold text-xl text-white">Make Your Payment</h2>
        <div className="form-control w-full max-w-xs ml-24">
          <input
            name="names"
            type="text"
            className="mb-5 mt-20 px-8 py-1 rounded text-black  hover:text-white"
            placeholder="Card Holder Name"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs  ml-24">
          <input
            name="email"
            type="text"
            className="mb-5 px-8 py-1 rounded text-black  hover:text-white"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-control w-full max-w-xs  ml-24">
          <input
            name="passport"
            type="text"
            className="mb-5 px-8 py-1 rounded text-black  hover:text-white"
            placeholder="NID/Passport No"
            required
          />
        </div>
        <CardElement className="px-24 mt-6"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="px-24">
          <button
            className="btn btn-sm mt-5 bg-[#0073a8] px-8 py-1 rounded text-white hover:bg-[#0073a8] hover:text-white"
            type="submit"
            disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
