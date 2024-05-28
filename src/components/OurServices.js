import React from "react";
import { Link } from "react-router-dom";
import "../styles/OurServices.css";
import { MdOutlineRoofing } from "react-icons/md";
import { GiLargePaintBrush } from "react-icons/gi";
import { GiBrickWall } from "react-icons/gi";
import { Gi3dStairs } from "react-icons/gi";
import { FaRoad, FaWarehouse } from "react-icons/fa";

const OurServices = () => (
  <section
    className="services-section"
    id="services"
    data-aos="fade-right"
    data-aos-duration="1200"
    data-aos-delay="300"
    data-aos-once="true"
    data-aos-anchor-placement="center bottom"
  >
    <h2>Our Services</h2>
    <div className="services-container">
      <div className="service">
        <MdOutlineRoofing className="service-icon" />
        <h3>Roof</h3>
        <div className="underline"></div>
        <p>
          Improve the Safety and Longevity of Your Property with H.A.
          Construction’s Top-Tier Roofing Solutions. From expert repairs to
          flawless installations, our commitment to exceptional craftsmanship
          ensures durable, weather-resistant results.
        </p>
        <Link to="/Services">
          {" "}
          <button className="read-more">Read More</button>
        </Link>
      </div>
      <div className="service">
        <GiLargePaintBrush className="service-icon" />
        <h3>Painting</h3>
        <div className="underline"></div>
        <p>
          Enhance the beauty of your property with H.A. Construction's
          exceptional painting services. We create pathways that are durable and
          visually captivating, elevating the overall charm of your space.
        </p>
        <Link to="/Services">
          {" "}
          <button className="read-more">Read More</button>
        </Link>{" "}
      </div>
      <div className="service">
        <GiBrickWall className="service-icon" />
        <h3>Brick Work</h3>
        <div className="underline"></div>
        <p>
          At H.A. Construction, we do brick cleaning and pointing. Our
          commitment to quality ensures that every project not only meets but
          exceeds your expectations, creating beautiful and functional spaces
          that stand the test of time.
        </p>
        <Link to="/Services">
          {" "}
          <button className="read-more">Read More</button>
        </Link>{" "}
      </div>
      <div className="service">
        <Gi3dStairs className="service-icon" />
        <h3>New Stairs</h3>
        <div className="underline"></div>
        <p>
          Make new steps for the outside of your home. Our expert team at H.A.
          Construction uses high-quality materials to ensure your new steps are
          not only visually stunning but also durable and safe. We tailor our
          services to match your unique taste and needs, creating a welcoming
          entrance that adds value and charm to your property.
        </p>
        <Link to="/Services">
          {" "}
          <button className="read-more">Read More</button>
        </Link>{" "}
      </div>
      <div className="service">
        <FaRoad className="service-icon" />
        <h3>Sidewalk Services</h3>
        <div className="underline"></div>
        <p>
          We also build better sidewalks for you. Whether you're looking to
          replace old, cracked pathways or create new, accessible routes, we
          tailor our services to meet your specific needs and preferences.
          Enhance the look and value of your property with beautifully crafted
          sidewalks that provide a smooth and inviting walkway for residents and
          visitors alike.
        </p>
        <Link to="/Services">
          {" "}
          <button className="read-more">Read More</button>
        </Link>{" "}
      </div>
      <div className="service">
        <FaWarehouse className="service-icon" />
        <h3>Siding</h3>
        <div className="underline"></div>
        <p
          data-aos="zoom-out-down"
          data-aos-duration="1400"
          data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          We also do stucco. Our team at H.A. Construction excels in applying
          stucco finishes that enhance the beauty and durability of your home’s
          exterior. Using high-quality materials and expert techniques, we
          create a seamless and attractive surface that stands up to the
          elements and adds a touch of elegance to your property.
        </p>
        <Link to="/Services">
          {" "}
          <button className="read-more">Read More</button>
        </Link>{" "}
      </div>
    </div>
  </section>
);

export default OurServices;
