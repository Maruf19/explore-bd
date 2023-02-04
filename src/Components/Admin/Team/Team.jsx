import React from 'react';
import { useForm } from 'react-hook-form';

const Team = () => {
    const { register, handleSubmit } = useForm();

    const handleAddTeam = data => {
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
                        name: data.name,
                        desc: data.desc,
                        img: imgData.data.url
                    }

                    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/teams', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addTrip)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                alert('Team member placed successfully')
                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
    }
    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your team here
            </h3>
            <form onSubmit={handleSubmit(handleAddTeam)}>
                <input type="file"    {...register("image", {
                    required: "Image is required"
                })} />
                <input type="text" placeholder='Name' {...register("name")} />
                <input placeholder='Description' {...register("desc")} />
                <input type="submit" value="Add Trip" className='submit' />
            </form>
        </div>
    );
};

export default Team;