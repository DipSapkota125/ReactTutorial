import React from "react";
import { Link } from "react-router-dom";
import { FaAddressBook, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>

        <div className="contact-container">
          <div className="row">
            <div className="column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <Link>
                        <FaAddressBook />
                      </Link>
                    </i>
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <h5>Ward 29, Dillibazar, Kathmandu Pipalboat</h5>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <Link>
                        <FaPhoneAlt />
                      </Link>
                    </i>
                  </div>
                  <div className="text">
                    <h5>Contact</h5>
                    <h5>+977 9861315260</h5>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <Link>
                        <FaMailBulk />
                      </Link>
                    </i>
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <h5>dipsapkota325@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="contact-form">
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="map-column">
              <div className="contact-map">
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.399787646333!2d85.32672851462897!3d27.70494008279295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a74d6ee495%3A0x7f4d91c7478c536a!2sDillibazar%20Pipal%20Bot!5e0!3m2!1sen!2snp!4v1670679529946!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  refererpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
