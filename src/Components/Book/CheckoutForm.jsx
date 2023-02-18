import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ total, email }) => {
  const { user } = useContext(AuthContext);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const navigate = useNavigate();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  console.log(transactionId)

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/create-payment-intent", {
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

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
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
            name: user?.name,
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
      alert("Booking has Successful");
      // handleDeleteCartData()
      navigate("/booked")
      // setTransactionId(paymentIntent.id);
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

  const { data: checkoutItems = [] } = useQuery({
    queryKey: ["checkoutItems"],
    queryFn: () =>
      fetch(`https://explore-bd-server-ahm-rubayed.vercel.app/cart?email=${user?.email}`)
        .then((res) => res.json()),
  });

  const handleAddData = (id, img, title, location, transactionId) => {
    const data = {
      id,
      img,
      title,
      location,
      transactionId,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      postingDate: `${date}.${month}.${year}`
    };

    console.log(data)

    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/booked", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
  };

  // const handleDeleteCartData = () => {
  //   fetch(`https://explore-bd-server-ahm-rubayed.vercel.app/cart/${user?.email}`, {
  //   method: 'DELETE',
  // });
  // }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" w-[550px] ml-[450px] mt-0 justify-center bg-transparent border shadow-2xl rounded"
      >
        <h2 className="mt-20 text-center font-bold text-xl text-black">
          Make Your Payment
        </h2>
        <div className="form-control w-full max-w-xs ml-24">
          <input
            name="names"
            type="text"
            className="text-black input input-bordered border border-black mb-5 mt-20 px-8 py-1 rounded "
            placeholder="Card Holder Name"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs  ml-24">
          <input
            name="email"
            type="text"
            className="mb-5 px-8 py-1 rounded text-black input input-bordered border border-black"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-control w-full max-w-xs  ml-24">
          <input
            name="passport"
            type="text"
            className="mb-5 px-8 py-1 rounded text-black input input-bordered border border-black"
            placeholder="NID/Passport No"
            required
          />
        </div>
        <CardElement
          className="px-24 mt-6 "
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "black",
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
            className="btn btn-sm mb-5 mt-5 bg-[#0073a8] px-8 py-1 rounded text-white hover:bg-[#0073a8] hover:text-white"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
