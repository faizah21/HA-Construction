import React from "react";
import "../styles/About.css";
import truck from "../assets/truck.jpg";
import ReachUs from "../components/ReachUs";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <div className="about-header-text">
            <h1>ABOUT US</h1>
            <p>
              <span>About H.A. Construction</span>
            </p>
          </div>
        </div>
        <section className="about-content">
          <div className="about-section">
            <div className="about-text" data-aos="fade-right">
              <div className="text-box">
                <h2>WHO WE ARE</h2>
                <h3>About H.A. Construction</h3>
                <p>
                  At H.A. Construction, we are dedicated to transforming your
                  vision into reality, blending craftsmanship with innovation to
                  create an exceptional home. With over 15 years of experience
                  in the industry, we have established ourselves as a premier
                  construction company, committed to delivering high-quality
                  results and exceeding client expectations.
                </p>
                <p>
                  Our reputation is built on a foundation of trust, quality, and
                  superior customer service. Based in the Bronx, we offer our
                  services across the borough as well as Yonkers. Our commitment
                  to excellence has earned us a loyal client base and numerous
                  successful projects. We understand the unique needs of our
                  community and provide tailored construction solutions that
                  reflect the highest standards of workmanship.
                </p>
              </div>
            </div>
            <div className="about-image" data-aos="fade-left">
              <img src={truck} alt="Construction Work" />
            </div>
          </div>
        </section>
      </div>
      <ReachUs />
    </>
  );
};

export default About;

//  {/* <div className="additional-text">
//           <p>
//             Versatility is key at H.A. Construction. Our extensive range of
//             services includes roofing, sidewalk repair, painting, and more.
//             Our comprehensive approach ensures that every construction need is
//             met with precision and expertise.
//           </p>
//           <p>
//             We believe in the importance of quality and durability in every
//             aspect of construction. We deliver outstanding results that
//             enhance the value and aesthetic appeal of your property.
//           </p>

//           <p>
//             At H.A. Construction, we don’t just build structures; we create
//             lasting legacies. Contact us today and experience the excellence
//             and dedication that defines every project we undertake.
//           </p>
//         </div> */}
