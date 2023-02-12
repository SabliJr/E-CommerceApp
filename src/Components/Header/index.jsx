import React, { useContext } from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";

import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { productsContext } from "../../Context/ManageProducts";

const Index = () => {
  const { addToCart } = useContext(productsContext);

  return (
    <header className='Header'>
      <nav className='navContainer'>
        <h1 className='Logo'>
          <Link
            style={{
              textDecoration: "none",
              color: "rgba(44, 62, 80, 1.0)",
            }}
            to='/'>
            <MdOutlineStoreMallDirectory className='Logo_Icon' />
            SabLi Store
          </Link>
        </h1>
        <div className='Links'>
          <ul className='navLinks'>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(44, 62, 80, 1.0)",
                }}
                to='/'>
                Shop
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(44, 62, 80, 1.0)",
                }}
                to='/about_us'>
                About Us
              </Link>
            </li>
          </ul>
          <div className='cartDiv'>
            <FaShoppingBag className='Nav_Icon' />
            <p className='carItem'>3</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Index;
