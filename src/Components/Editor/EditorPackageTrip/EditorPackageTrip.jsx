import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const PackageTrip = () => {
  const [packages, setPackages] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const handleAddPackage = (data) => {
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
        if (imgData.success) {
          const addPackage = {
            img: imgData.data.url,
            title: data.title,
            location: data.location,
            price: data.price,
            packageDesc: data.packageDesc,
          };

          fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/tripPackage", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addPackage),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                alert("Package placed successfully");
                reset();
              }
            })
            .catch((err) => console.error(err));
        }
      });
  };

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/tripPackage")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages]);


  const handleRemove = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove this order?"
    );
    if (proceed) {
      fetch(`https://explore-bd-server-ahm-rubayed.vercel.app/tripPackage/${id}`, {
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
    <section className="w-full ml-16">
      <div className="w-3/5 my-20 flex flex-col justify-center  ml-32">
        <h2 className="mt-8 text-3xl font-bold text-primary capitalize">
          Add package details
        </h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card p-8 flex justify-center">
            <form
              onSubmit={handleSubmit(handleAddPackage)}
              className="bg-slate-500  h-[550px]"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("image", {
                      required: "Image is required",
                    })}
                    type="file"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg ml-28 mt-10"
                    placeholder="Upload a Snap Image"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("title")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg ml-28"
                    placeholder="Snap Title"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("location")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg ml-28"
                    placeholder="Snap Location"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("price")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg ml-28"
                    placeholder="Per Person Package"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("packageDesc")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg ml-28"
                    placeholder="Description"
                  />
                </div>
              </div>

              <input
                className="w-1/2 ml-36 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Snap"
              />
            </form>
          </div>
        </div>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50"></thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {packages?.map((packages) => (
              <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src={packages?.img}
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                </th>

                <td class="px-6 py-4">{packages?.title}</td>
                <td class="px-6 py-4">{packages?.location}</td>
                <td class="px-6 py-4">{packages?.price}</td>
                <td class="px-6 py-4">{packages?.packageDesc}</td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button
                      x-data="{ tooltip: 'Delete' }"
                      onClick={() => handleRemove(packages._id)}
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
    </section>
  );
};

export default PackageTrip;
