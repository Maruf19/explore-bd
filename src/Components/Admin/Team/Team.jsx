import React from "react";
import { useForm } from "react-hook-form";

const Team = () => {
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

          fetch(
            "http://localhost:5000/admin/teams",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(addTrip),
            }
          )
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
  return (
    <section className="w-full ml-16">
      <div className="w-3/5">
        <h2 className="mt-8 text-3xl font-bold text-primary">Add a Team</h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card shadow-2xl p-8">
            <form onSubmit={handleSubmit(handleAddTeam)}>
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
                    {...register("name")}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="Name"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <input
                    {...register("desc", {
                      required: "Please provided course title",
                    })}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="Team Description"
                  />
                </div>
              </div>

              <input
                className="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                type="submit"
                value="Add Team"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
