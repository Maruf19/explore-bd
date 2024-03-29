import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"

const AdminPackage = () => {
  const [packageDesc, setPackageDesc] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/packages")
      .then((res) => res.json())
      .then((data) => setPackageDesc(data));
  }, [packageDesc]);

  const handleAddDesc = (data) => {
    const desc = data.desc;

    const packageDesc = {
      desc,
    };

    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(packageDesc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Package description placed successfully");
          reset();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleRemove = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove this order?"
    );
    if (proceed) {
      fetch(`https://explore-bd-server-ahm-rubayed.vercel.app/packageDesc/${id}`, {
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
    <section className="w-full ml-16 ">
      <div className="w-3/5 flex flex-col justify-center  ml-32">
        <h2 className="mt-8 text-3xl font-bold text-primary capitalize">
          Add a description in Package
        </h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card flex justify-center">
            <form
              onSubmit={handleSubmit(handleAddDesc)}
              className="bg-transparent border shadow-2xl rounded ml-26 mt-0"
            >
              <div className="grid grid-cols-1 gap-6 ml-16">
                <div className="form-control w-[400px]  ">
                  <textarea
                    {...register("desc", {
                      required: "Please provided description",
                    })}
                    type="text"
                    className="text-black input input-bordered border border-black w-full  p-2 ml-8 mt-10"
                    placeholder="Package Description"
                    cols={10}
                    rows={10}
                  />
                </div>
              </div>

              <input
                className="w-1/2 ml-36 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Description"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50"></thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {packageDesc?.map((desc) => (
              <tr className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700 ">
                      {desc?.desc}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button
                      x-data="{ tooltip: 'Delete' }"
                      onClick={() => handleRemove(desc._id)}
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

export default AdminPackage;
