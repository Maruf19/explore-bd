import React, { useEffect } from "react";
import "./services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import ScrollToTop from "../ScrollToTop";

const Services = () => {
  const [services, setServices] = useState()

  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch('https://explore-bd-server-ahm-rubayed.vercel.app/admin/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [services])

  return (
    <div>
       <ScrollToTop />
    
    <section className="services container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
          Our Services
        </h3>
      </div>

      <div className="secContent grid">

        {services?.map(({ _id, title, desc }) => {
          return (
            <div key={_id} data-aos="fade-up" className="singleDestination">

              <div className="cardInfo">
                <h4 className="destTitle flex justify-center  mb-5"> {title}</h4>

                <div className="desc">
                  <p>{desc}</p>
                </div>

               
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Services;
