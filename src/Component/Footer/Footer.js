import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faPhone,
  faClock,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
// storing icon in variable
const phone = <FontAwesomeIcon icon={faPhone} />;
const clock = <FontAwesomeIcon icon={faClock} />;
const location = <FontAwesomeIcon icon={faLocationArrow} />;

const Footer = () => {
  return (
    <section className="footer">
      <div className="container py-4">
        <div className="container">
          <div className="row gx-5 pt-5">
            <div className="col">
              <h4>Learn</h4>
              <p>
                Vivamus porta efficitur nibh nec convallis. Vestibulum egestas
                eleifend justo. Ut tellus ipsum, accumsan
              </p>
            </div>
            <div className="col">
              <div className="all-contacts">
                <div className="contact-info d-flex align-items-center">
                  {phone}
                  <div className="contact-single ms-3">
                    <h4 className="text-capitalize">call</h4>
                    <span>+2 342 5446 67</span>
                  </div>
                </div>
                <div className="contact-info d-flex align-items-center my-3">
                  {clock}
                  <div className="contact-single ms-3">
                    <h4 className="text-capitalize">work time</h4>
                    <span>Mon - Fri 8 AM - 5 PM</span>
                  </div>
                </div>
                <div className="contact-info d-flex align-items-center">
                  {location}

                  <div className="contact-single ms-3">
                    <h4 className="text-capitalize">adress</h4>
                    <span>Franklin St,Greenpoint Ave</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h4 className="text-capitalize ">quick links</h4>
              <ul className="links ps-0 mt-3">
                <li>About Us</li>
                <li>Our Classes</li>
                <li>About US</li>
                <li>School Teachers</li>
                <li>Recent Events</li>
                <li>Our News</li>
                <li>Schedule</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
