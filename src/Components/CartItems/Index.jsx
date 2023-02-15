import React, { useContext } from "react";
import "./CartItems.css";

import { FormateCurrency } from "../../Utility/FormateCurrency";
import { productsContext } from "../../Context/ManageProducts";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const Index = () => {
  const { sendToCart } = useContext(productsContext);
  console.log(sendToCart);

  return (
    <div className='cartItemDiv'>
      {sendToCart.length > 0 ? (
        <section>
          {sendToCart?.map((x) => {
            return (
              <>
                <main key={x.id} className='Product_Main'>
                  <img src={x.img} alt='ProductImg' className='cartImg' />
                  <div className='cartItemInfo'>
                    <h2>{x.name}</h2>
                    <span className='info_span'>
                      <h5>{FormateCurrency(x.price)}</h5>
                      <select id='Cart_size_select'>
                        <option value='Size'>size</option>
                        <option value='s'>S</option>
                        <option value='m'>M</option>
                        <option value='l'>L</option>
                        <option value='xl'>XL</option>
                      </select>
                    </span>
                  </div>
                  <div className='CartIcons'>
                    <CiSquareMinus className='ProIcon' />
                    <h5>QNT: 3</h5>
                    <CiSquarePlus className='ProIcon' />
                  </div>
                  <button className='RemoveBtn'>Remove</button>
                </main>
              </>
            );
          })}
          <span className='cart_total'>Total sum: {FormateCurrency(1150)}</span>
        </section>
      ) : (
        <div className='No_item_div'>
          <p className='no_items'>Your Basket is Empty</p>
          <button className='Go_shopping'>Go Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Index;
