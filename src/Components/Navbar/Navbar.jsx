import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //Function to toggle Navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Function to Remove Navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo ">
            <h1>
              <MdTravelExplore className="icon" /> <Link to="/">Travel </Link>
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <NavLink className="navItem" exact to="/">
              <li>Home</li>
            </NavLink>

            <NavLink className="navItem" exact to="/About">
              <li>About</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Packages">
              <li>Packages</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Schedule">
              <li>Schedule</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Snap">
              <li>Snap</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Contact">
              <li>Contact</li>
            </NavLink>

            <button className="btn">
              <Link to="/Book">Book Now</Link>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            {" "}
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          {" "}
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
