import React from "react";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import ReachUs from "../components/ReachUs";
import "../styles/Home.css";
import { slides } from "../data/SliderData.js";

const Home = ({ handleChange, handleSubmit }) => (
  <div>
    <HeroSection slides={slides} />
    <OurServices
      
    />
    <AboutUs />
    <Testimonials />
    <WhyChooseUs />
    <ReachUs handleChange={handleChange} handleSubmit={handleSubmit} />
  </div>
);

export default Home;
