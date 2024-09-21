import React from "react";
import "./style/Navbar.css";

function Navbar() {
  return (
    <>
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
    </>
  );
}

export default Navbar;
