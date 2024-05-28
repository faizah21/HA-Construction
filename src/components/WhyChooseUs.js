import React from "react";
import { Link } from "react-router-dom";
import smile from "../assets/smile.jpg";
import "../styles/WhyChooseUs.css";

const WhyChoose = () => (
  <section className="why-choose-section" id="why-choose">
    <div className="why-choose-content" data-aos="fade-up">
      <h2 data-aos="fade-right">Why Choose</h2>
      <p data-aos="fade-left">
        Choose H.A. Construction for the top experienced professionals who are
        dedicated to bringing your vision to life with unmatched expertise and
        commitment. We ensure your project is completed on time, within budget,
        and to the highest standards. Experience the difference with H.A.
        Construction and transform the outside of your home with confidence.
      </p>
      <Link to="/about">
        <a href="#about" className="learn-more" data-aos="zoom-in">
          Learn More About Us →
        </a>
      </Link>
    </div>
    <div className="why-choose-image" data-aos="fade-up" data-aos-delay="300">
      <img src={smile} alt="Image by DilokaStudio on Freepik" />
    </div>
  </section>
);

export default WhyChoose;
