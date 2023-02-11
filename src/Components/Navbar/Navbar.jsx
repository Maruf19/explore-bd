import React, { useContext, useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { MdPersonPin } from "react-icons/md";
import { NavLink, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const [navbar, setNavbar] = useState(false);
  const [color, changeColor] = useState("#111");
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    if (window.location.pathname === "/") {
      changeColor("#fff");
    } else {
      changeColor("#111");
    }
  }, []);

  //Function to toggle Navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Function to Remove Navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  const changeBg = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out Successfully");
        Navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="navBarSection">
      <header className={navbar ? "header active flex" : "header flex"}>
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className="flex items-center gap-2">
              <MdTravelExplore className="icon" />{" "}
              <Link to="/" className="main-logo">
                ExploreBD{" "}
              </Link>
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

            <div>
              {" "}
              {user?.uid ? (
                <>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handleLogOut}>
                      Log Out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <button className="custom-btn">
                    <Link to="/register"> Register </Link>
                  </button>
                  <button className="custom-btn">
                    <Link to="/login"> Login </Link>
                  </button>{" "}
                </>
              )}
            </div>
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
