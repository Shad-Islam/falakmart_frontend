import "./App.css";
import logo from "./assets/images/logo.png";
import cartIcon from "./assets/icons/cart.png";

function App() {
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
      <section className="banner">
        <img src="" alt="" />
      </section>
      {/* banner end */}

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
              <div className="footer_information"></div>
              <div className="footer_customer_service"></div>
              <div className="footer_contacts"></div>
            </div>
          </div>
          <div className="footer_bottom"></div>
        </div>
      </footer>
      {/* footer part end */}
    </>
  );
}

export default App;
