import React, { useEffect } from 'react';
import { useState } from 'react';

const AdminPackage = () => {
    const [aboutDesc, setAboutDesc] = useState([])

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const desc = form.desc.value;

        const aboutData = {
            desc
        }

        fetch('http://localhost:5000/admin/packages', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(aboutData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Package description placed successfully')
                    event.target.reset()
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your Package description here
            </h3>
            <form onSubmit={handleSubmit}>
                <textarea name="desc" placeholder='Package Description' rows={10}></textarea>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default AdminPackage;