import React, { useEffect } from "react";
import "./services.css";

//import icons
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

// const Data = [
//   {
//     id: 1,
//     destTitle: "Bora Bora",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 2,
//     destTitle: "Bora Bora",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 3,
//     destTitle: "Bora Bora",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ];

const Services = () => {
  const [services, setServices] = useState()
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch('https://explore-bd-server.vercel.app/admin/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <section className="services container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
          Our Services
        </h3>
      </div>

      <div className="secContent grid">
        {/* using high orfer array mathod (map).
    To use a list of object in one array */}

        {services?.map(({ _id, title, desc }) => {
          return (
            <div key={_id} data-aos="fade-up" className="singleDestination">
              {/* Returning single id from the map array */}

              <div className="cardInfo">
                <h4 className="destTitle"> {title}</h4>

                <div className="desc">
                  <p>{desc}</p>
                </div>

                <button className="btn flex">
                  Details <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
