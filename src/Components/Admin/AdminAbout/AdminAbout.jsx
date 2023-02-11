import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./admin.css";

const AdminAbout = () => {
  const [aboutDesc, setAboutDesc] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const handleAddDesc = (data) => {
    const desc = data.desc;

    const aboutDesc = {
      desc,
    };

    fetch("http://localhost:5000/admin/about", {
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

  const handleDeleteTeam = (about) => {
    fetch(`http://localhost:5000/team/${about._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert.success(`${about?.name} deleted successfully`);
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/admin/about")
      .then((res) => res.json())
      .then((data) => setAboutDesc(data));
  }, [aboutDesc]);

  return (
    <section className="w-full ml-16 ">
      <div className="w-3/5 flex flex-col justify-center  ml-32">
        <h2 className="mt-8 text-3xl font-bold text-primary">
          Add a description in about
        </h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card shadow-2xl p-8 flex justify-center">
            <form onSubmit={handleSubmit(handleAddDesc)} className=" w-[500px]">
              <div className="grid grid-cols-1 gap-6">
                <div className="form-control w-[400px]">
                  <textarea
                    {...register("desc", {
                      required: "Please provided description",
                    })}
                    type="text"
                    className="input input-bordered w-full  p-2 rounded-lg border bg-gray-200 text-black "
                    placeholder="About Description"
                    cols={10}
                  />
                </div>
              </div>

              <input
                className="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Description"
              />
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default AdminAbout;
