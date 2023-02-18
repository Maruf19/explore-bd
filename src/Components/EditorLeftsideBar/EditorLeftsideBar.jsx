import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const LeftsideBar = () => {
  const [categories, setCategories] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/editor/editorCategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);

  return (
    <div className="flex flex-col p-3 bg-white shadow basis-1/5 h-[800px]">
      <div className="space-y-3">
        <div className="">
          <h2 className="text-xl font-bold text-center my-3 block">
            Admin Dashboard
          </h2>
          <h4 className="text-lg text-center">{user?.displayName}</h4>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {categories?.map((category) => (
              <li className="rounded-sm">
                <Link
                  to={category?.to}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img src={category?.icon} alt="" className="w-6 h-6" />
                  <span className="capitalize">{category?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
