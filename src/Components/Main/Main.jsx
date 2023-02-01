import React, { useEffect, useState } from "react";
import "./main.css";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const [trips, setTrips] = useState()

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch('https://explore-bd-server.vercel.app/admin/trips')
      .then(res => res.json())
      .then(data => setTrips(data))
  }, [trips])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
          Our Recent Trip
        </h3>
      </div>

      <div className="secContent grid">
        {/* using high orfer array mathod (map).
    To use a list of object in one array */}

        {trips?.map(
          ({ _id, title, location, imgSrc }) => {
            return (
              <div key={_id} data-aos="fade-up" className="singleDestination">
                {/* Returning single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={title} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {title}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
