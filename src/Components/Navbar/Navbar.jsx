import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const [navbar, setNavbar] = useState(false)
  const [color, changeColor] = useState('#111')

  useEffect(() => {
    if(window.location.pathname === '/') {
      changeColor("#fff")
    }
    else {
      changeColor("#111")
    }
  },[])

  //Function to toggle Navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Function to Remove Navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  const changeBg = () => {
    if(window.scrollY >= 20) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  return (
    <section className="navBarSection">
      <header className={navbar ? 'header active flex': 'header flex'}>
        <div className="logoDiv">
          <Link to="/" className="logo ">
            <h1>
              <MdTravelExplore style={{color: color}} className="icon" /> <Link to="/" style={{color: color}} className="main-logo">Travel </Link>
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex" >
            <NavLink className="navItem" exact to="/">
              <li style={{color: color}}>Home</li>
            </NavLink>

            <NavLink className="navItem" exact to="/About" >
              <li style={{color: color}}>About</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Packages">
              <li style={{color: color}}>Packages</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Schedule">
              <li style={{color: color}}>Schedule</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Snap">
              <li style={{color: color}}>Snap</li>
            </NavLink>

            <NavLink className="navItem" exact to="/Contact">
              <li style={{color: color}}>Contact</li>
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
