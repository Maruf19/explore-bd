import React from "react";
import { Outlet } from "react-router-dom";
import EditorLeftsideBar from "../../EditorLeftsideBar/EditorLeftsideBar";
import "./EditorLayout.css";

const EditorLayout = () => {
  return (
    <div className="admin">
      <EditorLeftsideBar className="leftsidebar"></EditorLeftsideBar>
      <Outlet className="rightsidebar"></Outlet>
    </div>
  );
};

export default EditorLayout;
