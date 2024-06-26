import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/HeroSection.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroSection = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };
  //   timeout.current = setTimeout(nextSlide, 10500);
  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <AnimatePresence>
          {slides.map((slide, index) => (
            <div className="hero-slide" key={index}>
              {index === current && (
                <div className="hero-slider">
                  <motion.img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero-image"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeAnimation}
                  />
                  <div className="hero-content">
                    <h1 data-aos="fade-down" data-aos-duration="600">
                      {slide.title}
                    </h1>

                    <Link
                      to="services"
                      smooth={true}
                      duration={1000}
                      className="hero-button"
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="250"
                    >
                      {slide.labelOne}

                      <IoMdArrowRoundForward className="arrow" />
                    </Link>
                    <Link
                      to="reach-us"
                      smooth={true}
                      duration={1000}
                      className="hero-button"
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="250"
                    >
                      {slide.labelTwo}

                      <IoMdArrowRoundForward className="arrow" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </AnimatePresence>
        <div className="slider-buttons">
          <IoArrowBack className="arrow-button" onClick={prevSlide} />
          <IoArrowForward className="arrow-button" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
