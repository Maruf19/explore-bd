import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Booked = () => {
  const [booked, setBooked] = useState();

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/booked")
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [booked]);

  console.log(booked)

  return (
    <section>
      <Navbar></Navbar>
      <div className="packages container section">
        <div className="relative overflow-x-auto">
          <h1 className="flex justify-center  text-2xl ml-12 text-[#0073a8] font-bold pb-5">
            Who Join With Us
          </h1>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-sm text-center">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-sm  text-center">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-sm  text-center">
                  Package Name
                </th>
                <th scope="col" className="px-6 py-3 text-sm  text-center">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-sm  text-center">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {booked?.map(
                ({ buyerName, buyerEmail, postingDate, title, location }) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td
                        className=" text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center">
                        {buyerName}
                      </td>
                      <td className="px-12 py-4 text-center">{postingDate}</td>
                      <td className="px-12 py-4 text-center">{title}</td>
                      <td className="px-4 py-4 text-center">{buyerEmail}</td>
                      <td className="px-12 py-4 text-center">Accepted</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Booked;
