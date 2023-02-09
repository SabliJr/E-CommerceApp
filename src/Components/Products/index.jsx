import React from "react";
import Products from "../../Data/Products";
import SingleProduct from "./SingleProduct";

const index = () => {
  return (
    <article className='ProductAr'>
      <h2> Upcoming season.</h2>
      <p>Get your prefect summer outfit & get ready for it!</p>
      <div className='Products'>
        {Products?.map((x, id) => {
          return <SingleProduct key={id} {...x} />;
        })}
      </div>
    </article>
  );
};

export default index;
