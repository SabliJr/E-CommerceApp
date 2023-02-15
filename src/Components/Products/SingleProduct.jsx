import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsStyle.css";
import { FormateCurrency } from "../../Utility/FormateCurrency";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { productsContext } from "../../Context/ManageProducts";

const SingleProduct = ({ x }) => {
  const { addToCart } = useContext(productsContext);

  let navigate = useNavigate();
  let productSelect = (id) => {
    navigate(`productDetail/${id}`);
  };

  return (
    <div className='ProductDiv'>
      <div
        className='productText'
        onClick={() => {
          productSelect(x.id);
        }}>
        <img src={x.img} alt='ProductImg' className='Product' />
        <h3>{x.name}</h3>
        <p>{x.description.slice(0, 80)}...</p>
      </div>
      <h5>{FormateCurrency(x.price)}</h5>
      <MdOutlineAddShoppingCart
        className='Item_Icon'
        onClick={() => addToCart(x)}
      />
    </div>
  );
};

export default SingleProduct;
