import React from "react";
import "./HeaderStyle.css";

import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

const index = () => {
  return (
    <header className='Header'>
      <nav className='navContainer'>
        <h1 className='Logo'>
          <MdOutlineStoreMallDirectory className='Logo_Icon' />
          SabLi Store
        </h1>
        <div className='Links'>
          <ul className='navLinks'>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div className='cartDiv'>
            <FaShoppingBag className='Nav_Icon' />
            <p className='carItem'>0</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
