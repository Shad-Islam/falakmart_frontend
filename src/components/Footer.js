import React from "react";
import "./style/Footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_top">
          <div className="footer_top_left">
            <div className="footer_details">
              <img className="footer_logo" src={logo} alt="Logo" />
              <p className="footer_text">
                Lorem ipsum dolor sit amet consectetur. Metus nulla urna rhoncus
                faucibus aliquam senectus consequat sit dui. Ipsum posuere nunc
                id eu nunc faucibus est. Tortor ante laoreet elit.
              </p>

              <div>
                <h5 className="social_media_link">FOLLOW US</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* footer right side start */}

          <div className="footer_top_right">
            <div className="footer_information">
              <ul className="footer_list">
                <li className="footer_top_right_heading">INFORMATION</li>
                <li className="footer_top_right_items">About Us</li>
                <li className="footer_top_right_items">Blog</li>
              </ul>
            </div>
            <div className="footer_customer_service">
              <ul className="footer_list">
                <li className="footer_top_right_heading">CUSTOMER SERVICE</li>
                <li className="footer_top_right_items">Cancellation policy</li>
                <li className="footer_top_right_items">Return Policy</li>
                <li className="footer_top_right_items">Shipping & Delivery</li>
                <li className="footer_top_right_items">Privacy Policy</li>
                <li className="footer_top_right_items">Terms & Conditions</li>
                <li className="footer_top_right_items">FAQ</li>
              </ul>
            </div>
            <div className="footer_contacts">
              <ul className="footer_list">
                <li className="footer_top_right_heading">CONTACTS</li>
                <li className="footer_top_right_items">Address</li>
                <li className="footer_top_right_items_white">
                  Mohammadpur 1200
                </li>
                <li className="footer_top_right_items">Phone</li>
                <li className="footer_top_right_items_white">0131111111</li>
                <li className="footer_top_right_items">Email</li>
                <li className="footer_top_right_items_white">
                  falakmart@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <p>@All Rights Reserved Falakmart 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
