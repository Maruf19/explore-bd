import React from 'react';
import { useForm } from 'react-hook-form';

const Trip = () => {
  // const imageHostKey = "0622eee91f18d4103329c8947242f849";

  const { register, handleSubmit, reset } = useForm();

  const handleAddTrip = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=0622eee91f18d4103329c8947242f849`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData)
        if (imgData.success) {

          const addTrip = {
            title: data.title,
            location: data.location,
            img: imgData.data.url
          }

          fetch('http://localhost:5000/admin/trips', {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(addTrip)
          })
            .then(res => res.json())
            .then(data => {
              if (data.acknowledged) {
                alert('Trips placed successfully')
                reset()
              }
            })
            .catch((err) => console.error(err));
        }
      })
  }

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
    </section>
  );
};

export default Trip;