import React from 'react';
import "./AdminServices.css"

const AdminSerivces = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;

        const servicesData = {
            title,
            desc
        }

        fetch('http://localhost:5000/admin/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(servicesData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Services placed successfully')
                    event.target.reset()
                }
            })
            .catch((err) => console.error(err));
    }
    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your services here
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title' />
                {/* <input type="text" name='desc' placeholder='Description' /> */}
                <textarea name="desc" placeholder='Description'></textarea>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default AdminSerivces;