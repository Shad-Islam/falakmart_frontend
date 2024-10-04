import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Cart() {
  return (
    <>
      <Header showArrowIcon={true} />
      <Navbar />
      <h1>This is the Cart Page</h1>
      <Footer />
    </>
  );
}
