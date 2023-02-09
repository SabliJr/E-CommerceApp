import React from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Header from "./Components/Header/index";
import ShopPage from "./Pages/Shop";
import AboutUs from "./Pages/About/AboutUs";
import ContactUs from "./Pages/Contact/ContactUs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact_us' element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
