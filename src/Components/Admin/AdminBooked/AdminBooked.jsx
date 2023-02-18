import React, { useEffect } from "react";
import { useState } from "react";

const AdminBooked = () => {
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booked")
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [booked]);

  // const handleAddBooked = (data) => {
  //   const name = data.name;
  //   const date = data.date;
  //   const packages = data.packages;
  //   const number = data.number;

  //   const bookedData = {
  //     name,
  //     date,
  //     packages,
  //     number,
  //   };

  //   fetch("http://localhost:5000/booked", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(bookedData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         alert("Booked placed successfully");
  //         reset();
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

  const handleRemove = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/booked/${id}`, {
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
    <div class="relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-32 ml-36">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 text-center">
              Name
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              Date
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              Package
            </th>
            <th scope="col" class="px-6 py-3 text-center">
              Total Traveler
            </th>

            <th scope="col" class="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {booked?.map((booked) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {booked?.name}
              </th>
              <td class="px-6 py-4 text-center">{booked?.date}</td>
              <td class="px-6 py-4 text-center">{booked?.packages}</td>
              <td class="px-6 py-4 text-center">{booked?.number}</td>

              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <button
                    x-data="{ tooltip: 'Delete' }"
                    onClick={() => handleRemove(booked._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>

                  <a x-data="{ tooltip: 'Edite' }" href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBooked;
