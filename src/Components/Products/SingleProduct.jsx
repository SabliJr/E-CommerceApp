import React from "react";
import "./ProductsStyle.css";
import { FormateCurrency } from "../../Utility/FormateCurrency";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const SingleProduct = ({ name, img, description, price }) => {
  return (
    <div className='ProductDiv'>
      <img src={img} alt='ProductImg' className='Product' />
      <div className='productText'>
        <h3>{name}</h3>
        <p>{description.slice(0, 80)}...</p>
        <h5>{FormateCurrency(price)}</h5>
      </div>
      <MdOutlineAddShoppingCart className='Item_Icon' />
    </div>
  );
};

export default SingleProduct;
