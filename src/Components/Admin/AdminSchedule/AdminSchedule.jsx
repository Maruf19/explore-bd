import React, {  } from 'react';

const AdminSchedule = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const desc = form.desc.value;

        const data = {
            desc
        }

        fetch('http://localhost:5000/admin/schedule', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Schedule description placed successfully')
                    event.target.reset()
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your Schedule description here
            </h3>
            <form onSubmit={handleSubmit}>
                <textarea name="desc" placeholder='Schedule Description' rows={10}></textarea>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default AdminSchedule;