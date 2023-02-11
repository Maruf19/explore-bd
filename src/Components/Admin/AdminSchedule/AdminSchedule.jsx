import React, { } from 'react';
import { useForm } from 'react-hook-form';

const AdminSchedule = () => {
    const { register, handleSubmit, reset } = useForm()

    const handleScheduleDesc = (data) => {
        const desc = data.desc;

        console.log(desc)

        const scheduleData = {
            desc
        }

        fetch('http://localhost:5000/admin/schedule', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(scheduleData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Schedule description placed successfully')
                    reset()
                }
            })
            .catch((err) => console.error(err));
    }

    const handleAddSchedule = data => {
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

                    const addPackage = {
                        img: imgData.data.url,
                        title: data.title,
                        location: data.location,
                    }

                    fetch('http://localhost:5000/admin/scheduleTrip', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addPackage)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                alert('Schedule trip placed successfully')
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
                <h2 className="mt-8 text-3xl font-bold text-primary">Add Schedule Description</h2>
                <div className="my-6 flex justify-center items-center">
                    <div className="w-full card shadow-2xl p-8">
                        <form onSubmit={handleSubmit(handleScheduleDesc)}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="form-control w-full max-w-xs">
                                    <textarea
                                        {...register("desc")}
                                        type="text"
                                        className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                                        placeholder="Schedule Description"
                                    />
                                </div>
                            </div>

                            <input
                                className="w-1/2 cursor-pointer border-2 hover:shadow-lg transition-all duration-300 ease-in-out hover:text-black text-white mt-6 text-center bg-[#0073a8] hover:bg-[transparent]  p-2 rounded-full"
                                type="submit"
                                value="Add Schedule"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-3/5 my-20">
                <h2 className="mt-8 text-3xl font-bold text-primary">Add a schedule trip</h2>
                <div className="my-6 flex justify-center items-center">
                    <div className="w-full card shadow-2xl p-8">
                        <form onSubmit={handleSubmit(handleAddSchedule)}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        {...register("image", {
                                            required: "Image is required",
                                        })}
                                        type="file"
                                        className="input input-bordered w-full max-w-xs"
                                        placeholder="Upload a Schedule Image"
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <input
                                        {...register("title")}
                                        type="text"
                                        className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                                        placeholder="Schedule Title"
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <textarea
                                        {...register("location")}
                                        type="text"
                                        className="input input-bordered w-full max-w-xs p-2 rounded-lg"
                                        placeholder="Schedule Location"
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
        // <div className='form-field custom-flex'>
        //     <div>
        //         <h3 className="title">
        //             Add Your Schedule description here
        //         </h3>
        //         <form onSubmit={handleScheduleDesc}>
        //             <textarea name="desc" placeholder='Package Description' rows={10}></textarea>
        //             <input type="submit" value="Submit" className='submit' />
        //         </form>
        //     </div>

        //     {/* Add package */}
        //     <div className='mt-5'>
        //         <h3 className="title">
        //             Add Your Schedule trip here
        //         </h3>
        //         <form onSubmit={handleSubmit(handleAddSchedule)}>
        //             <input type="file"    {...register("image", {
        //                 required: "Image is required"
        //             })} />
        //             <input type="text" placeholder='Title' {...register("title")} />
        //             <input name="location" placeholder='Location' {...register("location")} />
        //             <input type="submit" value="Add Trip" className='submit' />
        //         </form>
        //     </div>
        // </div>
    );
};

export default AdminSchedule;