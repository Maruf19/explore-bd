import React, { useEffect, useState } from "react";
import "./schedule.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";

import { HiOutlineLocationMarker } from "react-icons/hi";

const About = () => {
  const [scheduleDesc, setScheduleDesc] = useState([]);
  const [schedule, setSchedule] = useState([]);

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/schedule")
      .then((res) => res.json())
      .then((data) => setScheduleDesc(data));
  }, [scheduleDesc]);

  useEffect(() => {
    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/admin/scheduleTrip")
      .then((res) => res.json())
      .then((data) => setSchedule(data));
  }, [schedule]);

  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <section className="about container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Trip Schedule
          </h3>

          {scheduleDesc?.map((desc) => (
            <h5
              data-aos="fade-up"
              data-aos-duration="4000"
              className="shortDesc"
              key={desc?._id}
            >
              {desc?.desc}
            </h5>
          ))}
        </div>

        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Upcoming Tour
          </h3>
        </div>
        <div className="secContent grid">
          {schedule.map(({ _id, img, title, location }) => {
            return (
              <div
                key={_id}
                data-aos="fade-right"
                className="singleDestination"
              >
                {/* Returning single id from the map array */}

                <div className="imageDiv">
                  <img src={img} alt={title} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {title}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="schedule-icon" />
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
