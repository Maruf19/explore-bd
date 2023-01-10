import React, { useEffect, useState } from "react";
import "./main.css";
// using array, the array named data
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/image2.jpg";
import img3 from "../../Assets/image3.jpg";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

// const Data = [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: "Bora Bora",
//     location: "New Zealand",
//     grade: "Cultural Relax",
//     fees: "$700",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 2,
//     imgSrc: img2,
//     destTitle: "Bora Bora",
//     location: "New Zealand",
//     grade: "Cultural Relax",
//     fees: "$700",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 3,
//     imgSrc: img3,
//     destTitle: "Bora Bora",
//     location: "New Zealand",
//     grade: "Cultural Relax",
//     fees: "$700",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ];

const Main = () => {
  const [trips, setTrips] = useState()
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/admin/trips')
    .then(res => res.json())
    .then(data => setTrips(data))
  },[trips])

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
