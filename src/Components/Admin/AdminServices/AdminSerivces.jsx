import React from "react";
import { useForm } from "react-hook-form";
import "./AdminServices.css";

const AdminSerivces = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddService = (data) => {
    const title = data.title;
    const desc = data.desc;

    const servicesData = {
      title,
      desc,
    };

    fetch("http://localhost:5000/admin/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servicesData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Services placed successfully");
          reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="w-full ml-16">
      <div className="w-3/5">
        <h2 className="mt-8 text-3xl font-bold text-primary">Add Services</h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card shadow-2xl p-8">
            <form onSubmit={handleSubmit(handleAddService)}>
              <div className="grid grid-cols-1 gap-6">
                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("title")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg"
                    placeholder="Title"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("desc", {
                      required: "Please provided trip description",
                    })}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg shadow-lg"
                    placeholder="Service Description"
                  />
                </div>
              </div>

              <input
                className="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Serivce"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
    // <div className='form-field'>
    //     <h3 className="title">
    //         Add Your services here
    //     </h3>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" name='title' placeholder='Title' />
    //         <textarea name="desc" placeholder='Description'></textarea>
    //         <input type="submit" value="Submit" className='submit' />
    //     </form>
    // </div>
  );
};

export default AdminSerivces;
