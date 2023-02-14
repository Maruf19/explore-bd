import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Navbar from "../Navbar/Navbar";
const Cart = () => {
  const { user } = useContext(AuthContext);

  const {
    data: cartDatas = [],isLoading, refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  let total = 0;

  for (const singledata of cartDatas) {
    total = total + parseFloat(singledata.travel.price);
  }
 
  const handleRemove = (id) => {
    const proceed = window.confirm(
        "Are you sure, you want to remove this order?"
    );
    if (proceed) {
        fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
            alert("Removed Order Successfully");
            }
        });
    }
};

  return (
    <section>
      <Navbar></Navbar>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold pt-20">
          Book Your Packages
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartDatas?.map((cartData) => (
          
           <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
             <img
               src={cartData?.travel.img}
               alt="product-img"
               className="w-full rounded-lg sm:w-40"
             />
             <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
               <div className="mt-5 sm:mt-0">
                 <h2 className="text-lg font-bold text-gray-900">
                   {cartData?.travel.title}
                 </h2>
                 <p className="mt-1 text-xs text-gray-700">
                   {cartData?.travel.location}
                 </p>

                 <p className="mt-1 text-xs text-gray-700">
                 
                 </p>
               </div>
               <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                 <div className="flex items-center border-gray-100">
                   <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                     {" "}
                     -{" "}
                   </span>
                   <input
                     className="h-8 w-8 border bg-white text-center text-xs outline-none"
                     type="number"
                     value="2"
                     min="1"
                   />
                   <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                     {" "}
                     +{" "}
                   </span>
                 </div>
                 <div className="flex items-center space-x-4">
                   <p className="text-lg text-[#0073a8] font-bold">$ {cartData?.travel.price}</p>
                   <button onClick={() => handleRemove(cartData._id)}>X</button>
                 </div>
               </div>
             </div>
           </div>
           
            ))}

            {/* <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                alt="product-img"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">259.000 ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            {/* <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$ {total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div> */}
            <div className="flex justify-between">
              <p className="text-xl font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-xl font-bold">${total}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Link to="/Book" className="btn block mt-6 w-full rounded-md bg-[#0073a8] py-1.5 font-medium text-blue-50 hover:bg-blue-600 text-center">
              Check out
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
