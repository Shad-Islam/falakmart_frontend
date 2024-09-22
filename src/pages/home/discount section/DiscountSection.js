import React from "react";
import { useState } from "react";
import "./style/DiscountSection.css";

function DiscountSection() {
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
    </>
  );
}

export default DiscountSection;
