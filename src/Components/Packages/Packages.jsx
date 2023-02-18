import React, { useContext, useEffect, useState } from "react";
import "./packages.css";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { AuthContext } from "../../contexts/AuthProvider";

const Packages = () => {
  const [packageDesc, setPackageDesc] = useState();
  // const [packages, setpackages] = useState(null)

  const packages = useLoaderData()
  const { user } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/admin/packages")
      .then((res) => res.json())
      .then((data) => setPackageDesc(data));
  }, [packageDesc]);

  console.log(packages)

  // useEffect(() => {
  //   fetch("http://localhost:5000/admin/tripPackage")
  //     .then((res) => res.json())
  //     .then((data) => setpackages(data));
  // }, [packages]);

  // const {title, img, price, location } = data;
  // console.log(data)

  const handleAddToCart = (travel) => {
    const travelCart = {
      email: user?.email,
      travel
    }
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(travelCart),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          alert("Added to cart successfully");
        }
      });
  }

  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <section className="packages container section">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Our Packages
          </h3>

          {packageDesc?.map((desc) => (
            <h5
              data-aos="fade-up"
              data-aos-duration="4000"
              className="shortDesc"
              key={desc?._id}
            >
              {desc?.desc}
            </h5>
          ))}
        </div>

        <div className="secContent grid">
          {packages.map((travel) => {
            return (
              <div key={travel._id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={travel.img} alt={travel.title} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {travel.title}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{travel.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {" "}
                        {travel.grade}
                        <h2>Per Person Package</h2>
                      </span>
                    </div>
                    <div className="price">
                      <h5>$ {travel.price}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{travel?.packageDesc}</p>
                  </div>
                  <div className="flex gap-1">
                    <Link to="/schedule" className="custom-btn flex">
                      Details <HiOutlineClipboardCheck className="icon" />
                    </Link>
                    <Link to="/feedback" className="custom-btn flex">
                      Reviews <HiOutlineClipboardCheck className="icon" />
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleAddToCart(travel)} className="custom-btn flex">
                      Add to Cart
                    </button>
                    <Link to="/contact" className="custom-btn flex">
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
              // <div></div>
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
