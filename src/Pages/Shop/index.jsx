import React from "react";
import Header from "../../Components/Header/index";
import Hero from "../../Components/HeroSection/Hero";
import Products from "../../Components/Products/index";
import NewsLetter from "../../Components/NewsLetter/SignUp";
const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <NewsLetter />
    </>
  );
};

export default index;
