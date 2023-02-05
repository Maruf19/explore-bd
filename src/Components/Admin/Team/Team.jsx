import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Team = () => {
  const [team, setTeams] = useState([])
  const { register, handleSubmit, reset } = useForm();

  const handleAddTeam = (data) => {
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
            name: data.name,
            desc: data.desc,
            img: imgData.data.url,
          };

          fetch("http://localhost:5000/admin/teams", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addTrip),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                alert("Team member placed successfully");
                reset();
              }
            })
            .catch((err) => console.error(err));
        }
      });
  };

  useEffect(() => {
    fetch('http://localhost:5000/admin/teams')
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [team])

  console.log(team)

  return (
    <section classNameName="w-full ml-16">
      <div classNameName="w-3/5">
        <h2 classNameName="mt-8 text-3xl font-bold text-primary">Add a Team</h2>
        <div classNameName="my-6 flex justify-center items-center">
          <div classNameName="w-full card shadow-2xl p-8">
            <form onSubmit={handleSubmit(handleAddTeam)}>
              <div classNameName="grid grid-cols-1 gap-6">
                <div classNameName="form-control w-full max-w-xs">
                  <input
                    {...register("image", {
                      required: "Image is required",
                    })}
                    type="file"
                    classNameName="input input-bordered w-full max-w-xs"
                    placeholder="Upload a Image"
                  />
                </div>

                <div classNameName="form-control w-full max-w-xs">
                  <input
                    {...register("name")}
                    type="text"
                    classNameName="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="Name"
                  />
                </div>

                <div classNameName="form-control w-full max-w-xs">
                  <input
                    {...register("desc", {
                      required: "Please provided course title",
                    })}
                    type="text"
                    classNameName="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="Team Description"
                  />
                </div>
              </div>

              <input
                classNameName="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Team"
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
                          Team Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700
                          uppercase dark:text-gray-400">
                          Price
                        </th>
                        <th scope="col" className="p-4">
                          <button className="sr-only">Delete</button>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {
                        team?.map(team => <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
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
                            {team?.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            Desktop PC
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $1999
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              href="/"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>)
                      }
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

export default Team;
