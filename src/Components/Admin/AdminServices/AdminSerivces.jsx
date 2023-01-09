import React from 'react';
import "./AdminServices.css"

const AdminSerivces = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;

        const servicesData ={
            title,
            desc
        }

        // ===========
        // GET THE DATAS IN SERVICES SECTION AND START WORK FROM HERE
        //  ================

        fetch('http://localhost:5000/admin/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(servicesData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                alert('Services placed successfully')
                event.target.reset()
            }
        })
        .catch((err) => console.error(err));
    }
    return (
        <div className='admin-services'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Service title' />
                <input type="text" name='desc' placeholder='service description' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AdminSerivces;