import React, { useEffect } from "react";
import "./about.css";
// using array, the array named data
import img from "../../Assets/team1.jpg";
import img2 from "../../Assets/team2.jpg";
import img3 from "../../Assets/team3.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Bora",
    location: "New Zealand",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "New Zealand",
  },
  // {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: "Bora Bora",
  //   location: "New Zealand",
  // },

  // {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: "Bora Bora",
  //   location: "New Zealand",
  // },

  // {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: "Bora Bora",
  //   location: "New Zealand",
  // },

  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: "Bora Bora",
  //   location: "New Zealand",
  // },

  // {
  //   id: 8,
  //   imgSrc: img8,
  //   destTitle: "Bora Bora",
  //   location: "New Zealand",
  // },

  // {
  //   id: 9,
  //   imgSrc: img9,
  //   destTitle: "Bora Bora",
  // },
];

const About = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <section className="about container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Who We Are
          </h3>

          <h5 data-aos="fade-up" data-aos-duration="4000" className="shortDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </h5>
        </div>

        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Our Executive Team
          </h3>
        </div>
        <div className="secContent grid">
          {/* using high orfer array mathod (map).
    To use a list of object in one array */}

          {Data.map(({ id, imgSrc, destTitle, location }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* Returning single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {destTitle}</h4>
                  <span className="continent flex">
                    <span className="name">{location}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
