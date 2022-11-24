import React, { useEffect } from "react";
import "./packages.css";
// using array, the array named data
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/image2.jpg";
import img3 from "../../Assets/image3.jpg";
import img4 from "../../Assets/image4.jpg";
import img5 from "../../Assets/image5.jpg";
import img6 from "../../Assets/image6.jpg";
import img7 from "../../Assets/image7.jpg";
import img8 from "../../Assets/image8.jpg";
import img9 from "../../Assets/image10.jpg";
//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Packages = () => {
  //create a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <section className="packages container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Our Packages
          </h3>

          <h5 data-aos="fade-up" data-aos-duration="4000" className="shortDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h5>
        </div>

        <div className="secContent grid">
          {/* using high orfer array mathod (map).
    To use a list of object in one array */}

          {Data.map(
            ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  {/* Returning single id from the map array */}

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle"> {destTitle}</h4>
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
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

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
      <Footer></Footer>
    </div>
  );
};

export default Packages;
