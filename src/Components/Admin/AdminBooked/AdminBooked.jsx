import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";


const AdminBooked = () => {
    const [booked, setBooked] = useState([]);
    const { reset } = useForm();

    useEffect(() => {
        fetch("http://localhost:5000/admin/booked")
          .then((res) => res.json())
          .then((data) => setBooked(data));
      }, [booked]);

      const handleAddBooked = (data) => {
        const name = data.name;
        const date = data.date;
        const packages = data.packages;
        const number = data.number;
    
        const bookedData = {
          name,
          date,
          packages,
          number
        };

        fetch("http://localhost:5000/admin/booked", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(bookedData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                alert("Booked placed successfully");
                reset();
              }
            })
            .catch((err) => console.error(err));
        };
      
        const handleRemove = (id) => {
          const proceed = window.confirm(
            "Are you sure, you want to remove this order?"
          );
          console.log(proceed);
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

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
        {booked?.map((booked) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {booked?.name}
                </th>
                <td class="px-6 py-4">
                   {booked?.date}
                </td>
                <td class="px-6 py-4">
                    {booked?.packages}
                </td>
                <td class="px-6 py-4">
                    {booked.number}
                </td>
            </tr>
        ))}
       
        </tbody>
    </table>
</div>

  )
}

export default AdminBooked