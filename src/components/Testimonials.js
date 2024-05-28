import React, { useState } from "react";
import "../styles/Testimonials.css";
import { FaUser } from "react-icons/fa";
import { GiSpottedArrowhead } from "react-icons/gi";
import { GiPositionMarker } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    icon: <GiSpottedArrowhead />,
    text: "Received many compliments on my house.",
    name: "Lydia",
  },
  {
    id: 2,
    icon: <GiPositionMarker />,
    text: "Very Professional and best prices!",
    name: "Faizah",
  },
  {
    id: 3,
    icon: <FaUser />,
    text: "Professional and reliable.",
    name: "Tahir",
  },
  {
    id: 4,
    icon: <GiPositionMarker />,
    text: "Outstanding experience.",
    name: "Tayyab",
  },
  {
    id: 5,
    icon: <GiSpottedArrowhead />,
    text: "Excellent painting.",
    name: "Hafsah",
  },
  {
    id: 6,
    icon: <FaUser />,
    text: "Very satisfied with the work.",
    name: "Gloria",
  },
];

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.querySelector(".testimonials-container");
    const containerWidth = container.clientWidth;
    const newScrollPosition =
      direction === "left"
        ? Math.max(scrollPosition - containerWidth, 0)
        : Math.min(
            scrollPosition + containerWidth,
            container.scrollWidth - containerWidth
          );

    container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    setScrollPosition(newScrollPosition);
  };

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      data-aos="fade-up"
    >
      <h2 data-aos="fade-right">Testimonials</h2>
      <div className="testimonials-wrapper" data-aos="fade-left">
        <button
          className="scroll-button left"
          onClick={() => handleScroll("left")}
          data-aos="zoom-in"
        >
          <FaArrowLeft />
        </button>
        <div className="testimonials-container" data-aos="fade-up">
          {testimonialsData.map((testimonial) => (
            <div
              className="testimonial"
              key={testimonial.id}
              data-aos="flip-left"
            >
              <div className="testimonial-icon">{testimonial.icon}</div>
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
        <button
          className="scroll-button right"
          onClick={() => handleScroll("right")}
          data-aos="zoom-in"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
