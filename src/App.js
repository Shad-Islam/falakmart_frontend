import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.png";
import TitleBox from "./components/TitleBox";
import cartIcon from "./assets/icons/cart.png";
import banner from "./assets/images/Banner.png";
import ImageSlider from "./components/ImageSlider";
import Home from "./pages/home/Home";

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
      <Home />

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
      <Footer />
      {/* footer part end */}
    </>
  );
}

export default App;
