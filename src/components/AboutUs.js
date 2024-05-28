import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

const AboutUs = () => (
  <section className="about-us-section" id="about-us">
    <div className="about-us-content" data-aos="fade-up">
      <h2>Excelling With Over 15 Years Of Experience</h2>
      <p>
        With more than 15 years of experience, H.A. construction has become one
        of the top companies in the construction industry. Our reputation is
        built on a foundation of trust, quality, and exceptional customer
        service. We pride ourselves on our innovative designs ensuring that
        every project we undertake meets the highest standards of excellence.
        Choose H.A. Construction for your next project and experience the
        difference of working with a company committed to excellence and
        customer satisfaction.
      </p>
      <div className="highlights">
        <div className="highlight-item" data-aos="zoom-in">
          Experienced and Skilled Workforce
        </div>
        <div className="highlight-item" data-aos="zoom-in" data-aos-delay="100">
          Highest Quality Materials
        </div>
        <div className="highlight-item" data-aos="zoom-in" data-aos-delay="200">
          100% Satisfaction
        </div>
        <div className="highlight-item" data-aos="zoom-in" data-aos-delay="300">
          Competitive Pricing
        </div>
        <div className="highlight-item" data-aos="zoom-in" data-aos-delay="400">
          100+ Successful Projects Done
        </div>
        <div className="highlight-item" data-aos="zoom-in" data-aos-delay="500">
          24/7 Availability
        </div>
      </div>
      <Link to="/about">
        <button className="about-button" data-aos="fade-up">
          About Us
        </button>
      </Link>
    </div>
    <div className="appointment" data-aos="fade-up" data-aos-delay="600">
      <h3>Speak with Our Team Today</h3>
      <p className="appointment-number">718-864-1970</p>
    </div>
  </section>
);

export default AboutUs;
