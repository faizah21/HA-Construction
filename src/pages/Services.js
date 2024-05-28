import React from "react";
import "../styles/Services.css";
import Painting from "../assets/Painting.jpg";
import Roof from "../assets/Roof.jpg";
import Brick from "../assets/Brick.jpg";
import Stairs from "../assets/Stairs.jpg";
import Sidewalk from "../assets/Sidewalk.jpg";
import Siding from "../assets/Siding.jpg";
import {
  FaClock,
  FaSmile,
  FaMoneyBillWave,
  FaStar,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const servicesData = [
  {
    icon: <LazyLoadImage src={Roof} alt="Roof by Freepik" effect="blur" />,
    title: "Roof",
    description:
      "Need a new roof? Damaged due to bad weather? Reach out to our team today, we work quickly to fix your needs using expert techniques to ensure your roof is durable. Our experienced professionals provide thorough assessments and efficient repairs, giving you peace of mind and a secure home",
  },
  {
    icon: (
      <LazyLoadImage
        src={Painting}
        alt="Person painting by wayhomestudio on Freepik"
        effect="blur"
      />
    ),
    title: "Painting",
    description:
      "Elevate the aesthetic of your home and make it look even better with our painting services. You chose the color, we get the job done.",
  },
  {
    icon: (
      <LazyLoadImage
        src={Brick}
        alt="Brick image by rawpixel.com on Freepik"
        effect="blur"
      />
    ),
    title: "Brick Work",
    description:
      "Ensure your house looks as good outside as it does inside. We ensure your bricks are clean and also fill in the gaps between them with mortar or other durable materials. ",
  },
  {
    icon: (
      <LazyLoadImage
        src={Stairs}
        alt="Stairs image by mrsiraphol on Freepik"
        effect="blur"
      />
    ),
    title: "New Stairs",
    description:
      "We fix damaged stairs outside your home and replace them with new ones that will draw compliments to your place. Our skilled workers ensure that each step is not only safe and durable but also beautifully designed",
  },
  {
    icon: (
      <LazyLoadImage
        src={Sidewalk}
        alt="Sidewalk image by lifeforstock on Freepik"
        effect="blur"
      />
    ),
    title: "Sidewalk Services",
    description:
      "We specialize in constructing superior sidewalks for you. Whether you're aiming to replace old, cracked pathways or to create new, accessible routes, we customize our services to match your specific needs and preferences. New sidewalks not only enhance the aesthetic appeal of your property but also significantly increase its value",
  },
  {
    icon: (
      <LazyLoadImage
        src={Siding}
        alt="Siding image by tirachard on Freepik"
        effect="blur"
      />
    ),
    title: "Siding",
    description:
      "We also specialize in stucco applications. At H.A. Construction, our team excels in enhancing the beauty and durability of your home’s exterior with our expert stucco finishes. Using high-quality materials and advanced techniques, we create seamless, attractive surfaces that withstand the elements and add a touch of elegance to your property.",
  },
];
const benefitsData = [
  {
    icon: <FaClock />,
    title: "Emergency Service",
  },
  {
    icon: <FaSmile />,
    title: "Satisfaction Guarantee",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Prices",
  },
  {
    icon: <FaStar />,
    title: "15+ Years of Experience",
  },
];

const OurServices = () => (
  <section className="service-page-section" id="services">
    <h2>Our Services</h2>
    <div
      className="service-page-container"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {servicesData.map((service, index) => (
        <div
          className="service-page-card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          data-aos-duration="1000"
        >
          <div className="service-page-card-inner">
            <div className="service-page-card-front">
              {service.icon}
              <h3>{service.title}</h3>
            </div>
            <div className="service-page-card-back">
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <h2>Our Benefits</h2>
    <div
      className="benefits-page-container"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {benefitsData.map((benefit, index) => (
        <div
          className="benefit-page-card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          data-aos-duration="1000"
        >
          <div className="benefit-page-icon">{benefit.icon}</div>
          <h3>{benefit.title}</h3>
        </div>
      ))}
    </div>
    <div
      className="contact-info-section"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div
        className="contact-info"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <FaMapMarkerAlt className="contact-icon" />
        <div>
          <strong>Address:</strong>
          <p>1076 Virginia Avenue</p>
          <p>Bronx, NY, 10472</p>
        </div>
      </div>
      <div
        className="contact-info"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <FaEnvelope className="contact-icon" />
        <div>
          <strong>Email:</strong>
          <p>Ansar12309@gmail.com</p>
        </div>
      </div>
      <div
        className="contact-info"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <FaRegClock className="contact-icon" />
        <div>
          <strong>Open Hours:</strong>
          <p>Mon-Fri: Open 24hrs</p>
          <p>Sat: Open 24hrs</p>
          <p>Sun: Open 24hrs</p>
        </div>
      </div>
    </div>
  </section>
);

export default OurServices;
