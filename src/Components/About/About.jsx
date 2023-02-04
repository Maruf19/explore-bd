import React, { useEffect, useState } from "react";
import "./about.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const About = () => {
  const [about, setAbout] = useState([])
  const [teams, setTeams] = useState([]);

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  useEffect(() => {
    fetch('http://localhost:5000/admin/about')
      .then(res => res.json())
      .then(data => setAbout(data))
  }, [about])

  useEffect(() => {
    fetch('http://localhost:5000/admin/teams')
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [teams])

  return (
    <div>
      <Navbar></Navbar>
      <section className="about container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Who We Are
          </h3>

          {
            about?.map(about => <h5 data-aos="fade-up" data-aos-duration="4000" className="shortDesc">
              {about?.desc}
            </h5>)
          }

        </div>

        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Our Executive Team
          </h3>
        </div>
        <div className="secContent grid">
          {/* using high orfer array mathod (map).
    To use a list of object in one array */}

          {teams?.map(({ _id, name, desc }) => {
            return (
              <div key={_id} data-aos="fade-up" className="singleDestination">
                {/* Returning single id from the map array */}

                <div className="imageDiv">
                  <img src="/" alt="" />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {name}</h4>
                  <span className="continent flex">
                    <span className="name">{desc}</span>
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
