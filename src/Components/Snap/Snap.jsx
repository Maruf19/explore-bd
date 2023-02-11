import React, { useEffect, useState } from "react";
import "./snap.css";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";

const Snap = () => {
  const [snapDesc, setSnapDesc] = useState([]);
  const [snap, setSnap] = useState([])

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/snap')
      .then(res => res.json())
      .then(data => setSnapDesc(data))
  }, [snapDesc])

  useEffect(() => {
    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/snapTrip')
      .then(res => res.json())
      .then(data => setSnap(data))
  }, [snap])

  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <section className="snap container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Snap from Trip
          </h3>

          {
            snapDesc?.map(desc => <h5 data-aos="fade-up" data-aos-duration="4000" className="shortDesc" key={desc?._id}>
              {desc?.desc}
            </h5>)
          }
        </div>

        <div className="secContent grid">

          {snap.map(({ _id, img, title, location }) => {
            return (
              <div key={_id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={img} alt={title} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {title}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
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

export default Snap;
