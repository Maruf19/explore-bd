import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8kfw5tr",
        "template_zsbax3m",
        form.current,
        "ZwLe3cjoDsAxotL9D"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  return (
    <div>
      <ScrollToTop/>
      <Navbar></Navbar>
      <section className="contact container section">
        <div className="container">
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div className="info">
                <div className="information">
                  <HiOutlineLocationMarker className="icon" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="information">
                  <BiMailSend className="icon" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                  <BsPhone className="icon" />
                  <p>123-456-789</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <RiMessengerLine className="icon" />
                  <AiOutlineInstagram className="icon" />
                  <FaWhatsapp className="icon" />
                  <TbBrandTelegram className="icon" />
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form ref={form} onSubmit={sendEmail} className="learn">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <label for="">Username</label>
                  <input type="text" name="name" className="input" required />
                </div>

                <div className="input-container">
                  <label for="">Email</label>
                  <input type="email" name="email" className="input" required />
                </div>
                <div className="input-container">
                  <label for="">Phone</label>
                  <input type="tel" name="phone" className="input" required />
                </div>

                <div className="input-container textarea">
                  <label for="">Message</label>
                  <textarea name="message" className="input" required></textarea>
                </div>
                <input type="submit" value="Send" className="send-btn" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
