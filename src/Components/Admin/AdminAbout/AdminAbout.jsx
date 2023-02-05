import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AdminAbout.css'

const AdminAbout = () => {
  const [aboutDesc, setAboutDesc] = useState([])
  const { register, handleSubmit, reset } = useForm();

  const handleAddDesc = data => {
    const desc = data.desc

    const aboutDesc = {
      desc
    }

    fetch('http://localhost:5000/admin/about', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(aboutDesc)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert('About description placed successfully')
          reset()
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetch('http://localhost:5000/admin/about')
      .then(res => res.json())
      .then(data => setAboutDesc(data))
  }, [aboutDesc])

  return (
    <section className="w-full ml-16">
      <div className="w-3/5">
        <h2 className="mt-8 text-3xl font-bold text-primary">Add a description in about</h2>
        <div className="my-6 flex justify-center items-center">
          <div className="w-full card shadow-2xl p-8">
            <form onSubmit={handleSubmit(handleAddDesc)}>
              <div className="grid grid-cols-1 gap-6">

                <div className="form-control w-full max-w-xs">
                  <textarea
                    {...register("desc", {
                      required: "Please provided description",
                    })}
                    type="text"
                    className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                    placeholder="About Description" cols={10}
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
    </section>
  );
};

export default AdminAbout;