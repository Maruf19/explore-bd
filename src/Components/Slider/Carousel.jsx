import React from "react";
import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img from "../../Assets/img.jpg";
import { useEffect } from "react";
import { useState } from "react";

const Slider = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, [feedback]);

  return (
    <div>
      <section className=" carousel container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Client's Opinion
          </h3>
        </div>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          {feedback?.map((f, Name) => (
            <>
              <div>
                <img src={img} alt="" />
                <div className="myCarousel">
                  <p>{f.feedback}</p>

                  <p>{Name}</p>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Slider;
