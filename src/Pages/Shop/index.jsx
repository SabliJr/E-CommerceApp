import React from "react";

//Components
import Hero from "../../Components/HeroSection/Hero";
import Products from "../../Components/Products/index";
import NewsLetter from "../../Components/NewsLetter/SignUp";

const Index = () => {
  return (
    <>
      <Hero />
      <Products />
      <NewsLetter />
    </>
  );
};

export default Index;
