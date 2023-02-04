import React from "react";
import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// using array, the array named data
import img from "../../Assets/img.jpg";
// import img2 from "../../Assets/image4.jpg";
// import img3 from "../../Assets/team3.jpg";
import { useEffect } from "react";
import { useState } from "react";


const Slider = () => {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/feedback')
      .then(res => res.json())
      .then(data => setFeedback(data))
  }, [feedback])

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
          interval={3000}>

          {
            feedback?.map(f => <>
              <div>
                <img src={img} alt="" />
                <div className="myCarousel">
                  <h3>Shirley Fultz</h3>
                  <h4>Designer</h4>
                  <p>
                    {f.feedback}
                  </p>
                </div>
              </div>
            </>)
          }
          {/* 
          <div>
            <img src={img} alt="" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </div>
          </div>

          <div>
            <img src={img2} alt="" />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>

          <div>
            <img src={img3} alt="" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div> */}
        </Carousel>
      </section>
    </div>
  );
};

export default Slider;
