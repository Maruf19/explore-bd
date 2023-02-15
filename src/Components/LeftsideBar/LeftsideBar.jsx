import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideBar = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/admin/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categories])

    return (
        // <div className=''>
        //     <div className="drawer drawer-mobile">
        //         {/* <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> */}
        //         {/* <div className="drawer-content px-5 md:px-14 my-16">
        //         <Outlet />
        //     </div> */}
        //         <div className="drawer-side h-auto border-2">

        //             <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        //             {/* Logo here in this div */}
        //             <div className="">
        //                 <Link to="#" title="home">
        //                     <img className='w-32' src="" alt="" srcset="" />
        //                 </Link>
        //                 <h2 className="text-2xl mt-8 font-bold text-center">Admin Dashboard</h2>
        //             </div>

        //             <ul className="menu p-4 w-80 lg:bg-opacity-0 text-white mt-6">
        //                 <div>
        //                     <ul className="space-y-2 tracking-wide text-white">
        //                         <li className="transition duration-1000 linear">
        //                             {
        //                                 categories?.map(category => <Link to={category?.to} aria-label="dashboard" className="relative px-4
        //                              py-3 block space-x-4 rounded-xl border-2 my-6 capitalize font-bold hover:bg-[#0073a8] hover:text-white shadow-md">
        //                                     <span className="-mr-1 font-medium block">{category?.name}</span>
        //                                 </Link>)
        //                             }
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </ul>

        //             <div className="space-y-2 pt-2">
        //                 <a href="#" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">

        //                 </a>

        //             </div>


        //         </div>

        //     </div>

        // </div>
        <div className="flex flex-col p-3 bg-white shadow basis-1/5 h-screen">
            <div className="space-y-3">
                <div className="">
                    <h2 className="text-xl font-bold text-center my-3 block">Admin Dashboard</h2>
                    <h4 className="text-lg text-center">Rony</h4>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {
                            categories?.map(category => <li className="rounded-sm">
                                <Link to={category?.to}
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src={category?.icon} alt="" className="w-6 h-6" />
                                    <span className="capitalize">{category?.name}</span>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftsideBar;