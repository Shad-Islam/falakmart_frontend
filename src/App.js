import "./App.css";
import Home from "./pages/home/Home";
import Cart from "./pages/cart";
import PrductDetails from "./pages/product-details";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<PrductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
