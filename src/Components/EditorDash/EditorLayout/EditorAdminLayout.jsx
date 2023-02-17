import React from "react";
import { Outlet } from "react-router-dom";
import LeftsideBar from "../../LeftsideBar/LeftsideBar";
import "./EditorAdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin">
      <LeftsideBar className="leftsidebar"></LeftsideBar>
      <Outlet className="rightsidebar"></Outlet>
    </div>
  );
};

export default AdminLayout;
