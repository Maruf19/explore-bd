import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AdminAbout = () => {
  const [aboutDesc, setAboutDesc] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/about")
      .then((res) => res.json())
      .then((data) => setAboutDesc(data));
  }, [aboutDesc]);

  const handleAddDesc = (data) => {
    const desc = data.desc;

    const aboutDesc = {
      desc,
    };

    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/about", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aboutDesc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("About description placed successfully");
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
      fetch(`https://explore-bd-server-ahm-rubayed.vercel.app/aboutDesc/${id}`, {
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
    <div className="w-3/5 flex flex-col justify-center  ml-32">
      <h2 className="mt-8 text-3xl font-bold text-primary capitalize">
        Add a description in about
      </h2>
      <div className="my-6 flex justify-center items-center">
        <div className="w-full card flex justify-center">
          <form
            onSubmit={handleSubmit(handleAddDesc)}
            className="bg-transparent border shadow-2xl rounded ml-26 mt-0"
          >
            <div className="grid grid-cols-1 gap-6 ml-12">
              <div className="form-control w-[400px]  ">
                <textarea
                  {...register("desc", {
                    required: "Please provided description",
                  })}
                  type="text"
                  className="text-black input input-bordered border border-black w-full  p-2 ml-12 mt-10"
                  placeholder="About Description"
                  cols={10}
                  rows={10}
                />
              </div>
            </div>

            <input
              className="w-1/2 ml-36 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-0 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
              type="submit"
              value="Add Description"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;
