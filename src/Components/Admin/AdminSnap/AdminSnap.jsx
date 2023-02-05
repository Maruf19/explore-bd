import React, { } from 'react';
import { useForm } from 'react-hook-form';

const AdminSnap = () => {
    const { register, handleSubmit, reset } = useForm()

    const handleSnapDesc = (data) => {
        const desc = data.desc;

        const snapData = {
            desc
        }

        fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/snap', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(snapData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Snap description placed successfully')
                    reset()
                }
            })
            .catch((err) => console.error(err));
    }

    const handleAddSnap = data => {
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

                    const snapData = {
                        img: imgData.data.url,
                        title: data.title,
                        location: data.location,
                    }

                    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/snapTrip', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(snapData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                alert('Snap trip placed successfully')
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
                <h2 className="mt-8 text-3xl font-bold text-primary">Add Snap Description</h2>
                <div className="my-6 flex justify-center items-center">
                    <div className="w-full card shadow-2xl p-8">
                        <form onSubmit={handleSubmit(handleSnapDesc)}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="form-control w-full max-w-xs">
                                    <textarea
                                        {...register("desc")}
                                        type="text"
                                        className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                                        placeholder="Snap Description"
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
            <div className="w-3/5 my-20">
                <h2 className="mt-8 text-3xl font-bold text-primary">Add a snap trip</h2>
                <div className="my-6 flex justify-center items-center">
                    <div className="w-full card shadow-2xl p-8">
                        <form onSubmit={handleSubmit(handleAddSnap)}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        {...register("image", {
                                            required: "Image is required",
                                        })}
                                        type="file"
                                        className="input input-bordered w-full max-w-xs"
                                        placeholder="Upload a Snap Image"
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <input
                                        {...register("title")}
                                        type="text"
                                        className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                                        placeholder="Snap Title"
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <textarea
                                        {...register("location")}
                                        type="text"
                                        className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                                        placeholder="Snap Location"
                                    />
                                </div>
                            </div>

                            <input
                                className="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                                type="submit"
                                value="Add Snap"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminSnap;