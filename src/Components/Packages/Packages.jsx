import React, { useEffect, useState } from "react";
import "./packages.css";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Packages = () => {
  const [packageDesc, setPackageDesc] = useState([])
  const [packages, setpackages] = useState([])

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/packages')
      .then(res => res.json())
      .then(data => setPackageDesc(data))
  }, [packageDesc])

  useEffect(() => {
    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/tripPackage')
      .then(res => res.json())
      .then(data => setpackages(data))
  }, [packages])

  return (
    <div>
      <Navbar></Navbar>
      <section className="packages container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Our Packages
          </h3>

          {
            packageDesc?.map(desc => <h5 data-aos="fade-up" data-aos-duration="4000" className="shortDesc" key={desc?._id}>
              {desc?.desc}
            </h5>)
          }
        </div>

        <div className="secContent grid">

          {packages.map(
            ({ _id, img, title, location, grade, price, packageDesc }) => {
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

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {" "}
                          {grade}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>$ {price}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{packageDesc}</p>
                    </div>
                    <div className="flex gap-1">
                      <Link to="/schedule" className="btn flex">
                        Details <HiOutlineClipboardCheck className="icon" />
                      </Link>
                      <Link to="/feedback" className="btn flex">
                        Reviews <HiOutlineClipboardCheck className="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Packages;
