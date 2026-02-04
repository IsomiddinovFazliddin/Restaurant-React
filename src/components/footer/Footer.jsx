import React from "react";
import "./Footer.scss";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="card">
            <div className="box">
              <h3>Our Products</h3>
              <h5>Our menus</h5>
              <h5>Our burgers</h5>
              <h5>Our times sides</h5>
              <h5>Our naandwiches</h5>
            </div>
            <div className="box">
              <h3>legal information</h3>
              <h5>Legal Notice</h5>
            </div>
            <div className="box">
              <h3>Contact us</h3>
              <h5>Contacts</h5>
              <h5>Our addresses</h5>
              <h5>Become a Times Square franchisee</h5>
            </div>
            <div className="box">
              <h3>We accept</h3>
              <img src="/imgs/footerImg.png" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="icons">
              <FaFacebook />
              <FaTwitter />
              <FaDiscord />
              <IoLogoLinkedin />
            </div>
            <h6>© 2024 Nayef All rights reserved.</h6>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
