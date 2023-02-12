import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsStyle.css";
import { FormateCurrency } from "../../Utility/FormateCurrency";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { productsContext } from "../../Context/ManageProducts";

const SingleProduct = ({ id, name, img, description, price }) => {
  const { addToCart } = useContext(productsContext);
  const navigate = useNavigate();

  let productSelect = (id) => {
    navigate(`productDetail/${id}`);
  };

  return (
    <div className='ProductDiv'>
      <div
        className='productText'
        onClick={() => {
          productSelect(id);
        }}>
        <img src={img} alt='ProductImg' className='Product' />
        <h3>{name}</h3>
        <p>{description.slice(0, 80)}...</p>
      </div>
      <h5>{FormateCurrency(price)}</h5>
      <MdOutlineAddShoppingCart className='Item_Icon' onClick={addToCart} />
    </div>
  );
};

export default SingleProduct;
