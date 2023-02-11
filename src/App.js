import React from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Header from "./Components/Header/index";
import ShopPage from "./Pages/Shop";
import AboutUs from "./Pages/About/AboutUs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/about_us' element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
