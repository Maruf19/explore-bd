import React, { useEffect, useState } from "react";
import "./main.css";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/admin/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, [trips]);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
          Our Recent Trip
        </h3>
      </div>

      <div className="secContent grid">
        {trips?.map(({ _id, title, location, img }) => {
          return (
            <div key={_id} data-aos="fade-up" className="singleDestination">
              {/* Returning single id from the map array */}

              <div className="imageDiv">
                <img src={img} alt={title} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle"> {title}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <Link to="/schedule" className="custom-btn flex">
                  Upcoming Trip <HiOutlineClipboardCheck className="icon" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
