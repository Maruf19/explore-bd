import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "../Slider/Carousel";
import Main from "../Main/Main";
import Services from "../Services/Services";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar/>
      <section className="home" id="home">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Let's Explore
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Our Beautiful Bangladesh
            </h1>
            <Link to="/Packages">
              <button className="btn flex"> Packages</button>
            </Link>
          </div>
          {/* <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search Your Destination: </label>
              <div className="input flex">
                <input type="text" placeholder="Enter Name Here.." />
                <GrLocation className="icon" />
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Select Your Date: </label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>
            <div className="searchOptions flex">
              <HiFilter className="icon " />
              <span> MORE FILTERS</span>
            </div>
          </div> */}
          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
      <Services></Services>
      <Main></Main>
      <Slider></Slider>
      <Feedback></Feedback>
      <Footer> </Footer>
    </div>
  );
};

export default Home;
