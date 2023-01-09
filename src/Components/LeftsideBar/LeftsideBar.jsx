import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./LeftSidebar.css"

const LeftsideBar = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/admin/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='leftside'>
            <ul className='items'>
                <li>
                    {
                        categories?.map(category => <Link to={category?.to}
                            className='item'>{category?.name}</Link>)
                    }
                </li>
            </ul>
        </div>
    );
};

export default LeftsideBar;