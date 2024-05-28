import React from "react";
import "../styles/Contact.css";

const Contact = ({ handleSubmit, handleChange }) => (
  <div className="contactus-container" id="contact">
    <h2 data-aos="fade-up">Contact Us</h2>
    <div className="contactus-content">
      <div className="contactus-form" data-aos="fade-up" data-aos-delay="200">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contactus-info" data-aos="fade-up" data-aos-delay="400">
        <h3>Our Office</h3>
        <p>1076 Virginia Avenue, Bronx, NY 10472</p>
        <h3>Call Us</h3>
        <p>718-864-1970</p>
        <h3>Email Us</h3>
        <p>Ansar12309@gmail.com</p>
      </div>
    </div>
    <div className="contact-map" data-aos="fade-up" data-aos-delay="600">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6037.959793775383!2d-73.86187722393315!3d40.82840523048114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4c483eaa971%3A0x11c675e59fc6f318!2s1076%20Virginia%20Ave%2C%20Bronx%2C%20NY%2010472!5e0!3m2!1sen!2sus!4v1716844225467!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default Contact;
