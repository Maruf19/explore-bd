import React from 'react';

const Team = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const desc = form.desc.value;

        const teamData = {
            name,
            desc
        }
        fetch('https://explore-bd-server.vercel.app/admin/teams', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(teamData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Team member added successfully')
                    event.target.reset()
                }
            })
            .catch((err) => console.error(err));
    }
    return (
        <div className='form-field'>
            <h3 className="title">
                Add Your team here
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' />
                <textarea name="desc" placeholder='Description'></textarea>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default Team;