import React from 'react';

const Trip = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const location = form.location.value;

        const tripsData = {
            title,
            location
        }

        fetch('http://localhost:5000/admin/trips', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(tripsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Trips placed successfully')
                    event.target.reset()
                }
            })
            .catch((err) => console.error(err));
    }
    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your trip here
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" />
                <input type="text" name='title' placeholder='Title' />
                <input name="location" placeholder='Location' />
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default Trip;