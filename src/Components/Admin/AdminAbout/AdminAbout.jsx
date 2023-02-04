import React, { useEffect } from 'react';
import { useState } from 'react';
import './AdminAbout.css'

const AdminAbout = () => {
    const [aboutDesc, setAboutDesc] = useState([])

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const desc = form.desc.value;

        const aboutData = {
            desc
        }

        fetch('http://localhost:5000/admin/about', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(aboutData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('About description placed successfully')
                    event.target.reset()
                }
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        fetch('http://localhost:5000/admin/about')
            .then(res => res.json())
            .then(data => setAboutDesc(data))
    }, [aboutDesc])

    // const handleUpdate = event => {
    //     event.preventDefault()
    // }

    // const handleOnChange = event => {
    //     const desc = event.target.updateDesc;
    //     const value = event.target.value;
    //     const newDesc = {...aboutDesc}
    //     newDesc[desc] = value;
    //     setAboutDesc(newDesc)
    // }

    return (
        <div className='rightsidebar form-field'>
            <h3 className="title">
                Add Your about here
            </h3>
            <form onSubmit={handleSubmit}>
                <textarea name="desc" placeholder='Description' rows={10}></textarea>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default AdminAbout;