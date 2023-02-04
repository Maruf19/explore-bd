import React from 'react';
import { useForm } from 'react-hook-form';

const Trip = () => {
    // const imageHostKey = "0622eee91f18d4103329c8947242f849";

    const { register, handleSubmit } = useForm();

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
                        desc: data.location,
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
                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
    }

    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your trip here
            </h3>
            <form onSubmit={handleSubmit(handleAddTrip)}>
                <input type="file"    {...register("image", {
                    required: "Image is required"
                })} />
                <input type="text" placeholder='Title' {...register("title")} />
                <input name="location" placeholder='Location' {...register("location")} />
                <input type="submit" value="Add Trip" className='submit' />
            </form>
        </div>
    );
};

export default Trip;