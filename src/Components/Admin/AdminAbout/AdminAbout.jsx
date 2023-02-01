import React from 'react';

const AdminAbout = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;

        const aboutData = {
            title,
            desc
        }
        fetch('https://explore-bd-server.vercel.app/admin/about', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(aboutData)
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
                Add Your about here
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title' />
                <textarea name="desc" placeholder='Description'></textarea>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default AdminAbout;