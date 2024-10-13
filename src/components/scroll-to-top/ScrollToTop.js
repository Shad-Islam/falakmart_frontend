import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Destructure 'pathname'

  useEffect(() => {
    window.scrollTo(0, 200); // Scroll to the top of the page
  }, [pathname]); // Trigger effect when 'pathname' changes

  return null;
}
