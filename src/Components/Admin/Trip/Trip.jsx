import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Trip = () => {
  // const imageHostKey = "0622eee91f18d4103329c8947242f849";

  const { register, handleSubmit, reset } = useForm();
  const [trip, setTrips] = useState([]);
  const handleAddTrip = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=0622eee91f18d4103329c8947242f849`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const addTrip = {
            title: data.title,
            location: data.location,
            img: imgData.data.url,
          };

          fetch("http://localhost:5000/admin/trips", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addTrip),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                alert("Trips placed successfully");
                reset();
              }
            })
            .catch((err) => console.error(err));
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/admin/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, [setTrips]);

  const handleDeleteTrip = (trip) => {
    trip.preventDefault();
    fetch(`http://localhost:5000/team/${trip._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert.success(`Product ${trip?.title} deleted successfully`);
        }
      });
  };

  return (
    <section className="w-full ml-16">
      <div className="w-3/5">
        <h2 className="mt-8 text-3xl font-bold text-primary">Add a Trip</h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card shadow-2xl p-8">
            <form onSubmit={handleSubmit(handleAddTrip)}>
              <div className="grid grid-cols-1 gap-6">
                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("image", {
                      required: "Image is required",
                    })}
                    type="file"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Upload a Image"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("title")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="Title"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("location", {
                      required: "Please provided trip location",
                    })}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="Trip location"
                  />
                </div>
              </div>

              <input
                className="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Trip"
              />
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="pr-12 my-16">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Trip Name
                        </th>

                        <th scope="col" className="p-4">
                          {/* <button onClick={handleDeletetrip(trip)} className="sr-only">Delete</button> */}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {trip?.map((trip) => (
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="p-4 w-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label for="checkbox-table-1" className="sr-only">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {trip?.name}
                          </td>

                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              href="/"
                              onClick={() => handleDeleteTrip(trip)}
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Update
                            </a>
                          </td>

                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              href="/"
                              onClick={() => handleDeleteTrip(trip)}
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trip;
