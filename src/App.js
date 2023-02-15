import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "./Components/Header/index";
import ShopPage from "./Pages/Shop";
import AboutUs from "./Pages/About/AboutUs";
import ProductDetail from "./Components/ProductPage/ProductDetails";
import CartPage from "./Pages/Cart/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
        <Route path='/cart_page' element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
