import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import "./Feedback.css";

const Feedback = () => {
  const { user } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    const feedback = event.target.feedback.value;
    const feedbackData = {
      feedback,
      name: user?.displayName

    };

    fetch("https://explore-bd-server-ahm-rubayed.vercel.app/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Feedback placed successfully");
          event.target.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <ScrollToTop/>
      <Navbar />
      <div className="container py-32">
        <div className="secTitle">
          <h3 data-aos="fade-up" data-aos-duration="3000" className="title">
            Give your valuable feedback here
          </h3>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div>
            {" "}
            <textarea
              name="feedback"
              cols="120"
              rows="10"
              placeholder="Give your valuable feedback"
            ></textarea>

          </div>
          <button type="submit" value="Send" class="send-btn">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Feedback;
