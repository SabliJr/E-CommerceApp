import React from "react";
import "./ProductDetail.css";

import NewsLetter from "../NewsLetter/SignUp";
import Features from "../Features/index";
import Products from "../../Data/Products";

import { FormateCurrency } from "../../Utility/FormateCurrency";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const ProductDetail = () => {
  let gettingProduct = window.location.pathname.split("/");
  let productId = gettingProduct[2];

  return (
    <main>
      {Products?.map((x) => {
        if (x.id === Number(productId)) {
          return (
            <section className='productDiv'>
              <img src={x.img} alt='ProductImg' className='ProductImg' />
              <article className='productInfo'>
                <h2>{x.name}</h2>
                <p>{x.description}</p>
                <h5>{FormateCurrency(x.price)}</h5>
                <div className='mid_div'>
                  {x.name !== "Pantalon" && x.name !== "Short Pants" && (
                    <div className='sizeDiv'>
                      <label htmlFor='size_select'>
                        <h5>Please choose a size:</h5>
                      </label>
                      <select id='size_select'>
                        <option value='Size'>size</option>
                        <option value='s'>S</option>
                        <option value='m'>M</option>
                        <option value='l'>L</option>
                        <option value='xl'>XL</option>
                      </select>
                    </div>
                  )}

                  <div className='qntDiv'>
                    <CiSquareMinus className='ProIcon' />
                    <h5>QNT: 0 </h5>
                    <CiSquarePlus className='ProIcon' />
                  </div>
                </div>
                <button className='ProButton'>Add To Cart</button>
              </article>
            </section>
          );
        } else {
          return null;
        }
      })}
      <Features />
      <NewsLetter />
    </main>
  );
};

export default ProductDetail;
