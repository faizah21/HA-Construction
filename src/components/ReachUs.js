import "../styles/ReachUs.css";
import React from "react";

const ReachUs = ({ handleChange, handleSubmit }) => {
  return (
    <section className="reach-us-section" id="reach-us">
      <div className="reach-us-form">
        <h2>Reach Us Here!</h2>
        <p>Transforming Spaces, Crafting Futures</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              onChange={handleChange}
            />
            <select name="service" onChange={handleChange}>
              <option value="">Is Your Concern Urgent?</option>
              <option value="service1">Yes</option>
              <option value="service2">No</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit">SUBMIT YOUR REQUEST</button>
        </form>
        <p className="contact-response">Will Contact You In 1 Business Day*</p>
      </div>
      <div className="contact-details">
        <h3>Alternative Ways To Reach Our Team Of Skilled Professionals</h3>
        <p>
          CALL US: <a href="tel:+7188641970">+1 718-864-1970</a>
        </p>
        <p>
          WHATSAPP US: <a href="7188641970">+1 718-864-1970</a>
        </p>
        <p>
          EMAIL: <a href="mailto:ansar12309@gmail.com">Ansar12309@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default ReachUs;
