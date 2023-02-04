import React, { } from 'react';
import { useForm } from 'react-hook-form';

const AdminSnap = () => {
    const { register, handleSubmit } = useForm()

    const handleSnapDesc = event => {
        event.preventDefault()
        const form = event.target;
        const desc = form.desc.value;

        const data = {
            desc
        }

        fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/snap', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Snap description placed successfully')
                    event.target.reset()
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
                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
    }

    return (
        <div className='form-field custom-flex'>
            <div>
                <h3 className="title">
                    Add Your Snap description here
                </h3>
                <form onSubmit={handleSnapDesc}>
                    <textarea name="desc" placeholder='Package Description' rows={10}></textarea>
                    <input type="submit" value="Submit" className='submit' />
                </form>
            </div>

            {/* Add package */}
            <div className='mt-5'>
                <h3 className="title">
                    Add Your Snap trip here
                </h3>
                <form onSubmit={handleSubmit(handleAddSnap)}>
                    <input type="file"    {...register("image", {
                        required: "Image is required"
                    })} />
                    <input type="text" placeholder='Title' {...register("title")} />
                    <input name="location" placeholder='Location' {...register("location")} />
                    <input type="submit" value="Add Trip" className='submit' />
                </form>
            </div>
        </div>
    );
};

export default AdminSnap;