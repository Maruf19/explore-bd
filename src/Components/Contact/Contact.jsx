import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
//import icons
import { ImAddressBook } from "react-icons/im";
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
      {/* <section className="contact container section">
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
      </section> */}

<div class="contact container ">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Zindabazar, Sylhet</div>
          <div class="text-two">Bangladesh</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+01779580031</div>
          <div class="text-two">+01626350719</div>
        </div>
        <div class="email details">
          
          <div class="topic">Email</div>
          <div class="text-one">marufrony48@gmail,com</div>
          <div class="text-two">ShompaBiswas@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text capitalize">Send us a message</div>
             <form ref={form} onSubmit={sendEmail} >
        <div class="input-box">
          <input type="text" name="name" placeholder="Enter your name" required/>
        </div>
        <div class="input-box">
          <input type="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div class="input-box">
          <input  type="tel" name="phone" placeholder="Enter your contact no" required/>
        </div>
        <div class="input-box message-box">
        <input type="text"  name="message" placeholder="Enter your Message" required/>
        </div>
        <button class="button custom-btn flex">
         Send Now
        </button>
      </form>
    </div>
    </div>
  </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
