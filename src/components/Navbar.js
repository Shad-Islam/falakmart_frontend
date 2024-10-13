import React from "react";
import "./style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
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
