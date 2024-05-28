import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/submit-reachus",
        formData
      );
      console.log(response.data);

      const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSfvkZuJ2wIVMfn0tNty-7sde66Q_bGOK-mpDUjWq6E1lKSmEg/viewform?usp=pp_url&entry.1824020934=${formData.name}&entry.1097573435=${formData.email}&entry.1923703919=${formData.phone}&entry.959468833=${formData.service}&entry.1012880991=${formData.message}`;

      // Submit the form data to Google Forms
      window.open(googleFormURL, "_blank");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <GlobalStyles />
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home handleChange={handleChange} handleSubmit={handleSubmit} />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <Contact
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
