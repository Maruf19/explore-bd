import React from "react";
import "./contact.css";
import { BiBuildingHouse } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <section
        className="contact section flex"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div>
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div className="info">
                <div className="information">
                  <BiBuildingHouse className="icon" alt="" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="information">
                  <FiMail className="icon" alt="" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                  <BsPhone className="icon" alt="" />
                  <p>123-456-789</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <Link to="/">
                    <FiFacebook classNameName="icon" />
                  </Link>

                  <Link to="/">
                    <FiTwitter classNameName="icon" />
                  </Link>

                  <Link to="/">
                    <AiOutlineInstagram classNameName="icon" />
                  </Link>

                  <Link to="/">
                    <IoLogoLinkedin classNameName="icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" />
                  <label for="">Username</label>
                </div>
                <div className="input-container">
                  <input type="email" name="email" />
                  <label for="">Email</label>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" />
                  <label for="">Phone</label>
                </div>
                <div className="input-container">
                  <textarea name="message" className="input"></textarea>
                  <label for="">Message</label>
                </div>
                <button className="btn">
                  <Link to="/">Send</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
