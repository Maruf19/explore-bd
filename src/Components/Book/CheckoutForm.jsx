import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider';  

const CheckoutForm = ({ total }) => {
  const {user , loading } = useContext(AuthContext);
  
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId , setTransactionId] = useState('');
    const [processing , setProcessing] = useState(false);

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
  // console.log(total);


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
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email
          },
        },
      },
    );

        if(confirmError){
          setCardError(confirmError.message);
          return;
        }
        // setPayment(paymentIntent)
        if(paymentIntent.status === "succeeded"){
         alert("Course purchased Successfully");
          setTransactionId(paymentIntent.id);
          handleDeleteCartData();
           checkoutItems?.map(singleItem => {
            handleAddData(singleItem?.travel._id, singleItem?.travel.img, singleItem?.travel.title, singleItem?.location);
          });
        }
        setProcessing(false);
       
    }

      const {
        data: checkoutItems = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ['checkoutItems'],
        queryFn: () => fetch(`http://localhost:5000/cart?email=${user?.email}`)
        
        .then(res => res.json()),
      });

      console.log(checkoutItems)

      const handleAddData = (title, img, location) => {
        const data = {
          title,
          img,
          location,
          buyerEmail: user?.email
        }
      
          fetch("http://localhost:5000/purchased-course", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( data ),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            //   if (data.acknowledged) {
            //     checkoutItems?.map(singleItem => {
            //     // setSingleData(items)
            //     const {picture , title , tutor , lectures , hours, instructorEmail , price} = singleItem;
            //     handleAddData(singleItem?.picture, singleItem?.title, singleItem?.tutor, singleItem?.lectures, singleItem?.hours);
            //     handlePurchasedData(instructorEmail, picture, title, price)
            //     toast.success("Course purchased Successfully");
            //   })
              
            // }
            });
      }


      const handleDeleteCartData = () => {
        fetch(`http://localhost:5000/cart/${user?.email}`, {
        method: 'DELETE',
      });
      }

      

  return (
    <>
      <form onSubmit={handleSubmit} className='py-56'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-5 bg-[#0073a8] px-8 py-1 rounded text-white hover:bg-[#0073a8] hover:text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay <span className='font-bold'>{total}</span>
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
    </>
  );
};

export default CheckoutForm;