import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Booked = () => {
  const [booked, setBooked] = useState()

  useEffect(() => {
       fetch('http://localhost:5000/admin/booked')
      .then(res => res.json())
      .then(data => setBooked(data))
  }, [booked])

console.log(booked)
  return (
    <div>
      <Navbar></Navbar>
      <section className="packages container section">
        <div className="relative overflow-x-auto">
          <h1 className="flex justify-center font font-bold text-2xl pb-10">
            Who Join With Us
          </h1>

            
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-sm flex justify-center">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-sm  justify-center">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 text-sm  justify-center">
                  Package Name
                </th>
                <th scope="col" class="px-6 py-3 text-sm  justify-center">
                  Total Member
                </th>
                <th scope="col" class="px-6 py-3 text-sm  justify-center">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              
            {booked?.map(({ name, date, packages,number}) => {
              return(
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center"
                >
                  {name}
                </th>
                <td>{date}</td>
                <td className="px-4 py-4">{packages}</td>
                <td className="px-12 py-4">{number}</td>
                <td className="px-12 py-4">Accepted</td>
              </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Booked;
