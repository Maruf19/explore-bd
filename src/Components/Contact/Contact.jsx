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
      <Navbar></Navbar>
      <section className="contact container section">
        <div class="container">
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Let's get in touch</h3>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div class="info">
                <div class="information">
                  <HiOutlineLocationMarker className="icon" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div class="information">
                  <BiMailSend className="icon" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div class="information">
                  <BsPhone className="icon" />
                  <p>123-456-789</p>
                </div>
              </div>

              <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                  <RiMessengerLine className="icon" />
                  <AiOutlineInstagram className="icon" />
                  <FaWhatsapp className="icon" />
                  <TbBrandTelegram className="icon" />
                </div>
              </div>
            </div>

            <div class="contact-form">
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form ref={form} onSubmit={sendEmail} class="learn">
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <label for="">Username</label>
                  <input type="text" name="name" class="input" required />
                </div>

                <div class="input-container">
                  <label for="">Email</label>
                  <input type="email" name="email" class="input" required />
                </div>
                <div class="input-container">
                  <label for="">Phone</label>
                  <input type="tel" name="phone" class="input" required />
                </div>

                <div class="input-container textarea">
                  <label for="">Message</label>
                  <textarea name="message" class="input" required></textarea>
                </div>
                <input type="submit" value="Send" class="send-btn" />
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
