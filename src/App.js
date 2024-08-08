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
    </>
  );
}

export default App;
