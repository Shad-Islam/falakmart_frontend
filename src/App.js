import "./App.css";
import { useState } from "react";
import logo from "./assets/images/logo.png";
import TitleBox from "./components/TitleBox";
import cartIcon from "./assets/icons/cart.png";
import banner from "./assets/images/Banner.png";
import ImageSlider from "./components/ImageSlider";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  // discount form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNumeric = /^\d+$/.test(phoneNumber);

    if (!isNumeric) {
      setError("Please enter a valid phone number");
      return;
    }

    console.log("Phone number submitted:", phoneNumber);

    setPhoneNumber("");
    setError("");
  };

  return (
    <>
      <div className="container">
        {/* header start */}
        <header>
          <img className="logo" src={logo} alt="Logo" />
          <img className="cart_icon" src={cartIcon} alt="Logo" />
        </header>
        {/* header end */}
      </div>
      {/* nav start */}
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">All Brands</a>
          </li>
          <li>
            <a href="#">All Catagories</a>
          </li>
        </ul>
      </nav>
      {/* nav end */}
      {/* banner start */}
      <section className="banner_section">
        <img src={banner} alt="banner" />
      </section>
      {/* banner end */}

      {/* title box start  */}
      <div className="container">
        <TitleBox text="New Arrivals" />
      </div>
      {/* title box end */}

      {/* image slider start  */}
      <ImageSlider />
      {/* image slider end */}

      {/* discount section start  */}
      <div className="container">
        <section className="discount_section">
          <h3 className="discount_section_heading">Get Discount</h3>
          <span className="discount_section_text">
            For all new Falakmart’s Whatsapp subscribers
          </span>
          <form onSubmit={handleSubmit} className="discount_form">
            <label htmlFor="phone"></label>
            <span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                className="phone_input"
                onChange={(e) => setPhoneNumber(e.target.value)}
                // placeholder="Enter your phone number"
                required
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </span>
            <button type="submit" className="discount_form_submit_button">
              Subscribe
            </button>
          </form>
        </section>
      </div>

      {/* discount section end  */}

      {/* footer part start */}
      <footer>
        <div className="container">
          <div className="footer_top">
            <div className="footer_top_left">
              <div className="footer_details">
                <img className="footer_logo" src={logo} alt="Logo" />
                <p className="footer_text">
                  Lorem ipsum dolor sit amet consectetur. Metus nulla urna
                  rhoncus faucibus aliquam senectus consequat sit dui. Ipsum
                  posuere nunc id eu nunc faucibus est. Tortor ante laoreet
                  elit.
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
                  <li className="footer_top_right_items">
                    Cancellation policy
                  </li>
                  <li className="footer_top_right_items">Return Policy</li>
                  <li className="footer_top_right_items">
                    Shipping & Delivery
                  </li>
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
      {/* footer part end */}
    </>
  );
}

export default App;
